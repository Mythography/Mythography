"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Shield, Activity, Lock, Key } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link";

const products = [
  {
    name: "Argus",
    description: "Keep a vigilant eye on your systems with our advanced monitoring solution. Like its mythological namesake, Argus watches your applications with unwavering attention.",
    icon: Eye,
    color: "text-blue-500",
    features: ["Real-time monitoring", "Custom alert systems", "Performance metrics", "System health checks"],
  },
  {
    name: "Balor",
    description: "Detect threats before they become problems with Balor's mythical perception. Named after the legendary fomorian king, our threat detection system sees what others miss.",
    icon: Shield,
    color: "text-purple-500",
    features: ["Threat detection", "Vulnerability scanning", "Security alerts", "Risk assessment"]
  },
  {
    name: "Briareus",
    description: "Analyze user experience from every angle with Briareus. Like the hundred-armed giant of myth, our analytics tool captures every interaction and insight.",
    icon: Activity,
    color: "text-green-500",
    features: ["User journey mapping", "Interaction analytics", "Performance tracking", "Behavior analysis"]
  },
  {
    name: "Fafnir",
    description: "Transform your data security with Fafnir's protective power. Named after the mythical dragon, our encryption tool guards your data with legendary strength.",
    icon: Lock,
    color: "text-red-500",
    features: ["Data encryption", "Access control", "Secure storage", "Compliance management"]
  },
  {
    name: "Atlas",
    description: "Secure authentication powered by Web3 technology. Like the titan who held up the sky, Atlas shoulders the responsibility of protecting user identities.",
    icon: Key,
    color: "text-yellow-500",
    features: ["Web3 authentication", "Identity verification", "Zero-knowledge proofs", "Biometric integration"]
  }
]

export function Products() {
  const [activeProduct, setActiveProduct] = useState(products[0])

  return (
    <section id="products" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Mythological Tools Suite
          </h2>
          <p className="text-muted-foreground">
            Choose your divine instruments of development. Each tool embodies the power of myth to solve modern challenges.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-1 p-6">
            <div className="space-y-4">
              {products.map((product) => (
                <Button
                  key={product.name}
                  variant={activeProduct.name === product.name ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveProduct(product)}
                >
                  <product.icon className={cn("h-5 w-5 mr-2", product.color)} />
                  {product.name}
                </Button>
              ))}
            </div>
          </Card>

          <Card className="lg:col-span-2 p-6">
            <div className="flex items-start">
              <activeProduct.icon className={cn("h-8 w-8 mr-4", activeProduct.color)} />
              <div>
                <h3 className="text-2xl font-bold">{activeProduct.name}</h3>
                <p className="mt-2 text-muted-foreground">{activeProduct.description}</p>
                <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {activeProduct.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className={cn("h-2 w-2 rounded-full mr-2", activeProduct.color.replace('text-', 'bg-'))} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link  href={`/products/${activeProduct.name.toLowerCase()}`}>
                  <Button className="mt-8">Learn More</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}