import { Phone, Mail, ShieldCheck } from "lucide-react"

export function Topbar() {
  return (
    <div className="bg-secondary text-secondary-foreground py-2 text-sm hidden md:block">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
        {/* Left Side: Contact */}
        <div className="flex items-center gap-6">
          <a href="tel:+18013579066" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4 text-primary" />
            <span className="font-medium">+1 801 357-9066</span>
          </a>
          <a href="mailto:inbox@trackpromovers.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4 text-primary" />
            <span className="font-medium">inbox@trackpromovers.com</span>
          </a>
        </div>

        {/* Right Side: Trust & CTA */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Fully Insured</span>
          </div>
          <a 
            href="#quote" 
            className="bg-primary text-primary-foreground px-4 py-1.5 font-bold uppercase tracking-wide hover:bg-primary/90 transition-colors rounded-sm ml-2"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  )
}
