"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const faqs = [
  {
    question: "What makes Mythography different from other development tools?",
    answer: "Mythography combines powerful monitoring, security, analytics, and authentication tools into a single, integrated suite. Our mythologically-inspired tools work seamlessly together, providing a comprehensive solution that's both powerful and easy to use."
  },
  {
    question: "How does Atlas's Web3 authentication work?",
    answer: "Atlas uses blockchain technology and private keys for secure authentication. Users maintain control of their identity through decentralized verification, with optional biometric integration and zero-knowledge proofs for enhanced security."
  },
  {
    question: "Can I use individual tools or do I need the complete suite?",
    answer: "You can choose either individual tools or the complete suite. While each tool works perfectly standalone, the suite offers enhanced integration features and significant cost savings."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive documentation, email support, and live chat for all users. Suite subscribers receive priority support with dedicated account managers and custom training sessions."
  },
  {
    question: "Is Mythography suitable for both small and large teams?",
    answer: "Yes! Our tools scale with your needs. From individual developers to enterprise teams, our flexible pricing and feature sets accommodate projects of any size."
  },
  {
    question: "How secure is the data handled by Mythography tools?",
    answer: "Security is our top priority. We use enterprise-grade encryption, follow security best practices, and regularly undergo security audits. Fafnir, our security tool, provides additional layers of protection for sensitive data."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about Mythography's tools and services
          </p>
        </div>

        <div className="mt-16">
          <Card className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="p-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  )
}