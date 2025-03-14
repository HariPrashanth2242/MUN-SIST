"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/gallery1.jpg?height=600&width=800",
    alt: "Previous MUN Conference",
    caption: "Delegates in session during last year's conference",
  },
  {
    src: "/gallery2.jpg?height=600&width=800",
    alt: "Committee Discussion",
    caption: "Engaging in diplomatic negotiations",
  },
  {
    src: "/gallery3.jpg?height=600&width=800",
    alt: "Award Ceremony",
    caption: "Recognizing outstanding delegates",
  },
  {
    src: "/gallery4.jpg?height=600&width=800",
    alt: "Opening Ceremony",
    caption: "The grand opening of our previous conference",
  },
  {
    src: "/gallery5.jpg?height=600&width=800",
    alt: "Networking Session",
    caption: "Building connections between sessions",
  },
  {
    src: "/gallery6.jpg?height=600&width=800",
    alt: "Panel Discussion",
    caption: "Expert panel sharing insights",
  },
]

export function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Gallery
          <div className="h-1 w-16 bg-primary mx-auto mt-4" />
        </h2>

        <div className="relative">
          {/* Main Image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={galleryImages[currentIndex].src || "/placeholder.svg"}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-cover transition-transform duration-500"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white text-center">{galleryImages[currentIndex].caption}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-8">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "relative aspect-square rounded-lg overflow-hidden",
                "ring-2 ring-offset-2 transition-all",
                index === currentIndex ? "ring-primary" : "ring-transparent hover:ring-primary/50",
              )}
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </button>
          ))}
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "transition-all duration-300 rounded-full",
                index === currentIndex
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

