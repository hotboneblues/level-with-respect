"use client";

import { useState, useTransition, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitPetitionInterest } from "@/app/actions";
import { CheckCircle2 } from "lucide-react";

export function PetitionModal({ children }: { children: ReactNode }) {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(
    null
  );

  function onSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await submitPetitionInterest(formData);
      setResult(res);
    });
  }

  return (
    <Dialog onOpenChange={() => setResult(null)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        {result?.ok ? (
          <div className="flex flex-col items-center py-8 text-center">
            <DialogTitle className="sr-only">Thank you</DialogTitle>
            <CheckCircle2 className="h-10 w-10 text-moss" />
            <p className="mt-4 font-display text-2xl text-ink">
              You&rsquo;re on the list
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
              {result.message}
            </p>
          </div>
        ) : (
          <>
            <DialogTitle>Add Your Name</DialogTitle>
            <DialogDescription className="mt-3">
              We are currently gathering support from residents, property
              owners, and local businesses affected by recurring neighborhood
              impacts associated with events at LEVEL Venue.
            </DialogDescription>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              The full petition will launch shortly. Leave your email below to
              be notified when signatures officially open.
            </p>

            <form action={onSubmit} className="mt-6 space-y-4">
              {/* Honeypot — leave empty */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    autoComplete="given-name"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    autoComplete="family-name"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="streetName">Street Name</Label>
                <Input
                  id="streetName"
                  name="streetName"
                  placeholder="e.g. Glenville Drive"
                  required
                />
              </div>

              {result && !result.ok && (
                <p className="text-sm text-clay-deep">{result.message}</p>
              )}

              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full"
                disabled={pending}
              >
                {pending ? "Sending…" : "Notify Me"}
              </Button>
              <p className="text-center text-xs text-mute">
                Your information stays with this initiative. No spam, ever.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
