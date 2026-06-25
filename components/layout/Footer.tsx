import Link from "next/link"
import { Sparkles, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Company Info (Takes up 2 columns) */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-primary-foreground p-2 rounded-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tight text-white leading-none uppercase">Track Pro</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary leading-none mt-1">Cleaning Services</span>
              </div>
            </Link>
            <p className="text-secondary-foreground/80 mb-6 max-w-xs leading-relaxed text-sm">
              Reliable, professional, and affordable cleaning services for homes and businesses. We transform your spaces so you can focus on what matters most.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold uppercase tracking-wide text-sm mb-6 text-white border-b border-white/20 pb-2">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Local Cleaning</Link></li>
              <li><Link href="#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Move-In / Out</Link></li>
              <li><Link href="#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Office Cleaning</Link></li>
              <li><Link href="#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Post-Construction</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold uppercase tracking-wide text-sm mb-6 text-white border-b border-white/20 pb-2">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#faq" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#quote" className="text-sm text-primary font-bold transition-colors">Get a Free Quote</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold uppercase tracking-wide text-sm mb-6 text-white border-b border-white/20 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-secondary-foreground/80">+1 801 357-9066</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-secondary-foreground/80">inbox@trackpromovers.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-secondary-foreground/80">Mon - Sat: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-xs">
            &copy; {new Date().getFullYear()} Track Pro Cleaning Services. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-secondary-foreground/60">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>Designed by TrackPro</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
