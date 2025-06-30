import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
// import { Team } from "@/components/team"
import { CaseStudies } from "@/components/case-studies"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { ClientCarousel } from "@/components/client-carousel"
import { IndividualCarousel } from "@/components/individual-carousel"
import { CompanyCarousel } from "@/components/company-carousel"
import { BackToTop } from "@/components/back-to-top"
// import { FeaturedTweets } from "@/components/featured-tweets"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        {/* <ClientCarousel />      
        <CompanyCarousel /> */}

        <Stats />
        <Services />
        {/* <FeaturedTweets /> */}
      
        <CaseStudies />

        <About />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
