"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

// Company logos
const clients = [
  {
    id: 1,
    name: "SEI",
    image: "/sei_logo.png",
    company: "Content Strategy",
  },
  {
    id: 2,
    name: "Innovo",
    image: "/innovo_logo.png",
    company: "Website Design",
  },
  {
    id: 3,
    name: "Pathlit",
    image: "/pathlit_logo.png",
    company: "Social Media Growth",
  },
  {
    id: 4,
    name: "Casper Capital",
    image: "/casper_logo.png",
    company: "Finance Creator",
  },
]

export function CompanyCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  // Duplicate the clients array to create a seamless loop
  const allClients = [...clients, ...clients]

  useEffect(() => {
    const scrollSpeed = -0.5 // negative pixels per frame (moving right)
    let animationFrameId: number
    let lastTimestamp: number

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const elapsed = timestamp - lastTimestamp

      setScrollPosition((prevPosition) => {
        // Calculate new position (moving right)
        let newPosition = prevPosition + scrollSpeed * (elapsed / 16)

        // Reset position when we've scrolled the width of the original set in reverse
        if (innerRef.current && newPosition <= -(innerRef.current.scrollWidth / 2)) {
          newPosition = 0
        }

        return newPosition
      })

      lastTimestamp = timestamp
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-12 md:py-16 overflow-hidden bg-black/50 relative">
      {/* Top gradient for smoother transition from hero */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/50 to-black/40 pointer-events-none"></div>

      {/* Bottom gradient for transition to stats section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-black/40 to-black/50 pointer-events-none"></div>

      <div className="container px-4 md:px-6">
        <div className="relative" ref={containerRef}>
          {/* Gradient fade on left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/50 to-transparent z-10"></div>

          {/* Gradient fade on right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/50 to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="overflow-hidden">
                          <div
                ref={innerRef}
                className="flex space-x-8 py-6"
                style={{
                  transform: `translateX(${scrollPosition}px)`,
                  width: "max-content",
                }}
              >
                              {allClients.map((client, index) => (
                  <div key={`${client.id}-${index}`} className="flex-shrink-0 w-40 transition-all duration-300">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 md:w-28 md:h-28 relative opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                        <Image 
                          src={client.image || "/placeholder.svg"} 
                          alt={client.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
