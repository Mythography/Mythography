import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const integrations = [
  "AWS", "Azure", "Google Cloud", "GitHub", "GitLab", "Bitbucket",
  "Jira", "Slack", "Discord", "Jenkins", "CircleCI", "Docker"
]

export function Integration() {
  return (
    <section id="integration" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Seamless Integration
          </h2>
          <p className="text-muted-foreground">
            Connect with your favorite tools and platforms effortlessly
          </p>
        </div>

        <div className="mt-16">
          <Card className="p-8 bg-muted/50">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
              {integrations.map((integration) => (
                <div
                  key={integration}
                  className="flex items-center justify-center p-4 bg-background rounded-lg"
                >
                  <span className="text-lg font-medium">{integration}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button size="lg">View All Integrations</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}