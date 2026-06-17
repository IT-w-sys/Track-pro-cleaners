"use client";

import * as React from "react"
import Link from "next/link"
import { Menu, X, Sparkles } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Resources", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="bg-white sticky top-0 z-50 border-b shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="bg-primary text-primary-foreground p-2 rounded-sm group-hover:scale-105 transition-transform">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-2xl tracking-tight text-secondary leading-none uppercase">Track Pro</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground leading-none mt-1">Cleaning Services</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-wide text-secondary hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden p-2 text-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X aria-hidden="true" className="w-6 h-6" /> : <Menu aria-hidden="true" className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t">
          <nav className="flex flex-col p-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-4 px-4 text-sm font-bold uppercase border-b border-border/50 hover:bg-muted transition-colors text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="p-4 pt-4 flex flex-col gap-3">
              <a href="tel:+16023480319" className="w-full text-center py-3 border border-secondary text-secondary font-bold uppercase text-sm">Call Now</a>
              <a href="#quote" className="w-full text-center py-3 bg-primary text-primary-foreground font-bold uppercase text-sm" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
