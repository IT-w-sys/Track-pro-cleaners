import * as React from "react"

export function ProcessSection() {
  const steps = [
    { num: "1", title: "Request Quote", desc: "Tell us about your needs and get a fast quote." },
    { num: "2", title: "Confirm Details", desc: "We confirm your date and service details." },
    { num: "3", title: "Prep & Support", desc: "We prepare any required cleaning supplies." },
    { num: "4", title: "Cleaning Day", desc: "Our team arrives on time and gets to work." },
    { num: "5", title: "Sparkling Delivery", desc: "We leave everything pristine with care." },
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-secondary tracking-tight">How It Works</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-border z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-secondary text-white font-bold text-lg flex items-center justify-center mb-6 shadow-md z-10 border-[6px] border-white group-hover:bg-primary transition-colors">
                  {step.num}
                </div>
                <h3 className="font-bold text-secondary text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
