"use client"

import { useState, useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { ArrowRight, Sparkles, Zap, Shield, Brain, Code, BarChart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import WaitlistForm from "@/components/waitlist-form"
import FeatureCard from "@/components/feature-card"
import HeroAnimation from "@/components/hero-animation"
import TestimonialCard from "@/components/testimonial-card"
import PricingCard from "@/components/pricing-card"
import FaqItem from "@/components/faq-item"
import StepCard from "@/components/step-card"

export default function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const features = [
    {
      title: "Advanced AI Processing",
      description: "Our cutting-edge algorithms process data faster than ever before.",
      icon: <Sparkles className="h-6 w-6 text-primary" />,
    },
    {
      title: "Real-time Analysis",
      description: "Get insights instantly with our real-time processing capabilities.",
      icon: <Zap className="h-6 w-6 text-primary" />,
    },
    {
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security measures.",
      icon: <Shield className="h-6 w-6 text-primary" />,
    },
  ]

  const steps = [
    {
      title: "Connect Your Data",
      description: "Easily integrate with your existing data sources through our simple API.",
      icon: <Code className="h-6 w-6 text-primary" />,
      number: 1,
    },
    {
      title: "AI Processing",
      description: "Our advanced algorithms analyze your data to extract meaningful insights.",
      icon: <Brain className="h-6 w-6 text-primary" />,
      number: 2,
    },
    {
      title: "Actionable Insights",
      description: "Receive clear, actionable insights that help drive business decisions.",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      number: 3,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content:
        "This AI platform has transformed how we analyze customer data. The insights we've gained have directly contributed to a 30% increase in customer retention.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Chen",
      role: "Data Scientist, InnovateLabs",
      content:
        "I've worked with many AI tools, but this one stands out for its ease of use and powerful capabilities. It's become an essential part of our workflow.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthX",
      content:
        "The predictive analytics feature has revolutionized our marketing strategy. We're now able to anticipate customer needs before they even express them.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for individuals and small teams just getting started.",
      features: ["Up to 1,000 API calls per month", "Basic analytics dashboard", "Email support", "1 project"],
      cta: "Join Waitlist",
      popular: false,
    },
    {
      name: "Pro",
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses with more advanced needs.",
      features: [
        "Up to 10,000 API calls per month",
        "Advanced analytics dashboard",
        "Priority email support",
        "5 projects",
        "Custom integrations",
      ],
      cta: "Join Waitlist",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations with complex requirements.",
      features: [
        "Unlimited API calls",
        "Full-featured analytics dashboard",
        "24/7 dedicated support",
        "Unlimited projects",
        "Custom integrations",
        "On-premise deployment options",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "How does your AI technology work?",
      answer:
        "Our AI platform uses a combination of machine learning, natural language processing, and computer vision to analyze data and provide actionable insights. The system continuously learns from new data to improve its accuracy and effectiveness.",
    },
    {
      question: "Is my data secure with your platform?",
      answer:
        "Absolutely. We implement enterprise-grade security measures, including end-to-end encryption, regular security audits, and compliance with industry standards like GDPR and CCPA. Your data is never shared with third parties without your explicit consent.",
    },
    {
      question: "How long does it take to set up and integrate with my existing systems?",
      answer:
        "Most customers are up and running within 1-2 days. Our platform offers pre-built integrations with popular tools and services, and our API is designed to be developer-friendly for custom integrations.",
    },
    {
      question: "Do you offer custom solutions for specific industries?",
      answer:
        "Yes, we offer industry-specific solutions for healthcare, finance, retail, and manufacturing. These solutions come with pre-trained models and workflows tailored to the unique challenges and requirements of each industry.",
    },
  ]

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="flex min-h-screen flex-col items-center" ref={targetRef}>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_70%)]" />
        </motion.div>

        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <motion.div
                className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-2 border border-primary/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Limited Beta Access Available
                </span>
              </motion.div>

              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  The Future of AI is
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
                >
                  Here
                </motion.span>
              </h1>

              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Our revolutionary AI platform helps you solve complex problems with ease. Unlock the power of artificial
                intelligence to transform your business today.
              </motion.p>

              <motion.div
                className="flex flex-col gap-2 min-[400px]:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Button
                  size="lg"
                  onClick={() => setShowWaitlist(true)}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <span className="relative z-10">Join Waitlist</span>
                  <span className="absolute inset-0 bg-primary opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <motion.span
                    className="absolute right-4 z-10"
                    initial={{ x: -5, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Button>

                <Button variant="outline" size="lg" onClick={scrollToFeatures} className="group">
                  <span>Learn More</span>
                  <motion.span
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    className="ml-2"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </Button>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=32&width=32&text=${i}`}
                        alt="User avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">500+</span> users already on the waitlist
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex justify-center"
            >
              <HeroAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="space-y-2">
              <motion.div
                className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
                whileInView={{
                  scale: [1, 1.1, 1],
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                Features
              </motion.div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful AI Capabilities</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform combines cutting-edge technology with intuitive design to deliver exceptional results.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <motion.div
              className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
              whileInView={{
                scale: [1, 1.1, 1],
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              How It Works
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple Process, Powerful Results
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our streamlined workflow makes it easy to harness the power of AI for your business.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <StepCard
                key={index}
                title={step.title}
                description={step.description}
                icon={step.icon}
                number={step.number}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <motion.div
              className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
              whileInView={{
                scale: [1, 1.1, 1],
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              Testimonials
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. See what our early users have to say about our platform.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                avatar={testimonial.avatar}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <motion.div
              className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
              whileInView={{
                scale: [1, 1.1, 1],
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              Pricing
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that's right for your business. All plans include access to our core AI features.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                cta={plan.cta}
                popular={plan.popular}
                onAction={() => setShowWaitlist(true)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6 max-w-4xl">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <motion.div
              className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
              whileInView={{
                scale: [1, 1.1, 1],
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              FAQ
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our AI platform.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_70%)]" />
        </motion.div>

        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center text-center space-y-4 md:space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mb-4"
            >
              <Sparkles className="h-10 w-10 text-primary" />
            </motion.div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Ready to Transform Your Business?
            </h2>

            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-2xl/relaxed">
              Join our waitlist today and be among the first to experience the future of AI.
            </p>

            <motion.div
              whileInView={{
                scale: [1, 1.05, 1],
                transition: { duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 },
              }}
              viewport={{ once: true }}
            >
              <Button size="lg" onClick={() => setShowWaitlist(true)} className="mt-4 px-8 py-6 text-lg">
                Join the Waitlist
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">AI Platform</h3>
              <p className="text-sm text-muted-foreground">
                Transforming businesses with the power of artificial intelligence.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Features</li>
                <li>Pricing</li>
                <li>Roadmap</li>
                <li>Documentation</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Platform. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <motion.div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-card rounded-lg shadow-lg max-w-md w-full p-6"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Join Our Waitlist</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowWaitlist(false)}>
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </Button>
            </div>
            <WaitlistForm onClose={() => setShowWaitlist(false)} />
          </motion.div>
        </motion.div>
      )}
    </main>
  )
}

