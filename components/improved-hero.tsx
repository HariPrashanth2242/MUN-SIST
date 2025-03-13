"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const images = [
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "UN Assembly Hall",
    title: "Redefining Power",
    subtitle: "Shape global policies and diplomatic relations",
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Delegates in discussion",
    title: "Reshaping Narratives",
    subtitle: "Challenge existing paradigms with innovative solutions",
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Committee session",
    title: "Building Tomorrow",
    subtitle: "Collaborate with future leaders and changemakers",
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Opening ceremony",
    title: "Creating Impact",
    subtitle: "Make your voice heard on the international stage",
  },
]

export function ImprovedHero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full min-h-[90vh] flex items-center overflow-hidden hero-section">
      {/* Background Images with Overlay */}
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 z-0 transition-opacity duration-1000",
            index === currentIndex ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover brightness-[0.3]"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6"
          >
            <div className="inline-block bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <p className="text-white/90 font-medium text-sm">March 25–26, 2025 • Sathyabama Institute</p>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="text-primary">SATHYABAMA</span> <br />
              <span className="relative">
                MUN 2025
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: "40%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-2"
            >
              <h2 className="text-2xl md:text-3xl font-medium text-white">{images[currentIndex].title}</h2>
              <p className="text-lg text-white/80">{images[currentIndex].subtitle}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" className="text-lg px-8 group" asChild>
                <Link href="/registration">
                  Register Now
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/20"
                asChild
              >
                <Link href="/resources">Download Study Guides</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Sathyabama MUN 2025"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="space-y-2">
                  <p className="text-white/90 font-medium">Diplomatic Simulation & Global Dialogue</p>
                  <div className="flex items-center space-x-2">
                    <div className="h-1 w-12 bg-primary rounded-full"></div>
                    <p className="text-white/80 text-sm">March 25-26, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "transition-all duration-300 rounded-full",
              index === currentIndex ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-white/50 hover:bg-white/80",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

