import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/lib/articles";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Journal — Essays on Venues, Neighborhoods & Coexistence",
  description:
    "Essays on event venues, urban noise, alley access, community relations, and what responsible operation looks like in Los Angeles neighborhoods like Pico-Robertson.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const sorted = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
  const [featured, ...rest] = sorted;

  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-clay-deep">
              Journal
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Thinking out loud about venues, neighborhoods, and the space
              between.
            </h1>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-2xl border border-line bg-white/50 p-8 shadow-card transition-shadow hover:shadow-lift md:p-12"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-mute">
                {formatDate(featured.date)} · {featured.readingTime}
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                {featured.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-clay-deep">
                Read the essay
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {rest.map((article, i) => (
              <Reveal key={article.slug} delay={Math.min(i * 0.05, 0.25)}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white/50 p-8 shadow-card transition-shadow hover:shadow-lift"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-mute">
                    {formatDate(article.date)} · {article.readingTime}
                  </p>
                  <h2 className="mt-3 font-display text-2xl leading-snug text-ink">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                    {article.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-clay-deep">
                    Read the essay
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
