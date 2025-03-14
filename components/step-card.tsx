"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface StepCardProps {
  title: string
  description: string
  icon: React.ReactNode
  number: number
}

export default function StepCard({ title, description, icon, number }: StepCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
        <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300" />

        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
          {number}
        </div>

        <CardContent className="pt-12 pb-6">
          <div className="flex items-center gap-2 mb-3">
            {icon}
            <h3 className="font-bold text-xl">{title}</h3>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

