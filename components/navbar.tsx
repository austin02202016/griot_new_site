"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`border-b border-gray-800 backdrop-blur-sm fixed w-full z-50 navbar-scroll ${scrolled ? "scrolled" : "bg-black/50"}`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-fraunces text-white transition-transform duration-300 hover:scale-105"
          >
            Griot
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full font-fraunces"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full font-fraunces"
            >
              About
            </Link>
            <Link
              href="#case-studies"
              className="text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full font-fraunces"
            >
              Case Studies
            </Link>
            <Button asChild className="bg-white text-black hover:bg-gray-200 btn-hover-effect font-fraunces">
              <Link href="https://calendly.com/akennedy1929/30min" target="_blank" rel="noopener noreferrer">Talk to a Human</Link>
            </Button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="#services"
              className="text-gray-300 hover:text-white transition-colors py-2 font-fraunces"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-gray-300 hover:text-white transition-colors py-2 font-fraunces"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#case-studies"
              className="text-gray-300 hover:text-white transition-colors py-2 font-fraunces"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-200 w-full btn-hover-effect font-fraunces"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="https://calendly.com/akennedy1929/30min" target="_blank" rel="noopener noreferrer">Talk to a Human</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
