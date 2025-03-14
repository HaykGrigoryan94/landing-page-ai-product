"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
  onAction: () => void
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  popular = false,
  onAction,
}: PricingCardProps) {
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
      className={popular ? "lg:-mt-8" : ""}
    >
      <Card
        className={`h-full transition-all duration-300 hover:shadow-lg relative ${popular ? "border-primary shadow-lg" : ""}`}
      >
        {popular && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
            Most Popular
          </div>
        )}

        <CardHeader className="pt-6">
          <div className="text-center">
            <CardTitle className="text-xl">{name}</CardTitle>
            <div className="mt-4 flex items-baseline justify-center">
              <span className="text-4xl font-bold">{price}</span>
              <span className="ml-1 text-sm text-muted-foreground">{period}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-center text-sm text-muted-foreground mb-6">{description}</p>

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter>
          <Button
            className={`w-full ${popular ? "bg-primary hover:bg-primary/90" : ""}`}
            variant={popular ? "default" : "outline"}
            onClick={onAction}
          >
            {cta}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

