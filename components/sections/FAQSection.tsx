"use client";

import * as React from "react"
import { Section } from "@/components/ui/Section"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const faqs = [
    {
      q: "How much does cleaning cost?",
      a: "Our rates depend on the type of cleaning, the size of your property, and the frequency of service. We offer free, custom quotes to give you an accurate estimate tailored to your needs."
    },
    {
      q: "Do you bring your own supplies?",
      a: "Yes! We bring all our own professional-grade, eco-friendly cleaning supplies and equipment. If you prefer us to use specific products you own, just let us know."
    },
    {
      q: "Are your cleaners insured?",
      a: "Absolutely. All our cleaning professionals are fully licensed, bonded, and insured for your peace of mind and protection."
    },
    {
      q: "How do I schedule a cleaning?",
      a: "You can schedule a cleaning by requesting a free quote through our website, calling our customer service line, or sending us an email. We offer flexible scheduling to fit your lifestyle."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, bank transfers, and standard digital payment methods. Payment is securely processed after the cleaning is completed to your satisfaction."
    }
  ]

  return (
    <Section id="faq" className="bg-muted/30 curve-top mb-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground">
          Got questions? We've got answers. If you don't see your question here, feel free to reach out.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div 
              key={index} 
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen ? 'border-primary shadow-md' : 'border-border/50 hover:border-primary/50'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-lg text-secondary pr-8">{faq.q}</span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-primary text-primary-foreground rotate-180' : 'bg-muted text-muted-foreground'}`}>
                  <ChevronDown aria-hidden="true" className="w-5 h-5" />
                </div>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
