import type { Metadata } from "next";
import { getApprovedReports, type Report } from "@/lib/supabase";
import { ReportForm } from "@/components/report-form";
import { MediaGallery } from "@/components/media-gallery";
import { Reveal } from "@/components/reveal";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "The Issues — Noise, Alley Access, Traffic & Neighborhood Impact",
  description:
    "Documentation of recurring neighborhood concerns near LEVEL Venue at 9320 W Pico Blvd: outdoor amplified music, alley access, commercial vehicle traffic, and community impact — recorded factually by residents.",
  alternates: { canonical: "/issues" },
};

const SECTIONS: {
  id: Report["category"];
  title: string;
  intro: string;
  detail: string;
}[] = [
  {
    id: "noise",
    title: "Noise",
    intro:
      "Outdoor amplified music carries. Residents on nearby streets have reported recurring evenings when event audio is clearly audible inside their homes.",
    detail:
      "Sound is the most frequently raised concern. The ask is not silence — it is responsible sound management: directional speakers, monitored levels, and genuine respect for residential quiet hours. Venues across Los Angeles manage this successfully every weekend.",
  },
  {
    id: "alley",
    title: "Alley Access",
    intro:
      "The alley is how many residents reach their own garages. During events, it has at times functioned more like a loading dock with occasional through-traffic.",
    detail:
      "Catering trucks, equipment vans, and rideshare staging can block resident access for extended periods. The ask: keep the alley passable, always. Residents should never have to negotiate their way home.",
  },
  {
    id: "traffic",
    title: "Traffic",
    intro:
      "Large commercial vehicles serving events occasionally impact circulation on streets that were designed for neighborhood traffic.",
    detail:
      "Load-ins, load-outs, and guest arrivals concentrate vehicles into a small residential grid. Predictable scheduling, designated staging, and traffic management on event nights would address most of what residents report.",
  },
  {
    id: "neighborhood",
    title: "Neighborhood Impact",
    intro:
      "Beyond any single issue, residents describe a cumulative effect on quality of life — and, just as often, the absence of someone to call when something goes wrong.",
    detail:
      "A posted community line, a designated neighbor liaison, and periodic community meetings are standard practice for venues that operate near homes. Residents would like a clearer channel for ongoing dialogue. That is the whole ask.",
  },
];

function formatDate(value: string | null) {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function IssuesPage() {
  const reports = await getApprovedReports();
  const byCategory = (cat: Report["category"]) =>
    reports.filter((r) => r.category === cat);

  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-clay-deep">
              The Issues
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Documented, dated, and offered in good faith.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              This page collects resident reports about recurring impacts near
              9320 W Pico Blvd. Everything here reflects first-hand resident
              experience, is reviewed before publication, and is presented so
              problems can be solved — not so anyone can be shamed.
            </p>
            <nav aria-label="Issue sections" className="mt-8 flex flex-wrap gap-3">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full border border-line bg-bone px-4 py-2 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {SECTIONS.map((section, idx) => {
        const sectionReports = byCategory(section.id);
        return (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-20 border-t border-line ${
              idx % 2 === 1 ? "bg-cream" : ""
            }`}
          >
            <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
              <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:gap-16">
                <Reveal>
                  <h2 className="font-display text-3xl text-ink md:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
                    {section.intro}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-mute">
                    {section.detail}
                  </p>
                </Reveal>

                <Reveal delay={0.1}>
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-mute">
                    Resident reports — chronological
                  </h3>
                  {sectionReports.length === 0 ? (
                    <div className="mt-4 rounded-2xl border border-dashed border-line bg-white/40 p-8">
                      <p className="text-[15px] leading-relaxed text-ink-soft">
                        Documentation for this section is being compiled.
                        Reviewed resident reports — with photos, video, and
                        dates — will appear here as a chronological timeline.
                      </p>
                      <a
                        href="#submit"
                        className="mt-3 inline-block text-sm font-medium text-clay-deep underline underline-offset-2"
                      >
                        Have something to add? Submit documentation below.
                      </a>
                    </div>
                  ) : (
                    <ol className="mt-4 space-y-4 border-l border-line pl-6">
                      {sectionReports.map((report) => (
                        <li key={report.id} className="relative">
                          <span
                            aria-hidden="true"
                            className="absolute -left-[1.85rem] top-2 h-2.5 w-2.5 rounded-full bg-clay"
                          />
                          <article className="rounded-xl border border-line bg-white/50 p-5 shadow-card">
                            {formatDate(report.occurred_on) && (
                              <time
                                dateTime={report.occurred_on ?? undefined}
                                className="text-xs uppercase tracking-wide text-mute"
                              >
                                {formatDate(report.occurred_on)}
                              </time>
                            )}
                            <h4 className="mt-1 font-medium text-ink">
                              {report.title}
                            </h4>
                            {report.body && (
                              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-ink-soft">
                                {report.body}
                              </p>
                            )}
                            <MediaGallery urls={report.media_urls} />
                          </article>
                        </li>
                      ))}
                    </ol>
                  )}
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <section id="submit" className="scroll-mt-20 border-t border-line bg-ink">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <h2 className="font-display text-3xl text-bone md:text-4xl">
              Add to the record
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-bone/70">
              Patterns are what move conversations forward. If you observed
              something, document it — a date, a time, a photo, a clip.
            </p>
          </Reveal>
          <div className="mt-8">
            <ReportForm />
          </div>
        </div>
      </section>
    </>
  );
}
