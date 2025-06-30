"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = heroRef.current?.querySelectorAll(".fade-in")
            elements?.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible")
              }, i * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  return (
    <section ref={heroRef} className="pt-32 pb-0 md:pt-40 lg:pt-48 relative overflow-hidden">
      {/* Background flash animations - contained within the hero section */}
      {mounted && (
        <div className="absolute inset-0 top-0 overflow-hidden pointer-events-none">
          {/* Area-based flashes - more blob-like shapes */}
          {Array.from({ length: 15 }).map((_, i) => {
            // Create area-based dimensions (more balanced width/height)
            const size = Math.floor(Math.random() * 100) + 50 // 50-150px
            const aspectRatio = 0.7 + Math.random() * 0.6 // 0.7-1.3 (near square)
            const width = size
            const height = size * aspectRatio

            // Position and timing
            const top = Math.floor(Math.random() * 100)
            const left = Math.floor(Math.random() * 100)
            const delay = Math.floor(Math.random() * 12) // 0-12s
            const duration = Math.random() * 1.5 + 0.8 // 0.8-2.3s

            // Visual properties
            const blur = Math.floor(Math.random() * 30) + 20 // 20-50px blur for area effect
            const opacity = Math.random() * 0.15 + 0.05 // 0.05-0.2 max opacity (very subtle)
            const rotation = Math.floor(Math.random() * 180) // 0-180 degrees

            return (
              <div
                key={`area-flash-${i}`}
                className="absolute bg-white animate-area-flash"
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  top: `${top}%`,
                  left: `${left}%`,
                  opacity: 0,
                  filter: `blur(${blur}px)`,
                  transform: `rotate(${rotation}deg)`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  borderRadius: `${Math.random() * 40 + 30}%`, // 30-70% border radius for blob-like shape
                  "--max-opacity": opacity,
                } as any}
              ></div>
            )
          })}

          {/* Larger area flashes */}
          {Array.from({ length: 8 }).map((_, i) => {
            const size = Math.floor(Math.random() * 200) + 100 // 100-300px
            const aspectRatio = 0.8 + Math.random() * 0.4 // 0.8-1.2 (near square)
            const width = size
            const height = size * aspectRatio

            const top = Math.floor(Math.random() * 100)
            const left = Math.floor(Math.random() * 100)
            const delay = Math.floor(Math.random() * 15) // 0-15s
            const duration = Math.random() * 2 + 1.2 // 1.2-3.2s

            const blur = Math.floor(Math.random() * 40) + 30 // 30-70px blur
            const opacity = Math.random() * 0.12 + 0.03 // 0.03-0.15 max opacity
            const rotation = Math.floor(Math.random() * 180) // 0-180 degrees

            return (
              <div
                key={`large-area-flash-${i}`}
                className="absolute bg-white animate-area-flash"
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  top: `${top}%`,
                  left: `${left}%`,
                  opacity: 0,
                  filter: `blur(${blur}px)`,
                  transform: `rotate(${rotation}deg)`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  borderRadius: `${Math.random() * 50 + 25}%`, // 25-75% border radius
                  "--max-opacity": opacity,
                } as any}
              ></div>
            )
          })}

          {/* Very subtle ambient glow areas */}
          {Array.from({ length: 5 }).map((_, i) => {
            const width = Math.floor(Math.random() * 400) + 200 // 200-600px
            const height = Math.floor(Math.random() * 300) + 150 // 150-450px
            const top = Math.floor(Math.random() * 100)
            const left = Math.floor(Math.random() * 100)
            const rotation = Math.floor(Math.random() * 90) - 45 // -45 to 45 degrees

            return (
              <div
                key={`ambient-${i}`}
                className="absolute bg-white/5 animate-glow-slow"
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  top: `${top}%`,
                  left: `${left}%`,
                  filter: "blur(100px)",
                  transform: `rotate(${rotation}deg)`,
                  animationDelay: `${i * 2}s`,
                  opacity: 0.03,
                  borderRadius: "40%",
                }}
              ></div>
            )
          })}
        </div>
      )}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-frank-ruhl-libre text-white mb-6 leading-tight fade-in">
            Your Brand's Story Is Worth Telling
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in stagger-1">
            We are the griots of the digital age, crafting narratives that don't just tell your brand's story—they amplify it and skyrocket its engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in stagger-2">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 text-lg btn-hover-effect">
              <Link href="https://calendly.com/akennedy1929/30min" target="_blank" rel="noopener noreferrer">Talk to a Human</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 text-lg btn-hover-effect"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
          <p className="text-gray-400 mt-10 mb-16 text-sm md:text-base fade-in stagger-3">
            50M+ views generated • 8 Million Followers Managed
          </p>
        </div>
      </div>

      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
    </section>
  )
}
