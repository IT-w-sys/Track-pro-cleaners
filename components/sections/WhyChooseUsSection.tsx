import * as React from "react"
import { Award, ShieldCheck, DollarSign, Clock, Truck, Users } from "lucide-react"

export function WhyChooseUsSection() {
  const reasons = [
    { title: "Experienced Cleaners", icon: Users },
    { title: "Careful Handling", icon: ShieldCheck },
    { title: "Fixed Quote Options", icon: DollarSign },
    { title: "Fully Insured", icon: ShieldCheck },
    { title: "On-Time Arrival", icon: Clock },
    { title: "Clean Equipment", icon: Truck },
    { title: "Friendly Local Team", icon: Award },
  ]

  return (
    <section id="why-choose-us" className="bg-white pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tight">Why Customers Choose Us</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="flex flex-col items-center text-center w-28 group">
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-4 bg-white shadow-sm group-hover:bg-primary transition-colors">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-secondary text-xs uppercase tracking-tight">{reason.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
