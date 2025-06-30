"use client"

import { useEffect, useRef, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Individual clients data
const individuals = [
  {
    id: 1,
    name: "Jesse Itzler",
    image: "/professional-headshot.png",
    title: "Entrepreneur & Author",
    followers: "122K"
  },
  {
    id: 2,
    name: "Daniel Pink",
    image: "/professional-man-headshot.png",
    title: "Bestselling Author",
    followers: "371K"
  },
  {
    id: 3,
    name: "Advay Gupta",
    image: "/asian-man-professional-headshot.png",
    title: "Founder of Pathlit",
    followers: "1.0K"
  },
  {
    id: 4,
    name: "Casper Capital",
    image: "/professional-woman-headshot.png",
    title: "Finance Creator",
    followers: "8M+"
  },
  {
    id: 5,
    name: "Jay Yang",
    image: "/professional-headshot.png",
    title: "Content Creator",
    followers: "50K"
  },
  {
    id: 6,
    name: "Luke Clancy",
    image: "/professional-man-headshot.png",
    title: "Origami Agents",
    followers: "25K"
  },
  {
    id: 7,
    name: "Chik Egbuna",
    image: "/asian-man-professional-headshot.png",
    title: "Personal Trainer",
    followers: "15K"
  },
  {
    id: 8,
    name: "Danny Koch",
    image: "/professional-woman-headshot.png",
    title: "Innovo Markets",
    followers: "30K"
  }
]

export function IndividualCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  // Duplicate the individuals array to create a seamless loop
  const allIndividuals = [...individuals, ...individuals]

  useEffect(() => {
    const scrollSpeed = 0.6 // pixels per frame (slightly faster)
    let animationFrameId: number
    let lastTimestamp: number

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const elapsed = timestamp - lastTimestamp

      setScrollPosition((prevPosition) => {
        // Calculate new position (moving left to right)
        let newPosition = prevPosition + scrollSpeed * (elapsed / 16)

        // Reset position when we've scrolled the width of the original set
        if (innerRef.current && newPosition >= innerRef.current.scrollWidth / 2) {
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
    <section className="py-8 md:py-12 overflow-hidden bg-black/30 relative">
      <div className="container px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-fraunces text-white mb-8 text-center">Individual Clients</h3>
        
        <div className="relative" ref={containerRef}>
          {/* Gradient fade on left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/30 to-transparent z-10"></div>

          {/* Gradient fade on right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/30 to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div
              ref={innerRef}
              className="flex space-x-8 py-6"
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                width: "max-content",
              }}
            >
              {allIndividuals.map((individual, index) => (
                <div key={`${individual.id}-${index}`} className="flex-shrink-0 w-48 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <Avatar className="w-28 h-28 md:w-32 md:h-32 border-2 border-gray-700 opacity-80 hover:opacity-100 transition-opacity">
                      <AvatarImage src={individual.image || "/placeholder.svg"} alt={individual.name} />
                      <AvatarFallback className="bg-gray-800 text-white">
                        {individual.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <p className="mt-3 text-base font-medium text-white text-center">{individual.name}</p>
                    <p className="text-sm text-gray-400 text-center">{individual.title}</p>
                    <div className="mt-1 bg-gray-800 px-3 py-1 rounded-full">
                      <p className="text-xs text-gray-300">{individual.followers}</p>
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