import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-lg border border-line bg-white/60 px-4 text-[15px] text-ink placeholder:text-mute transition-colors focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay/30 disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
