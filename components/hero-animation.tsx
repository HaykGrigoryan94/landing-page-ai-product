"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      originalX: number
      originalY: number
      density: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.originalX = x
        this.originalY = y
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
        this.density = Math.random() * 30 + 1
      }

      update(mouseX?: number, mouseY?: number) {
        // Mouse interaction
        if (mouseX !== undefined && mouseY !== undefined) {
          const dx = mouseX - this.x
          const dy = mouseY - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance

          // Max distance, past that the force will be 0
          const maxDistance = 100
          let force = (maxDistance - distance) / maxDistance

          if (force < 0) force = 0

          const directionX = forceDirectionX * force * this.density
          const directionY = forceDirectionY * force * this.density

          if (distance < maxDistance) {
            this.x -= directionX
            this.y -= directionY
          } else {
            // Return to original position
            if (this.x !== this.originalX) {
              const dx = this.x - this.originalX
              this.x -= dx / 20
            }
            if (this.y !== this.originalY) {
              const dy = this.y - this.originalY
              this.y -= dy / 20
            }
          }
        } else {
          // Regular movement
          this.x += this.speedX
          this.y += this.speedY

          if (this.x < 0 || this.x > canvas.width / window.devicePixelRatio) {
            this.speedX = -this.speedX
          }

          if (this.y < 0 || this.y > canvas.height / window.devicePixelRatio) {
            this.speedY = -this.speedY
          }
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particlesArray: Particle[] = []
    const particleCount = 80

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * (canvas.width / window.devicePixelRatio)
      const y = Math.random() * (canvas.height / window.devicePixelRatio)
      particlesArray.push(new Particle(x, y))
    }

    // Mouse position
    let mouseX: number | undefined
    let mouseY: number | undefined

    canvas.addEventListener("mousemove", (event) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = event.clientX - rect.left
      mouseY = event.clientY - rect.top
    })

    canvas.addEventListener("mouseleave", () => {
      mouseX = undefined
      mouseY = undefined
    })

    // Draw connections between particles
    function drawConnections() {
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x
          const dy = particlesArray[i].y - particlesArray[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 150, 255, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(mouseX, mouseY)
        particlesArray[i].draw()
      }

      drawConnections()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full max-w-[500px] aspect-square"
      style={{ scale, opacity, rotate }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <canvas ref={canvasRef} className="relative z-10 w-full h-full rounded-full" />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.div
          className="w-24 h-24 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(120, 120, 255, 0.3)",
              "0 0 0 15px rgba(120, 120, 255, 0)",
              "0 0 0 0 rgba(120, 120, 255, 0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
          }}
        >
          <motion.div
            className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <motion.div
              className="w-8 h-8 bg-primary rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

