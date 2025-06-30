"use client"

import { ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export function CaseStudies() {
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
              }, i * 150)
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
    <section ref={sectionRef} id="case-studies" className="py-16 md:py-24 lg:py-32 bg-black/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-fraunces text-white mb-12 text-center fade-in">Success Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <CaseStudyCard
            client="Innovo"
            platform="Website Design"
            image="/innovo_logo.png"
            challenge="Needed optimized websites for both .AE and .COM domains to maximize search visibility"
            solution="Built Next.js sites optimized for AEO and SEO to pull clients from Google searches and AI crawlers like GPT and Claude"
            metric="2 Sites"
            metricLabel="Optimized Domains"
            timeframe="1 month"
            percentIncrease="200%"
            delay={1}
            showGrowthBadge={false}
          />

          <CaseStudyCard
            client="SEI"
            platform="Content Strategy"
            image="/sei_logo.png"
            challenge="Content specialization needed for high-profile clients Jesse Itzler and Daniel Pink"
            solution="Grew Jesse Itzler from 98k to 122k followers (24.5% growth) and Daniel Pink from 353k to 371k followers in 2 months"
            metric="42K"
            metricLabel="Combined Follower Growth"
            timeframe="Campaign period"
            percentIncrease="24.5%"
            delay={2}
          />

          <CaseStudyCard
            client="Casper Capital"
            platform="Landing Page Development"
            image="/casper_logo.png"
            challenge="Finance creator with 8M+ followers needed custom newsletter signup beyond Beehiiv limitations"
            solution="Built custom Next.js landing page to collect multiple data fields that standard platforms don't allow"
            metric="8M+"
            metricLabel="Follower Reach"
            timeframe="2 weeks"
            percentIncrease="300%"
            delay={3}
            showGrowthBadge={false}
          />

          <CaseStudyCard
            client="Pathlit"
            platform="Social Media & Outreach"
            image="/pathlit_logo.png"
            challenge="Advay Gupta, Founder of Pathlit, started with only 33 Twitter followers and 897 LinkedIn followers, needed rapid growth"
            solution="Grew Twitter from 33 to 1,049 followers (3079% growth) and LinkedIn from 897 to 1,849 followers (106% growth) in 2 months. Plus 28% cold outbound response rates"
            metric="1968"
            metricLabel="Total New Followers"
            timeframe="2 months"
            percentIncrease="3079%"
            delay={4}
          />
        </div>
      </div>
    </section>
  )
}

function CaseStudyCard({
  client,
  platform,
  image,
  challenge,
  solution,
  metric,
  metricLabel,
  timeframe,
  percentIncrease,
  delay,
  showGrowthBadge = true,
}: {
  client: string
  platform: string
  image: string
  challenge: string
  solution: string
  metric: string
  metricLabel: string
  timeframe: string
  percentIncrease: string
  delay: number
  showGrowthBadge?: boolean
}) {
  return (
    <Card className={`bg-gray-900/50 border-gray-800 overflow-hidden card-shadow fade-in stagger-${delay}`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image src={image || "/placeholder.svg"} alt={client} fill className="object-contain rounded" />
            </div>
            <div>
              <p className="text-white font-semibold text-lg">{client}</p>
              <p className="text-gray-300 text-sm">{platform}</p>
            </div>
          </div>
          {showGrowthBadge && (
            <div className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
              {percentIncrease} Growth
            </div>
          )}
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Challenge:</p>
              <p className="text-white">{challenge}</p>
            </div>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Solution:</p>
            <p className="text-white">{solution}</p>
          </div>
          <div className="flex justify-between items-end pt-2">
            <div>
              <p className="text-gray-400 text-sm">Results in {timeframe}:</p>
              <p className="text-3xl font-fraunces text-white">{metric}</p>
              <p className="text-gray-300 text-sm">{metricLabel}</p>
            </div>
            <Link
              href="#contact"
              className="flex items-center text-white hover:text-gray-300 transition-colors text-sm font-medium group"
            >
              <span>Similar results?</span>
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
