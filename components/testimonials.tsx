import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-black/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-fraunces text-white mb-12 text-center">Voices We've Amplified</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <TestimonialCard
            quote="Griot helped me get my newsletter off the ground. When presenting to an audience that's pretty large, I need to be very particular about what I post. They did great"
            name="Casper Capital"
            role="Content Creator with 6M Followers"
            image="/professional-headshot.png"
          />

          <TestimonialCard
            quote="Austin's been a friend of mine for a while now. From one copywriter to another - He's good"
            name="Jay Yang"
            role="186k on Instagram, 53k on Twitter, Head of Content to Noah Kagan"
            image="/professional-headshot.png"
          />

          <TestimonialCard
            quote="Always struggled to find someone that can match my voice for Twitter. These guys nailed it."
            name="Luke Clancy"
            role="Account Executive at Origami Agents"
            image="/professional-headshot.png"
          />

          <TestimonialCard
            quote="They work with speed. They completed a high quality website for us with just a few days and have been extremely responsive."
            name="Danny Koch"
            role="Operations at Innovo Markets"
            image="/professional-headshot.png"
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  quote,
  name,
  role,
  image,
}: {
  quote: string
  name: string
  role: string
  image: string
}) {
  return (
    <Card className="bg-gray-900/50 border-gray-800">
      <CardContent className="p-8">
        <Quote className="text-gray-600 w-10 h-10 mb-4" />
        <p className="text-gray-300 mb-6 text-lg italic">"{quote}"</p>
        <div className="flex items-center">
          <Avatar className="w-12 h-12 mr-4">
            <AvatarImage src={image || "/placeholder.svg"} alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-white font-medium">{name}</h4>
            <p className="text-gray-400 text-sm">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
