"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Key, UserCheck, Shield, Fingerprint, Lock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {Back} from "@/components/back";
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";

const features = [
    {
        title: "Web3 Authentication",
        description: "Secure authentication using blockchain and private keys for foolproof identity verification.",
        icon: Key,
    },
    {
        title: "Identity Management",
        description: "Decentralized identity management with complete user control over personal data.",
        icon: UserCheck,
    },
    {
        title: "Zero-Knowledge Proofs",
        description: "Verify identity without exposing sensitive information using ZK-proofs.",
        icon: Shield,
    },
    {
        title: "Biometric Integration",
        description: "Optional biometric authentication for enhanced security.",
        icon: Fingerprint,
    },
]

const codeExamples = {
    installation: `npm install @mythography/atlas`,
    basic: `import { AtlasAuth } from '@mythography/atlas';

// Initialize Atlas with your configuration
const auth = new AtlasAuth({
  apiKey: 'your_api_key',
  network: 'ethereum',
  chainId: 1
});

// Authenticate user
const session = await auth.authenticate({
  challenge: 'sign_in',
  message: 'Sign in to MyApp'
});

// Verify identity
const verified = await auth.verifyIdentity(session);`,
    advanced: `// Custom authentication flow
const customAuth = auth.createFlow({
  steps: ['wallet_connect', 'sign_message', 'verify_proof'],
  options: {
    requiredClaims: ['email', 'name'],
    zkProofs: true,
    biometricFallback: true
  }
});

// Handle authentication result
auth.onAuthComplete((result) => {
  if (result.verified) {
    const { address, claims, proofs } = result;
    // Handle successful authentication
  }
});

// Integrate with existing systems
auth.connectProvider({
  type: 'oauth',
  provider: 'google',
  scope: ['email', 'profile']
});`
}

export default function AtlasProduct() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden border-b">
                    <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px] dark:bg-grid-slate-400/[0.05]" />
                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        <Back />
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 mt-16">
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                                    Atlas
                                </h1>
                                <p className="mt-4 text-xl text-muted-foreground">
                                    Web3-powered authentication that puts identity control back in users' hands. Secure, decentralized, and privacy-focused.
                                </p>
                                <div className="mt-8 flex gap-4">
                                    <Button size="lg">Start Free Trial</Button>
                                    <Button variant="outline" size="lg">View Demo</Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-video overflow-hidden rounded-lg border bg-muted/50 shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1000"
                                        alt="Atlas Authentication Dashboard"
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
                            Authentication Integration
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
                                Get started with Atlas individually or as part of the Mythography suite
                            </p>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-2">
                            {/* Individual Plan */}
                            <Card className="p-8">
                                <h3 className="text-2xl font-bold">Atlas Individual</h3>
                                <div className="mt-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold">$79</span>
                                        <span className="text-muted-foreground">/month</span>
                                    </div>
                                </div>
                                <ul className="mt-8 space-y-3">
                                    {[
                                        "Web3 authentication",
                                        "Identity verification",
                                        "Zero-knowledge proofs",
                                        "Biometric integration",
                                        "OAuth compatibility",
                                        "Developer API access"
                                    ].map((feature) => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-primary" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="mt-8 w-full">Get Started with Atlas</Button>
                            </Card>

                            {/* Bundle Plan */}
                            <Card className="p-8 border-2 border-primary">
                                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                                    Best Value
                                </div>
                                <h3 className="text-2xl font-bold">Mythography Suite</h3>
                                <div className="mt-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold">$199</span>
                                        <span className="text-muted-foreground">/month</span>
                                        <span className="text-sm text-muted-foreground line-through">$305/month</span>
                                    </div>
                                    <p className="mt-2 text-sm text-primary">Save $106/month with the bundle!</p>
                                </div>
                                <ul className="mt-8 space-y-3">
                                    {[
                                        "Everything in Atlas Individual",
                                        "Full access to Argus, Balor, Briareus, and Fafnir",
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