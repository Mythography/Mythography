"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, LinkedinIcon } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            Get in touch with our team of mythological experts
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            { /* TODO: Hook up form to email to mythography */ }
          <Card className="p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <Input placeholder="Name" />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Email" />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Message"
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className="mt-1 text-muted-foreground">
                    Our friendly team is here to help
                  </p>
                  <a href="mailto:mythographydevelopment@gmail.com" className="mt-2 inline-block text-primary hover:underline">
                    mythographydevelopment@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start">
                <LinkedinIcon className="h-6 w-6 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">LinkedIn</h3>
                  <p className="mt-1 text-muted-foreground">
                    Get Mythography updates in your feed
                  </p>
                    <a href="https://www.linkedin.com/company/mythography" target="_blank" rel="noopener noreferrer">
                      <Button variant="link" className="mt-2 p-0">
                        Follow us
                      </Button>
                    </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}