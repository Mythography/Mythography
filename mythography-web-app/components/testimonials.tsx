import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Star, Building2, Code2 } from "lucide-react"

const metrics = [
    {
        icon: Users,
        value: "1,000+",
        label: "Developers Trust Us"
    },
    {
        icon: Building2,
        value: "200+",
        label: "Enterprise Clients"
    },
    {
        icon: Code2,
        value: "5M+",
        label: "Daily Requests"
    },
    {
        icon: Star,
        value: "4.9/5",
        label: "Customer Rating"
    }
]

const testimonials = [
    {
        content: "Mythography's suite has transformed how we monitor and secure our infrastructure. The integration between tools is seamless.",
        author: "Sarah Chen",
        role: "Lead DevOps Engineer",
        company: "TechFlow Solutions",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        content: "The analytics from Briareus gave us insights we never knew we needed. It's completely changed our approach to user experience.",
        author: "Marcus Rodriguez",
        role: "CTO",
        company: "DataStream",
        avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    {
        content: "Moving to Mythography's security suite saved us countless hours. Their tools are powerful yet intuitive.",
        author: "Emma Thompson",
        role: "Security Architect",
        company: "SecureScale",
        avatar: "https://i.pravatar.cc/150?u=emma"
    }
]

export function Testimonials() {
    return (
        <section className="py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Testimonials */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Trusted by Developers Worldwide
                        </h2>
                        <p className="text-muted-foreground">
                            Join the community of developers who've elevated their workflow with Mythography
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {testimonials.map((testimonial) => (
                            <Card key={testimonial.author} className="p-6">
                                <div className="flex flex-col h-full">
                                    <div className="flex-1">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                            ))}
                                        </div>
                                        <blockquote className="text-muted-foreground">
                                            "{testimonial.content}"
                                        </blockquote>
                                    </div>
                                    <div className="flex items-center gap-4 mt-6 pt-6 border-t">
                                        <Avatar>
                                            <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                                            <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-semibold">{testimonial.author}</div>
                                            <div className="text-sm text-muted-foreground">
                                                {testimonial.role} at {testimonial.company}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mt-20">
                    {metrics.map((metric) => (
                        <Card key={metric.label} className="p-6 border-none bg-muted/50">
                            <div className="flex flex-col items-center text-center">
                                <metric.icon className="h-8 w-8 mb-4 text-primary" />
                                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                                <div className="text-sm text-muted-foreground">{metric.label}</div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}