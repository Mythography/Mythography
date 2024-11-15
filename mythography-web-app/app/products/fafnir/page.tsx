"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Lock, Key, Shield, FileKey, Database } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {Back} from "@/components/back";
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";

const features = [
    {
        title: "End-to-End Encryption",
        description: "Military-grade encryption for all your data, both in transit and at rest.",
        icon: Lock,
    },
    {
        title: "Key Management",
        description: "Secure key management system with automatic rotation and backup.",
        icon: Key,
    },
    {
        title: "Access Control",
        description: "Fine-grained access control with role-based permissions and audit logging.",
        icon: Shield,
    },
    {
        title: "Secure Storage",
        description: "Encrypted data storage with automatic backup and recovery options.",
        icon: Database,
    },
]

const codeExamples = {
    installation: `npm install @mythography/fafnir`,
    basic: `import { FafnirEncryption } from '@mythography/fafnir';

// Initialize Fafnir with your encryption settings
const encryption = new FafnirEncryption({
  apiKey: 'your_api_key',
  project: 'my-secure-project',
  algorithm: 'AES-256-GCM'
});

// Encrypt sensitive data
const encrypted = await encryption.encrypt({
  data: sensitiveData,
  context: 'user-data'
});

// Decrypt when needed
const decrypted = await encryption.decrypt({
  data: encrypted,
  context: 'user-data'
});`,
    advanced: `// Custom encryption policies
encryption.setPolicy({
  name: 'high-security',
  rules: {
    keyRotation: '7d',
    minimumKeyLength: 256,
    allowedAlgorithms: ['AES-256-GCM', 'ChaCha20-Poly1305'],
    backupEnabled: true
  }
});

// Secure data storage
const vault = encryption.createVault({
  name: 'sensitive-data',
  policy: 'high-security',
  autoBackup: true
});

// Store encrypted data with metadata
await vault.store('user_123', {
  data: sensitiveUserData,
  metadata: {
    type: 'personal_info',
    lastModified: Date.now()
  }
});

// Access control
encryption.grantAccess({
  resource: 'user_123',
  role: 'admin',
  permissions: ['read', 'write'],
  expiresIn: '24h'
});`
}

export default function FafnirProduct() {
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
                                Fafnir
                            </h1>
                            <p className="mt-4 text-xl text-muted-foreground">
                                Transform your data security with dragon-strength encryption. Protect your sensitive information with unbreakable security.
                            </p>
                            <div className="mt-8 flex gap-4">
                                <Button size="lg">Start Free Trial</Button>
                                <Button variant="outline" size="lg">View Demo</Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video overflow-hidden rounded-lg border bg-muted/50 shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000"
                                    alt="Fafnir Security Dashboard"
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
                        Encryption Integration
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
                            Get started with Fafnir individually or as part of the Mythography suite
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Individual Plan */}
                        <Card className="p-8">
                            <h3 className="text-2xl font-bold">Fafnir Individual</h3>
                            <div className="mt-4">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold">$69</span>
                                    <span className="text-muted-foreground">/month</span>
                                </div>
                            </div>
                            <ul className="mt-8 space-y-3">
                                {[
                                    "End-to-end encryption",
                                    "Access control management",
                                    "Secure data storage",
                                    "Compliance tools",
                                    "Audit logging",
                                    "Key management"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-primary" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="mt-8 w-full">Get Started with Fafnir</Button>
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
                                    "Everything in Fafnir Individual",
                                    "Full access to Argus, Balor, and Briareus",
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
            <Footer></Footer>
        </div>
    )
}