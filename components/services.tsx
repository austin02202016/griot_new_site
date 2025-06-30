"use client"
import { useEffect, useRef, useState } from "react"
import { Twitter, Linkedin, Instagram, BarChart3, FileText, Globe, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCard, setActiveCard] = useState<number | null>(null)

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

  const services = [
    {
      id: 1,
      icon: <Twitter className="w-6 h-6" />,
      title: "Twitter Management",
      description:
        "We craft and schedule engaging tweets that capture your unique voice, growing your following and influence.",
      highlight: "Grew Pathlit from 33 to 1,049 followers in 2 months",
    },
    {
      id: 2,
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn Presence",
      description:
        "Build your professional brand with thoughtful posts and articles, establishing your expertise in your field.",
      highlight: "Pathlit: 897 to 1,849 followers in first 2 months",
    },
    {
      id: 3,
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram Storytelling",
      description:
        "We create compelling scripts for your Instagram content, helping you connect visually with your audience.",
      highlight: "Content strategy for 8M+ follower creators like Casper Capital",
    },
    {
      id: 4,
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Comprehensive Strategy",
      description:
        "Content specialization for high-profile clients with data-driven growth strategies and cold outreach campaigns.",
      highlight: "SEI: Jesse Itzler 98k→122k, Daniel Pink 353k→371k",
    },
    {
      id: 5,
      icon: <FileText className="w-6 h-6" />,
      title: "Newsletter & Landing Pages",
      description: "Custom landing pages and newsletter strategies that go beyond standard platform limitations.",
      highlight: "Built custom data collection for Casper Capital's 8M+ audience",
    },
    {
      id: 6,
      icon: <Globe className="w-6 h-6" />,
      title: "Website Design",
      description: "Next.js websites optimized for AEO and SEO to capture traffic from Google and AI crawlers.",
      highlight: "Innovo: Dual-domain optimization (.AE & .COM sites)",
    },
  ]

  return (
    <section ref={sectionRef} id="services" className="py-16 md:py-24 lg:py-32 bg-black/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-fraunces text-white mb-12 text-center fade-in">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="group"
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div
                  className={`relative h-full overflow-hidden rounded-xl border border-gray-800 transition-all duration-300 ${
                    activeCard === service.id ? "border-gray-600 shadow-lg shadow-black/30" : "hover:border-gray-700"
                  }`}
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30"></div>

                  {/* Animated gradient border on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"></div>

                  {/* Content */}
                  <div className="relative z-10 p-6">
                    {/* Icon with consistent styling */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-800 text-white mb-5 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg border border-gray-700 group-hover:border-gray-600">
                      {service.icon}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>

                    {/* Highlight that appears on hover */}
                    <div
                      className={`flex items-center text-sm font-medium text-white mt-2 opacity-0 transform translate-y-2 transition-all duration-300 ${
                        activeCard === service.id
                          ? "opacity-100 translate-y-0"
                          : "group-hover:opacity-100 group-hover:translate-y-0"
                      }`}
                    >
                      <span>{service.highlight}</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>

                  {/* Animated corner accent */}
                  <div className="absolute -bottom-2 -right-2 h-20 w-20 rounded-full bg-white/10 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-30 group-hover:scale-125"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
