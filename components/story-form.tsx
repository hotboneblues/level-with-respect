"use client";

import { useRef, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitStory } from "@/app/actions";
import { CheckCircle2 } from "lucide-react";

export function StoryForm() {
  const [pending, startTransition] = useTransition();
  const [anonymous, setAnonymous] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await submitStory(formData);
      setResult(res);
      if (res.ok) formRef.current?.reset();
    });
  }

  if (result?.ok) {
    return (
      <div className="rounded-2xl border border-line bg-white/50 p-10 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-10 w-10 text-moss" />
        <p className="mt-4 font-display text-2xl text-ink">Story received</p>
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

      <div className="flex items-center gap-3 rounded-lg bg-cream p-4">
        <input
          id="anonymous"
          name="anonymous"
          type="checkbox"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
          className="h-4 w-4 accent-[#b4532a]"
        />
        <Label htmlFor="anonymous" className="cursor-pointer">
          Share anonymously — your name will not be published
        </Label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {!anonymous && (
          <div className="space-y-1.5">
            <Label htmlFor="name">Name (as displayed)</Label>
            <Input id="name" name="name" placeholder="e.g. Sarah, Glenville Dr." />
          </div>
        )}
        <div className="space-y-1.5">
          <Label htmlFor="story-email">Email (never published)</Label>
          <Input
            id="story-email"
            name="email"
            type="email"
            placeholder="So we can follow up if needed"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="occurredOn">Date (optional)</Label>
          <Input id="occurredOn" name="occurredOn" type="date" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="body">Your story</Label>
        <Textarea
          id="body"
          name="body"
          required
          minLength={20}
          placeholder="What happened, when, and how it affected you. Specific and factual is most helpful."
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="media">Photos or video (optional, up to 4 files)</Label>
        <Input
          id="media"
          name="media"
          type="file"
          multiple
          accept="image/*,video/mp4,video/quicktime,video/webm"
          className="h-auto py-2 file:mr-3 file:rounded-md file:border-0 file:bg-cream file:px-3 file:py-1.5 file:text-sm file:text-ink-soft"
        />
      </div>

      {result && !result.ok && (
        <p className="text-sm text-clay-deep">{result.message}</p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={pending}>
        {pending ? "Submitting…" : "Submit Your Story"}
      </Button>
      <p className="text-xs leading-relaxed text-mute">
        Every submission is reviewed before publication. Please keep accounts
        factual and first-hand. We do not publish personal attacks, names of
        private individuals, or claims we cannot reasonably attribute to
        resident experience.
      </p>
    </form>
  );
}
