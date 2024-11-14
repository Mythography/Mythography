import { Card, CardContent } from "@/components/ui/card"
import { 
  Zap, 
  Shield, 
  RefreshCw, 
  Terminal, 
  LineChart, 
  Settings
} from "lucide-react"

const features = [
  {
    name: "Lightning Fast",
    description: "Optimized performance that keeps pace with your development needs",
    icon: Zap,
  },
  {
    name: "Enterprise Security",
    description: "Bank-grade encryption and security measures to protect your data",
    icon: Shield,
  },
  {
    name: "Real-time Updates",
    description: "Instant synchronization across all your development environments",
    icon: RefreshCw,
  },
  {
    name: "CLI Integration",
    description: "Powerful command-line tools for seamless workflow integration",
    icon: Terminal,
  },
  {
    name: "Advanced Analytics",
    description: "Comprehensive insights into your application's performance",
    icon: LineChart,
  },
  {
    name: "Customizable",
    description: "Flexible configuration options to match your specific needs",
    icon: Settings,
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Divine Features
          </h2>
          <p className="text-muted-foreground">
            Harness the power of mythology with modern development features
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.name} className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <feature.icon className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}