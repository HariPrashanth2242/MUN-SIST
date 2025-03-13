"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { Logo } from "@/components/logo"

const committees = [
  { name: "UNGA", href: "/committees?value=unga", description: "United Nations General Assembly" },
  { name: "UNHRC", href: "/committees?value=unhrc", description: "UN Human Rights Council" },
  { name: "UNCSW", href: "/committees?value=uncsw", description: "Commission on Status of Women" },
  { name: "Crisis Committee", href: "/committees?value=crisis", description: "A New Matriarchal World Order" },
  { name: "IPC", href: "/committees?value=ipc", description: "International Press Corps" },
];

const resources = [
  { name: "Study Guides", href: "/resources?value=study-guides", description: "Comprehensive background guides" },
  {
    name: "Rules of Procedure",
    href: "/resources?value=rules",
    description: "Official guidelines for committee proceedings",
  },
  { name: "Position Papers", href: "/resources?value=position-papers", description: "Guidelines and samples" },
  {
    name: "Beginner's Guide",
    href: "/resources?value=beginners",
    description: "Essential resources for first-time delegates",
  },
]

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Committees & Agendas",
    href: "/committees",
    hasDropdown: true,
    dropdownItems: committees,
  },
  { name: "Registration", href: "/registration" },
  { name: "Event Schedule", href: "/schedule" },
  {
    name: "Resources",
    href: "/resources",
    hasDropdown: true,
    dropdownItems: resources,
  },
  { name: "Contact", href: "/contact" },
]



export default function Navbar() {

  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isHomePage = pathname === "/"

  // No special transparency for hero section
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

  const isActiveRoute = (href: string) => {
    if (href === "/") return pathname === href
    // For exact matches or hash links to the same page
    if (href.includes("#")) {
      const basePath = href.split("#")[0]
      return pathname === basePath || pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300 bg-background/90 backdrop-blur-md border-b shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="mr-2 bg-background border-input hover:bg-accent">
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
                      isActiveRoute(item.href) ? "text-primary font-bold" : "text-muted-foreground",
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
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "relative py-2 text-sm font-medium transition-colors flex items-center",
                  "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300",
                  isActiveRoute(item.href)
                    ? "after:w-full text-primary font-bold"
                    : "hover:after:w-full hover:text-primary",
                )}
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown
                    className={cn(
                      "ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180",
                      isActiveRoute(item.href) ? "text-primary" : "",
                    )}
                  />
                )}
              </Link>

              {item.hasDropdown && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-background border rounded-lg shadow-lg p-4 min-w-[240px] transform origin-top scale-95 group-hover:scale-100 transition-transform duration-300">
                    <div className="space-y-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className={cn(
                            "block p-2 rounded-md hover:bg-muted transition-colors",
                            pathname.includes(dropdownItem.href) ? "text-primary font-bold" : "",
                          )}
                        >
                          <div className="font-medium">{dropdownItem.name}</div>
                          <div className="text-xs text-muted-foreground">{dropdownItem.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <Link href="/registration">Register Now</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

