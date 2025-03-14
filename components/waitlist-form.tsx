"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface WaitlistFormProps {
  onClose: () => void
}

export default function WaitlistForm({ onClose }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="space-y-4">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Enter your email to join our waitlist and be the first to know when we launch.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
          </div>
          <Button type="submit" className="w-full relative overflow-hidden group" disabled={loading}>
            <span className="relative z-10">{loading ? "Processing..." : "Join Waitlist"}</span>

            {loading ? (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-primary-foreground/30"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </Button>
        </form>
      ) : (
        <motion.div
          className="flex flex-col items-center justify-center space-y-3 py-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
          >
            <div className="relative">
              <CheckCircle className="h-12 w-12 text-primary" />
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0 }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
              >
                <CheckCircle className="h-12 w-12 text-primary" />
              </motion.div>
            </div>
          </motion.div>
          <h3 className="text-xl font-medium">You're on the list!</h3>
          <p className="text-center text-muted-foreground">
            Thank you for joining our waitlist. We'll notify you when we launch.
          </p>
          <Button variant="outline" onClick={onClose} className="mt-2">
            Close
          </Button>
        </motion.div>
      )}
    </div>
  )
}

