"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const images = [
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "UN Assembly Hall",
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Delegates in discussion",
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Committee session",
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Opening ceremony",
  },
]

export function HeroGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full py-20 md:py-32 overflow-hidden">
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
            className="object-cover brightness-[0.4]"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">SATHYABAMA MUN 2025</h1>
          <p className="text-xl md:text-2xl font-medium text-white/90">Redefining Power & Reshaping Narratives</p>
          <p className="text-lg text-white/80">March 25–26, 2025</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <Link href="/registration">Register Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 hover:bg-background/20 text-white border-white/20"
              asChild
            >
              <Link href="/resources">Download Study Guides</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80",
            )}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

