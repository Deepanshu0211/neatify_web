import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ScreenshotsSection } from "@/components/screenshots-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"
import { GSAPProvider } from "@/components/gsap-provider"

export default function Home() {
  return (
    <GSAPProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ScreenshotsSection />
          <DownloadSection />
        </main>
        <Footer />
      </div>
    </GSAPProvider>
  )
}
