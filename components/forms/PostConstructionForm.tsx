"use client";

import * as React from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/Button"

export function PostConstructionForm() {
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

      {/* Project Information */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-secondary border-b pb-2">2. Project Information</h3>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Project Address</label>
          <input {...register("address")} className={inputClass} placeholder="123 Project St, City, State, ZIP" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Project Category</label>
            <select {...register("projectCategory")} className={inputClass}>
              <option value="residential">Residential Project</option>
              <option value="commercial">Commercial Project</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Type of Project</label>
            <select {...register("projectType")} className={inputClass}>
              <option value="new">New Construction</option>
              <option value="renovation">Renovation</option>
              <option value="remodel">Remodel</option>
              <option value="tenant">Tenant Improvement</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Building Type</label>
            <select {...register("buildingType")} className={inputClass}>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="office">Office</option>
              <option value="retail">Retail Store</option>
              <option value="warehouse">Warehouse</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Property Size (Sq Ft)</label>
            <input type="number" {...register("sqft")} className={inputClass} placeholder="e.g. 5000" />
          </div>
        </div>
      </div>

      {/* Construction Status */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-secondary border-b pb-2">3. Service Needs</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Construction Status</label>
            <select {...register("status")} className={inputClass}>
              <option value="completed">Work Completed</option>
              <option value="near">Near Completion</option>
              <option value="progress">Still In Progress</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Requested Cleaning Date</label>
            <input type="date" {...register("date")} className={inputClass} />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-3 block">Services Needed</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Dust Removal", "Debris Removal", "Window Cleaning", "Floor Cleaning", "Cabinet Cleaning", "Bathroom Cleaning", "Kitchen Cleaning", "Final Detailed Cleaning"].map(service => (
              <label key={service} className="flex items-center gap-2">
                <input type="checkbox" value={service} {...register("services")} className="rounded text-primary focus:ring-primary w-4 h-4" />
                <span className="text-sm">{service}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1.5 block">Additional Notes</label>
          <textarea {...register("notes")} className={`${inputClass} h-auto py-3 min-h-[100px]`} placeholder="Any specific requirements or hazards..." />
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
