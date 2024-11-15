import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col space-y-8 md:w-1/2">
          <div>
            <h2 className="text-xl font-bold">Mythography</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Empowering developers with mythological strength
            </p>
          </div>


            { /* TODO: Hook up email subscription */ }
          <div>
            <h3 className="text-sm font-semibold mb-4">Stay Updated</h3>
            <div className="flex gap-x-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-xs"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold">Products</h3>
              <ul className="mt-4 space-y-2">
                {["Argus", "Balor", "Briareus", "Fafnir"].map((product) => (
                  <li key={product}>
                    <Link
                      href={`/products/${product.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {product}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                {["About", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                {["Privacy", "Terms", "License"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-4 border-t">
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Mythography. All rights reserved.
        </p>
      </div>
    </footer>
  )
}