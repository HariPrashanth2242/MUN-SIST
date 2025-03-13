"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Logo } from "@/components/logo"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Committees & Agendas", href: "/committees" },
  { name: "Registration", href: "/registration" },
  { name: "Event Schedule", href: "/schedule" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
]

export default function TransparentNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close sidebar after navigation
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isHomePage = pathname === "/"

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-200",
        isHomePage && !isScrolled ? "bg-transparent" : "bg-background/80 backdrop-blur-md border-b",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "mr-2",
                  isHomePage && !isScrolled && "bg-white/10 hover:bg-white/20 text-white border-white/20",
                )}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <Logo className="mb-8 mt-4" />
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4 w-full">
                  <Link href="/registration">Register Now</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative py-2 text-sm font-medium transition-colors",
                "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300",
                pathname === item.href ? "after:w-full text-primary" : "hover:after:w-full hover:text-primary",
                isHomePage && !isScrolled ? "text-white" : "text-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className={cn(isHomePage && !isScrolled && "bg-white text-primary hover:bg-white/90")}>
            <Link href="/registration">Register Now</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

