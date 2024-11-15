"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Shield, AlertTriangle, Lock, FileWarning, Terminal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {Back} from "@/components/back";
import {Navbar} from "@/components/navbar"
import {Footer} from "@/components/footer"

const features = [
    {
        title: "Threat Detection",
        description: "Advanced algorithms to identify and alert on potential security threats in real-time.",
        icon: Shield,
    },
    {
        title: "Vulnerability Scanning",
        description: "Continuous scanning of your infrastructure for known vulnerabilities and security gaps.",
        icon: AlertTriangle,
    },
    {
        title: "Access Control",
        description: "Granular access control and authentication management for your applications.",
        icon: Lock,
    },
    {
        title: "Security Reports",
        description: "Detailed security reports and compliance documentation generation.",
        icon: FileWarning,
    },
]

const codeExamples = {
    installation: `npm install @mythography/balor`,
    basic: `import { BalorSecurity } from '@mythography/balor';

// Initialize Balor with your security configuration
const security = new BalorSecurity({
  apiKey: 'your_api_key',
  project: 'my-secure-project',
  scanInterval: '1h'
});

// Start security monitoring
security.initialize();

// Configure threat detection
security.configureThreatDetection({
  sensitivity: 'high',
  autoBlock: true,
  notifyOnThreat: true
});`,
    advanced: `// Custom security rules
security.addRule({
  name: 'suspicious-auth',
  condition: {
    event: 'authentication',
    attempts: {
      count: 5,
      timeWindow: '5m'
    },
    action: 'block_ip'
  }
});

// Vulnerability scanning
security.startVulnerabilityScan({
  scope: ['dependencies', 'configurations', 'network'],
  schedule: '0 0 * * *', // Daily at midnight
  reportFormat: 'pdf',
  recipients: ['security@example.com']
});`
}

export default function BalorProduct() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar></Navbar>
            <main>
                {/* Hero Section */}
                <section className="relative py-32 overflow-hidden border-b">
                    <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px] dark:bg-grid-slate-400/[0.05]" />
                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        <Back />
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 mt-16">
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                                    Balor
                                </h1>
                                <p className="mt-4 text-xl text-muted-foreground">
                                    Advanced threat detection with mythical perception. Protect your applications with unmatched security insights.
                                </p>
                                <div className="mt-8 flex gap-4">
                                    <Button size="lg">Start Free Trial</Button>
                                    <Button variant="outline" size="lg">View Demo</Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-video overflow-hidden rounded-lg border bg-muted/50 shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1000"
                                        alt="Balor Security Dashboard"
                                        width={1000}
                                        height={562}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid gap-8 md:grid-cols-2">
                            {features.map((feature) => (
                                <Card key={feature.title} className="p-6">
                                    <div className="flex items-start gap-4">
                                        <feature.icon className="h-6 w-6 text-primary" />
                                        <div>
                                            <h3 className="font-semibold">{feature.title}</h3>
                                            <p className="mt-2 text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Code Examples */}
                <section className="py-24 bg-muted/50">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-3xl font-bold tracking-tight mb-12">
                            Security Integration
                        </h2>
                        <Tabs defaultValue="installation" className="w-full">
                            <TabsList>
                                <TabsTrigger value="installation">Installation</TabsTrigger>
                                <TabsTrigger value="basic">Basic Usage</TabsTrigger>
                                <TabsTrigger value="advanced">Advanced Features</TabsTrigger>
                            </TabsList>
                            {Object.entries(codeExamples).map(([key, code]) => (
                                <TabsContent key={key} value={key}>
                                    <Card>
                  <pre className="p-6 overflow-x-auto">
                    <code className="text-sm">{code}</code>
                  </pre>
                                    </Card>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight">
                                Choose Your Plan
                            </h2>
                            <p className="mt-4 text-muted-foreground">
                                Get started with Balor individually or as part of the Mythography suite
                            </p>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-2">
                            {/* Individual Plan */}
                            <Card className="p-8">
                                <h3 className="text-2xl font-bold">Balor Individual</h3>
                                <div className="mt-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold">$59</span>
                                        <span className="text-muted-foreground">/month</span>
                                    </div>
                                </div>
                                <ul className="mt-8 space-y-3">
                                    {[
                                        "Advanced threat detection",
                                        "Vulnerability scanning",
                                        "Security incident alerts",
                                        "Risk assessment reports",
                                        "Compliance monitoring",
                                        "Security dashboard"
                                    ].map((feature) => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-primary" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="mt-8 w-full">Get Started with Balor</Button>
                            </Card>

                            {/* Bundle Plan */}
                            <Card className="p-8 border-2 border-primary">
                                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                                    Best Value
                                </div>
                                <h3 className="text-2xl font-bold">Mythography Suite</h3>
                                <div className="mt-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold">$149</span>
                                        <span className="text-muted-foreground">/month</span>
                                        <span className="text-sm text-muted-foreground line-through">$226/month</span>
                                    </div>
                                    <p className="mt-2 text-sm text-primary">Save $77/month with the bundle!</p>
                                </div>
                                <ul className="mt-8 space-y-3">
                                    {[
                                        "Everything in Balor Individual",
                                        "Full access to Argus, Briareus, and Fafnir",
                                        "Priority support",
                                        "Advanced integrations",
                                        "Cross-tool analytics",
                                        "Extended data retention",
                                        "Custom deployment options",
                                        "Early access to new features"
                                    ].map((feature) => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-primary" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="mt-8 w-full">Get the Complete Suite</Button>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}