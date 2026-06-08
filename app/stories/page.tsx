import type { Metadata } from "next";
import { getApprovedStories } from "@/lib/supabase";
import { StoryForm } from "@/components/story-form";
import { MediaGallery } from "@/components/media-gallery";
import { Reveal } from "@/components/reveal";

export const revalidate = 300; // refresh approved stories every 5 minutes

export const metadata: Metadata = {
  title: "Community Stories",
  description:
    "First-hand accounts from residents living near LEVEL Venue at 9320 W Pico Blvd, Los Angeles. Real experiences, shared respectfully, reviewed before publication.",
  alternates: { canonical: "/stories" },
};

function formatDate(value: string | null) {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function StoriesPage() {
  const stories = await getApprovedStories();

  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-clay-deep">
              Community Stories
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              The neighborhood, in its own words.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              First-hand accounts from the people who live here. Every story is
              reviewed before publication, and anonymity is always an option.
              We ask for specifics, not venting — because specifics are what
              get things fixed.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          {stories.length === 0 ? (
            <Reveal>
              <div className="rounded-2xl border border-dashed border-line bg-white/40 p-12 text-center">
                <p className="font-display text-2xl text-ink">
                  Stories are being collected
                </p>
                <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
                  Approved resident accounts will appear here as they are
                  reviewed. Yours could be the first — share it below.
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {stories.map((story, i) => (
                <Reveal key={story.id} delay={Math.min(i * 0.06, 0.3)}>
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-white/50 p-8 shadow-card">
                    <header className="flex items-baseline justify-between gap-4">
                      <p className="font-display text-lg text-ink">
                        {story.is_anonymous
                          ? "A Neighbor"
                          : story.display_name || "A Resident"}
                      </p>
                      {formatDate(story.occurred_on) && (
                        <time
                          dateTime={story.occurred_on ?? undefined}
                          className="shrink-0 text-xs uppercase tracking-wide text-mute"
                        >
                          {formatDate(story.occurred_on)}
                        </time>
                      )}
                    </header>
                    <p className="mt-4 flex-1 whitespace-pre-line text-[15px] leading-relaxed text-ink-soft">
                      {story.body}
                    </p>
                    <MediaGallery urls={story.media_urls} />
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-line bg-cream" id="share">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Share your experience
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              If you live, work, or own property near 9320 W Pico Blvd, your
              experience matters. Photos and video help establish patterns;
              dates help establish timelines.
            </p>
          </Reveal>
          <div className="mt-8">
            <StoryForm />
          </div>
        </div>
      </section>
    </>
  );
}
