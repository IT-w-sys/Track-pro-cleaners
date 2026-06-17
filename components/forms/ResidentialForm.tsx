"use client";

import * as React from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/Button"

export function ResidentialForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    alert("Quote request submitted successfully!")
  }

  const inputClass = "flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-secondary border-b pb-2">1. Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
            <input {...register("fullName", { required: true })} className={inputClass} placeholder="John Doe" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Phone Number *</label>
            <input {...register("phone", { required: true })} className={inputClass} placeholder="(555) 123-4567" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-medium mb-1.5 block">Email Address *</label>
            <input type="email" {...register("email", { required: true })} className={inputClass} placeholder="john@example.com" />
          </div>
        </div>
      </div>

      {/* Property Information */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-secondary border-b pb-2">2. Property Information</h3>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Property Address</label>
          <input {...register("address")} className={inputClass} placeholder="123 Main St, City, State, ZIP" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Property Type</label>
            <select {...register("propertyType")} className={inputClass}>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo / Townhouse</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Approx. Square Footage</label>
            <input type="number" {...register("sqft")} className={inputClass} placeholder="e.g. 2000" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Bedrooms</label>
            <select {...register("bedrooms")} className={inputClass}>
              {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
              <option value="7+">7+</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Bathrooms</label>
            <select {...register("bathrooms")} className={inputClass}>
              {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map(n => <option key={n} value={n}>{n}</option>)}
              <option value="5+">5+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Cleaning Preferences */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-secondary border-b pb-2">3. Cleaning Preferences</h3>
        
        <div>
          <label className="text-sm font-medium mb-3 block">Cleaning Frequency</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["One-Time", "Weekly", "Bi-Weekly", "Monthly"].map(freq => (
              <label key={freq} className="flex items-center gap-2 border p-3 rounded-xl cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <input type="radio" value={freq} {...register("frequency")} className="text-primary focus:ring-primary w-4 h-4" defaultChecked={freq === "One-Time"} />
                <span className="text-sm">{freq}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-3 block">Specific Services Needed</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {["Dusting", "Vacuuming", "Mopping", "Kitchen Cleaning", "Bathroom Cleaning", "Window Interior", "Refrigerator", "Oven", "Laundry"].map(service => (
              <label key={service} className="flex items-center gap-2">
                <input type="checkbox" value={service} {...register("services")} className="rounded text-primary focus:ring-primary w-4 h-4" />
                <span className="text-sm">{service}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Pets in Home?</label>
            <select {...register("pets")} className={inputClass}>
              <option value="no">No Pets</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Preferred Date</label>
            <input type="date" {...register("date")} className={inputClass} />
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1.5 block">Additional Notes</label>
          <textarea {...register("notes")} className={`${inputClass} h-auto py-3 min-h-[100px]`} placeholder="Any specific instructions or areas to focus on..." />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-muted p-6 rounded-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Preferred Contact Method</label>
            <select {...register("contactMethod")} className={inputClass}>
              <option value="phone">Phone Call</option>
              <option value="text">Text Message</option>
              <option value="email">Email</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Best Time to Contact</label>
            <select {...register("contactTime")} className={inputClass}>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
        </div>
        
        <label className="flex items-start gap-3">
          <input type="checkbox" {...register("agree", { required: true })} className="mt-1 rounded text-primary focus:ring-primary w-4 h-4" />
          <span className="text-sm text-muted-foreground">I agree to be contacted regarding my cleaning request. Your information is kept strictly confidential.</span>
        </label>

        <Button type="submit" size="lg" className="w-full text-lg shadow-lg hover:shadow-xl transition-all">
          Get My Free Quote
        </Button>
      </div>

    </form>
  )
}
