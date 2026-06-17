"use client";

import * as React from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/Button"

export function QuoteFormContainer() {
  const [activeForm, setActiveForm] = React.useState("residential")

  const formTypes = [
    { id: "residential", label: "Residential House Cleaning" },
    { id: "move", label: "Move-In / Move-Out" },
    { id: "construction", label: "Post-Construction" },
  ]

  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-border/50">
        
        {/* Form Selector Tabs */}
        <div className="flex flex-col md:flex-row border-b bg-muted/30">
          {formTypes.map((form) => (
            <button
              key={form.id}
              onClick={() => setActiveForm(form.id)}
              className={`flex-1 py-4 px-6 text-sm md:text-base font-semibold transition-colors ${
                activeForm === form.id 
                  ? "bg-primary text-primary-foreground border-b-2 md:border-b-0 md:border-r-2 border-primary" 
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              {form.label}
            </button>
          ))}
        </div>

        {/* Form Content Wrapper */}
        <div className="p-6 md:p-8 lg:p-12">
          {activeForm === "residential" && <ResidentialFormPlaceholder />}
          {activeForm === "move" && <MoveFormPlaceholder />}
          {activeForm === "construction" && <ConstructionFormPlaceholder />}
        </div>
      </div>
    </div>
  )
}

// Importing the actual forms (We will replace placeholders with real imports later or use dynamic)
import { ResidentialForm as ActualResidential } from "./ResidentialForm"
import { MoveInOutForm as ActualMoveInOut } from "./MoveInOutForm"
import { PostConstructionForm as ActualPostConstruction } from "./PostConstructionForm"

function ResidentialFormPlaceholder() { return <ActualResidential /> }
function MoveFormPlaceholder() { return <ActualMoveInOut /> }
function ConstructionFormPlaceholder() { return <ActualPostConstruction /> }
