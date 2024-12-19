import { Button } from "@/components/ui/button"
import { Eye, Shield, Activity, Lock, Key } from "lucide-react"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <div className="relative isolate pt-14">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Mythological Power for Modern Development
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Harness the strength of ancient myths with cutting-edge developer tools. Monitor, secure, and optimize your applications with divine precision.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">Start Free Trial</Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {[
            {
              name: "Argus",
              description: "Continuous monitoring with the vigilance of a hundred eyes",
              icon: Eye,
              color: "text-blue-500"
            },
            {
              name: "Balor",
              description: "Threat detection with mythical perception",
              icon: Shield,
              color: "text-purple-500"
            },
            {
              name: "Briareus",
              description: "Multi-dimensional user experience analytics",
              icon: Activity,
              color: "text-green-500"
            },
            {
              name: "Fafnir",
              description: "Transformative data encryption security",
              icon: Lock,
              color: "text-red-500"
            },
            {
                name: "Atlas",
                description: "Web3-powered decentralized authentication",
                icon: Key,
                color: "text-yellow-500"
            }
          ].map((feature) => (
            <div
              key={feature.name}
              className="relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:scale-105"
            >
              <feature.icon className={cn("h-8 w-8 mb-4", feature.color)} />
              <h3 className="text-lg font-semibold">{feature.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}