"use client";

import * as React from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/Button"

export function MoveInOutForm() {
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
              <option value="condo">Condo</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Square Footage</label>
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

      {/* Service Details */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-secondary border-b pb-2">3. Service Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Service Type</label>
            <select {...register("serviceType")} className={inputClass}>
              <option value="move-in">Move-In Cleaning</option>
              <option value="move-out">Move-Out Cleaning</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Property Status</label>
            <select {...register("propertyStatus")} className={inputClass}>
              <option value="empty">Empty</option>
              <option value="partially">Partially Furnished</option>
              <option value="fully">Fully Furnished</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-3 block">Additional Services</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {["Interior Cabinets", "Refrigerator", "Oven", "Interior Windows", "Garage Sweep-Out", "Carpet Vacuuming", "Wall Spot Cleaning"].map(service => (
              <label key={service} className="flex items-center gap-2">
                <input type="checkbox" value={service} {...register("services")} className="rounded text-primary focus:ring-primary w-4 h-4" />
                <span className="text-sm">{service}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Cleaning Date Needed</label>
            <input type="date" {...register("date")} className={inputClass} />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Property Access</label>
            <select {...register("access")} className={inputClass}>
              <option value="present">I Will Be Present</option>
              <option value="lockbox">Lockbox Available</option>
              <option value="manager">Property Manager Will Provide Access</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1.5 block">Additional Notes</label>
          <textarea {...register("notes")} className={`${inputClass} h-auto py-3 min-h-[100px]`} placeholder="Any specific instructions..." />
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
