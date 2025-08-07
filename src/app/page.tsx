"use client"

import { Header } from "@/components/Header"
import { HeroSection } from "@/components/View/HeroSection"
import { ServicesSection } from "@/components/View/ServicesSection"
import { PortfolioSection } from "@/components/View/PortfolioSection"
import { TeamSection } from "@/components/View/TeamSection"
import { ProcessSection } from "@/components/View/ProcessSection"
import { Footer } from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <ProcessSection />
      <Footer />
    </div>
  )
}
