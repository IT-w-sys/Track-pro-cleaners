import * as React from "react"
import { Home, Truck, Building2, HardHat, Sparkles, Droplet, Warehouse, CheckSquare } from "lucide-react"

export function ServicesSection() {
  const services = [
    { title: "Local Cleaning", desc: "Fast, friendly and affordable local home cleans.", icon: Home },
    { title: "Move-In / Out", desc: "Reliable deep cleaning for transition periods.", icon: Truck },
    { title: "Office Relocations", desc: "Minimize downtime with efficient office cleans.", icon: Building2 },
    { title: "Apartment Cleans", desc: "Expert apartment & unit cleaning specialists.", icon: Building2 },
    { title: "Post-Construction", desc: "Professional dust and debris clearing.", icon: HardHat },
    { title: "Deep Sanitation", desc: "Secure and thorough virus/bacteria sanitation.", icon: Shield },
    { title: "Carpet Cleaning", desc: "Specialist carpet and rug care you can trust.", icon: Droplet },
    { title: "Warehouse Cleaning", desc: "Extra care for large commercial spaces.", icon: Warehouse },
  ]

  // Quick fallback for icon Shield
  function Shield(props: any) {
    return <CheckSquare {...props} />
  }

  return (
    <section id="services" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4 tracking-tight">Our Cleaning Services</h2>
          <p className="text-muted-foreground text-sm font-medium">
            Complete cleaning solutions for homes, apartments, and businesses across the metro area.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index} 
                className="bg-white border border-border/60 rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="w-16 h-16 bg-muted/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-secondary mb-3 text-sm">{service.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
