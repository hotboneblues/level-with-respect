"use client";

import { useRef, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitReport } from "@/app/actions";
import { CheckCircle2 } from "lucide-react";

const CATEGORIES = [
  { value: "noise", label: "Noise" },
  { value: "alley", label: "Alley Access" },
  { value: "traffic", label: "Traffic" },
  { value: "neighborhood", label: "Neighborhood Impact" },
];

export function ReportForm() {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await submitReport(formData);
      setResult(res);
      if (res.ok) formRef.current?.reset();
    });
  }

  if (result?.ok) {
    return (
      <div className="rounded-2xl border border-line bg-white/50 p-10 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-10 w-10 text-moss" />
        <p className="mt-4 font-display text-2xl text-ink">
          Documentation received
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
          {result.message}
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={onSubmit}
      className="space-y-5 rounded-2xl border border-line bg-white/50 p-7 shadow-card md:p-9"
    >
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            name="category"
            required
            className="flex h-11 w-full rounded-lg border border-line bg-white/60 px-3 text-[15px] text-ink focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay/30"
          >
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="report-date">Date observed</Label>
          <Input id="report-date" name="occurredOn" type="date" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="report-title">Short title</Label>
        <Input
          id="report-title"
          name="title"
          required
          placeholder="e.g. Amplified music audible on residential street, 11:40 PM"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="report-body">Details (optional)</Label>
        <Textarea
          id="report-body"
          name="body"
          placeholder="Time, duration, location, and impact. Factual detail is what makes documentation useful."
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="report-media">Photos or video (optional)</Label>
          <Input
            id="report-media"
            name="media"
            type="file"
            multiple
            accept="image/*,video/mp4,video/quicktime,video/webm"
            className="h-auto py-2 file:mr-3 file:rounded-md file:border-0 file:bg-cream file:px-3 file:py-1.5 file:text-sm file:text-ink-soft"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="report-email">Email (never published)</Label>
          <Input id="report-email" name="email" type="email" />
        </div>
      </div>

      {result && !result.ok && (
        <p className="text-sm text-clay-deep">{result.message}</p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={pending}>
        {pending ? "Submitting…" : "Submit Documentation"}
      </Button>
      <p className="text-xs leading-relaxed text-mute">
        Submissions are reviewed before publication. Documentation should
        reflect first-hand observation — dates, times, and recordings are
        most useful.
      </p>
    </form>
  );
}
