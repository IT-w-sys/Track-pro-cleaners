import * as React from "react"
import { ShieldCheck, Clock, ThumbsUp } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <>
      <section className="relative bg-muted/20 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl pt-16 pb-16 lg:pt-24 lg:pb-0">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Text Content */}
            <div className="flex-1 space-y-8 lg:pb-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-secondary tracking-tight">
                Stress-Free <span className="text-primary">Cleaning Services</span> for Homes & Businesses
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Local cleaning, move-in/out deep cleans, office sanitization, post-construction clearing, and reliable service solutions you can trust.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="#quote" 
                  className="bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors rounded-sm text-center shadow-lg hover:shadow-xl"
                >
                  Get a Cleaning Quote &gt;
                </a>
                <a 
                  href="#services" 
                  className="bg-white text-secondary border border-border/80 px-8 py-4 font-bold uppercase tracking-wide hover:bg-muted transition-colors rounded-sm text-center shadow-sm"
                >
                  View Our Services
                </a>
              </div>
            </div>

            {/* Image Content (Aligns to bottom right in inspiration) */}
            <div className="flex-1 w-full relative h-[400px] lg:h-[500px] hidden lg:block self-end">
              <Image 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional cleaners" 
                fill
                priority
                sizes="50vw"
                className="object-cover object-center rounded-t-xl shadow-2xl border-x-4 border-t-4 border-white"
              />
            </div>
            
            {/* Mobile Image */}
            <div className="w-full relative h-[300px] lg:hidden mt-8">
              <Image 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional cleaners" 
                fill
                priority
                sizes="100vw"
                className="object-cover rounded-xl shadow-lg border-4 border-white"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Trust Bar below hero */}
      <div className="bg-white border-b py-6">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:flex md:justify-between items-center md:divide-x gap-y-6">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 px-2 md:px-6 flex-1 text-center md:text-left">
              <ShieldCheck className="w-8 h-8 text-secondary shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-bold text-secondary text-sm">Fully Insured</p>
                <p className="text-xs text-muted-foreground hidden md:block">Peace of mind</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 px-2 md:px-6 flex-1 text-center md:text-left">
              <Clock className="w-8 h-8 text-secondary shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-bold text-secondary text-sm">On-Time Service</p>
                <p className="text-xs text-muted-foreground hidden md:block">Every Time</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 px-2 md:px-6 flex-1 text-center md:text-left col-span-2 md:col-span-1">
              <ThumbsUp className="w-8 h-8 text-secondary shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-bold text-secondary text-sm">Careful & Reliable</p>
                <p className="text-xs text-muted-foreground hidden md:block">Local Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
