"use client"

import { useEffect, useRef, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample client data - replace with your actual clients
const clients = [
  {
    id: 1,
    name: "Jay Yang",
    image: "/placeholder.svg?key=client1",
    company: "Content Creator",
  },
  {
    id: 2,
    name: "Casper Capital",
    image: "/casper_logo.png",
    company: "6M Followers",
  },
  {
    id: 3,
    name: "Chik Egbuna",
    image: "/placeholder.svg?key=client3",
    company: "Personal Trainer",
  },
  {
    id: 4,
    name: "Luke Clancy",
    image: "/placeholder.svg?key=client4",
    company: "Origami Agents",
  },
  {
    id: 5,
    name: "Danny Koch",
    image: "/placeholder.svg?key=client5",
    company: "Innovo Markets",
  },
  {
    id: 6,
    name: "Emma Thompson",
    image: "/placeholder.svg?key=client6",
    company: "Brand Builders",
  },
  {
    id: 7,
    name: "James Wilson",
    image: "/placeholder.svg?key=client7",
    company: "Digital Dynamics",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    image: "/placeholder.svg?key=client8",
    company: "Social Surge",
  },
  {
    id: 9,
    name: "Daniel Kim",
    image: "/placeholder.svg?key=client9",
    company: "Market Movers",
  },
  {
    id: 10,
    name: "Sophia Garcia",
    image: "/placeholder.svg?key=client10",
    company: "Content Kings",
  },
  {
    id: 11,
    name: "Thomas Wright",
    image: "/placeholder.svg?key=client11",
    company: "Insight Analytics",
  },
  {
    id: 12,
    name: "Ava Johnson",
    image: "/placeholder.svg?key=client12",
    company: "Elevate Media",
  },
  {
    id: 13,
    name: "Noah Brown",
    image: "/placeholder.svg?key=client13",
    company: "Venture Capital",
  },
  {
    id: 14,
    name: "Isabella Lee",
    image: "/placeholder.svg?key=client14",
    company: "Global Reach",
  },
  {
    id: 15,
    name: "Ethan Clark",
    image: "/placeholder.svg?key=client15",
    company: "Tech Innovators",
  },
]

export function ClientCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  // Duplicate the clients array to create a seamless loop
  const allClients = [...clients, ...clients]

  useEffect(() => {
    const scrollSpeed = 0.5 // pixels per frame
    let animationFrameId: number
    let lastTimestamp: number

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const elapsed = timestamp - lastTimestamp

      setScrollPosition((prevPosition) => {
        // Calculate new position
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
                transform: `translateX(-${scrollPosition}px)`,
                width: "max-content",
              }}
            >
              {allClients.map((client, index) => (
                <div key={`${client.id}-${index}`} className="flex-shrink-0 w-40 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <Avatar className="w-24 h-24 md:w-28 md:h-28 border-2 border-gray-800 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                      <AvatarImage src={client.image || "/placeholder.svg"} alt={client.name} />
                      <AvatarFallback className="bg-gray-800 text-white">
                        {client.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <p className="mt-3 text-sm text-gray-300 text-center">{client.name}</p>
                    <p className="text-xs text-gray-500 text-center">{client.company}</p>
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
