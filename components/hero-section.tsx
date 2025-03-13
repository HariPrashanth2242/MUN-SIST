"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const images = [
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "UN General Assembly Hall",
    title: "Redefining Power",
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Delegates in discussion",
    title: "Reshaping Narratives",
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Committee session",
    title: "Building Tomorrow",
  },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
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
        </div>
      ))}

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Model United Nations
              <div className="h-1 w-24 bg-primary mx-auto mt-4" />
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8">
              <span className="text-primary font-semibold">Sathyabama</span> Institute of Science and Technology
            </p>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-4xl font-medium text-white">{images[currentIndex].title}</h2>

              <p className="text-lg md:text-xl text-white/80">March 25–26, 2025</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/registration">Register Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/20"
                asChild
              >
                <Link href="/resources">Download Study Guides</Link>
              </Button>
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
    </section>
  )
}

