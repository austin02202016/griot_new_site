import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-3xl font-playfair text-white">
              Griot
            </Link>
            <p className="text-gray-400 mt-2">Your voice, amplified. Your time, reclaimed.</p>
          </div>

          <div className="flex gap-8 mb-8 md:mb-0">
            <Link href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Griot. All stories matter.</p>
        </div>
      </div>
    </footer>
  )
}
