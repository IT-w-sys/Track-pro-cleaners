import * as React from "react"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { MapPin } from "lucide-react"

export function ServiceAreaSection() {
  const areas = ["Salt Lake City", "Provo", "West Valley City", "Orem", "Sandy", "Ogden", "St. George", "Layton"]

  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Interactive Google Map of Utah */}
        <div className="bg-muted rounded-3xl h-[400px] relative overflow-hidden border-4 border-white shadow-xl">
          <iframe
            src="https://maps.google.com/maps?q=Utah&t=&z=6&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Areas We Serve</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Proudly serving the state of Utah, including its greater metropolitan areas, suburbs, and towns. Long-distance moving available upon request.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {areas.map((area, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-medium text-secondary">{area}</span>
              </div>
            ))}
          </div>

          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a href="#quote">Request Service In Your Area</a>
          </Button>
        </div>
      </div>
    </Section>
  )
}
