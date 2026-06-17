import { Topbar } from "@/components/layout/Topbar"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { QuoteFormContainer } from "@/components/forms/QuoteFormContainer"
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema"
import { Check } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <LocalBusinessSchema />
      <Topbar />
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        
        {/* Quote Section - Split Layout */}
        <section id="quote" className="py-20 relative bg-muted/20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-2xl overflow-hidden">
              
              {/* Left Side: Info & Image */}
              <div className="bg-secondary text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Planning a <span className="text-primary">Clean</span> Soon?</h2>
                  <p className="text-white/80 mb-8 max-w-sm">
                    Get a fast, obligation-free quote from your local cleaning experts.
                  </p>
                  
                  <ul className="space-y-4 mb-12">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-bold text-sm uppercase tracking-wide">Fast & Free Quotes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-bold text-sm uppercase tracking-wide">No Hidden Costs</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-bold text-sm uppercase tracking-wide">Fully Insured</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-bold text-sm uppercase tracking-wide">Friendly Local Team</span>
                    </li>
                  </ul>
                </div>
                
                {/* Truck/Van Image */}
                <div className="relative h-48 md:h-64 mt-8 w-[120%] -ml-[10%] -mb-16 z-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop"
                    alt="Cleaning professionals"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-50 mix-blend-luminosity"
                  />
                  {/* Gradient overlay to fade into bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="bg-white p-6 md:p-10 lg:p-16">
                <QuoteFormContainer />
                <div className="mt-6 flex justify-center gap-6 text-xs font-bold text-secondary uppercase tracking-wider border-t pt-6">
                  <span className="flex items-center gap-1"><Check className="w-3 h-3 text-primary" /> Fast Quotes</span>
                  <span className="flex items-center gap-1"><Check className="w-3 h-3 text-primary" /> No Hidden Costs</span>
                  <span className="flex items-center gap-1"><Check className="w-3 h-3 text-primary" /> Fully Insured</span>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <ProcessSection />
        
        <ServiceAreaSection />
        
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  )
}
