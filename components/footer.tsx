"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Footer() {
  const [year, setYear] = useState<number | null>(null)
  const { toast } = useToast()
  const [email, setEmail] = useState("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter. Please check your email.",
        })
        setEmail("")
      } else {
        toast({
          variant: "destructive",
          title: "Subscription failed",
          description: data.error || "Please try again later.",
        })
      }
    } catch (error) {
      console.error("Subscription error:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      })
    }
  }

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-background py-12 px-6 sm:px-8 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo and Description */}
          <div className="flex flex-col lg:items-start">
            <Logo className="mb-6" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sathyabama Institute of Science and Technology's inaugural Model United Nations conference. Join us for
              two days of diplomatic simulations, debates, and networking with fellow delegates as we work together to
              address global challenges and shape a better future.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row justify-between lg:justify-center gap-8 lg:gap-28 lg:col-span-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-sm">
                {[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Committees", path: "/committees" }].map(
                  ({ name, path }) => (
                    <li key={name}>
                      <Link href={path} className="text-muted-foreground hover:text-primary transition-colors duration-200">
                        {name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                {[{ name: "Study Guides", path: "/resources" }, { name: "Schedule", path: "/schedule" }, { name: "FAQs", path: "/#faq" }].map(
                  ({ name, path }) => (
                    <li key={name}>
                      <Link href={path} className="text-muted-foreground hover:text-primary transition-colors duration-200">
                        {name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Newsletter & Social Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
              <form onSubmit={handleSubscribe} className="mb-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="placeholder:text-muted-foreground" // Lighter placeholder color
                  />
                  <Button type="submit">Subscribe</Button>
                </div>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-4">
                {[{ Icon: Instagram, href: "", label: "Instagram" }, { Icon: Youtube, href: "", label: "YouTube" }, { Icon: Linkedin, href: "", label: "LinkedIn" }, { Icon: Mail, href: "mailto:munianish076@gmail.com", label: "Email" }].map(
                  ({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${label}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      <Icon onClick={(e) => e.preventDefault()} className="w-6 h-6" />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {year || "2025"} Sathyabama MUN. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {[{ name: "Privacy Policy", path: "/privacy" }, { name: "Terms of Use", path: "/terms" }, { name: "FAQs", path: "/app/page.tsx" }].map(
              ({ name, path }, index, arr) => (
                <React.Fragment key={name}>
                  <Link href={path}   className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    {name}
                  </Link>
                  {index < arr.length - 1 && <span className="h-4 w-px bg-border"></span>}
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
