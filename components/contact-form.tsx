"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll(".fade-in")
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl text-white mb-8 fade-in">Ready to Be Heard?</h2>

          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto fade-in stagger-1">
            Let us take over your social media presence. You live your life, we'll tell your story across Twitter,
            LinkedIn, Instagram, and beyond. Book a 30-minute call to discuss how we can amplify your voice and 
            skyrocket your engagement.
          </p>

          <div className="fade-in stagger-2">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 btn-hover-effect">
              <a href="https://calendly.com/akennedy1929/30min" target="_blank" rel="noopener noreferrer">
                Talk to a Human
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
