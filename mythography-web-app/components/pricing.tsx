"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const individualPlans = [
    {
        name: "Argus",
        price: 49,
        description: "Continuous monitoring with the vigilance of a hundred eyes",
        features: [
            "Real-time system monitoring",
            "Custom alert configurations",
            "Metrics dashboard",
            "Up to 100 endpoints",
            "24/7 system surveillance",
            "30-day data retention"
        ]
    },
    {
        name: "Balor",
        price: 59,
        description: "Threat detection with mythical perception",
        features: [
            "Advanced threat detection",
            "Vulnerability scanning",
            "Security incident alerts",
            "Risk assessment reports",
            "Compliance monitoring",
            "Security dashboard"
        ]
    },
    {
        name: "Briareus",
        price: 49,
        description: "Multi-dimensional user experience analytics",
        features: [
            "User journey mapping",
            "Behavior analytics",
            "Performance tracking",
            "Custom event tracking",
            "Conversion analytics",
            "A/B testing capabilities"
        ]
    },
    {
        name: "Fafnir",
        price: 69,
        description: "Transformative data encryption security",
        features: [
            "End-to-end encryption",
            "Access control management",
            "Secure data storage",
            "Compliance tools",
            "Audit logging",
            "Key management"
        ]
    },
    {
        name: "Atlas",
        price: 79,
        description: "Web3-powered decentralized authentication",
        features: [
            "Web3 authentication",
            "Identity verification",
            "Zero-knowledge proofs",
            "Biometric integration",
            "OAuth compatibility",
            "Developer API access"
        ]
    }
]

export function Pricing() {
    const totalIndividualPrice = individualPlans.reduce((acc, plan) => acc + plan.price, 0)
    const bundlePrice = 199
    const savings = totalIndividualPrice - bundlePrice

    return (
        <section id="pricing" className="py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Choose Your Divine Power
                    </h2>
                    <p className="text-muted-foreground">
                        Select individual tools or harness the complete power of the Mythography suite
                    </p>
                </div>

                {/* Bundle Pricing - Hero Card */}
                <div className="mt-16">
                    <Card className="relative overflow-hidden border-2 border-primary p-8 bg-gradient-to-br from-background to-muted">
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            Most Popular
                        </div>
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div>
                                <h3 className="text-2xl font-bold">Mythography Complete Suite</h3>
                                <p className="mt-2 text-muted-foreground">
                                    Unlock the full power of all five mythological tools
                                </p>
                                <div className="mt-6">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold">${bundlePrice}</span>
                                        <span className="text-muted-foreground">/month</span>
                                        <span className="text-sm text-muted-foreground line-through">
                      ${totalIndividualPrice}/month
                    </span>
                                    </div>
                                    <p className="mt-2 text-sm text-primary font-medium">
                                        Save ${savings}/month with the bundle!
                                    </p>
                                </div>
                                <Button className="mt-6 w-full lg:w-auto" size="lg">
                                    Get the Bundle
                                </Button>
                            </div>
                            <div className="grid gap-3 text-sm">
                                <p className="font-medium">Everything in all tools, plus:</p>
                                {[
                                    "Priority support with dedicated account manager",
                                    "Advanced integration capabilities",
                                    "Cross-tool analytics and reporting",
                                    "Extended data retention",
                                    "Custom deployment options",
                                    "Early access to new features",
                                    "Unlimited API calls",
                                    "Custom training sessions"
                                ].map((feature) => (
                                    <div key={feature} className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-primary" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Individual Plans */}
                <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    {individualPlans.map((plan) => (
                        <Card key={plan.name} className="p-6">
                            <h3 className="text-xl font-bold">{plan.name}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                            <div className="mt-4">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-bold">${plan.price}</span>
                                    <span className="text-muted-foreground">/month</span>
                                </div>
                            </div>
                            <div className="mt-6 space-y-3 text-sm">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-muted-foreground" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" className="mt-6 w-full">
                                Choose {plan.name}
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}