"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

type StatItemProps = {
  value: string
  label: string
  delay?: number
}

const StatItem = ({ value, label, delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState("0")
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (!inView) return

    // Parse the target value
    let targetValue = 0
    let suffix = ""

    if (value.endsWith("+")) {
      // Handle values with + suffix
      const withoutPlus = value.slice(0, -1)
      if (withoutPlus.endsWith("k")) {
        targetValue = Number.parseFloat(withoutPlus.slice(0, -1)) * 1000
        suffix = "k+"
      } else if (withoutPlus.endsWith("M")) {
        targetValue = Number.parseFloat(withoutPlus.slice(0, -1)) * 1000000
        suffix = "M+"
      } else {
        targetValue = Number.parseFloat(withoutPlus)
        suffix = "+"
      }
    } else if (value.endsWith("k")) {
      targetValue = Number.parseFloat(value.slice(0, -1)) * 1000
      suffix = "k"
    } else if (value.endsWith("M")) {
      targetValue = Number.parseFloat(value.slice(0, -1)) * 1000000
      suffix = "M"
    } else {
      targetValue = Number.parseFloat(value)
    }

    // Animation duration and steps
    const duration = 700 // reduced from 2000ms to 700ms (about 1/3 of original time)
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)

    // Easing function for smoother animation
    const easeOutQuad = (t: number) => t * (2 - t)

    let frame = 0
    const countUp = () => {
      frame++
      const progress = easeOutQuad(frame / totalFrames)
      const currentCount = Math.round(targetValue * progress)

      // Format the count based on suffix
      if (suffix === "k+" || suffix === "k") {
        setCount((currentCount / 1000).toFixed(1) + suffix)
      } else if (suffix === "M+" || suffix === "M") {
        setCount((currentCount / 1000000).toFixed(1) + suffix)
      } else {
        setCount(currentCount + suffix)
      }

      if (frame < totalFrames) {
        requestAnimationFrame(countUp)
      }
    }

    // Start animation after delay
    const timer = setTimeout(() => {
      requestAnimationFrame(countUp)
    }, delay)

    return () => clearTimeout(timer)
  }, [inView, value, delay])

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl font-fraunces text-white mb-3">{count}</p>
      <p className="text-gray-400">{label}</p>
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-black/50 relative">
      {/* Top gradient for smoother transition from client carousel */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/40 to-black/50 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-fraunces text-white mb-12 text-center">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatItem value="7+" label="Applications built for clients" delay={0} />
          <StatItem value="9M+" label="Combined followers for managed founders" delay={200} />
          <StatItem value="800k+" label="Combined views for early-stage founders" delay={400} />
        </div>
      </div>

      {/* Bottom gradient for transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-black/50 to-black/30 pointer-events-none"></div>
    </section>
  )
}
