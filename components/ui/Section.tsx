import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  curveTop?: boolean;
  curveBottom?: boolean;
  containerClass?: string;
}

export function Section({
  className,
  containerClass,
  curveTop = false,
  curveBottom = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-16 md:py-24",
        curveTop && "curve-top -mt-10 pt-20",
        curveBottom && "curve-bottom pb-24",
        className
      )}
      {...props}
    >
      <div className={cn("container mx-auto px-4 md:px-6 max-w-7xl relative z-10", containerClass)}>
        {children}
      </div>
    </section>
  )
}
