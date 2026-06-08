import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-[120px] w-full rounded-lg border border-line bg-white/60 px-4 py-3 text-[15px] text-ink placeholder:text-mute transition-colors focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay/30 disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
