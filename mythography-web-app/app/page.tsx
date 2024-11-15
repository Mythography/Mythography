import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { Features } from "@/components/features"
import { Integration } from "@/components/integration"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import {Pricing} from "@/components/pricing";
import {Testimonials} from "@/components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <Integration />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}