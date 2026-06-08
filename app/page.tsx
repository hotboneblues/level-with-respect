import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PetitionModal } from "@/components/petition-modal";
import { PetitionCounter } from "@/components/petition-counter";
import { Reveal } from "@/components/reveal";

export const revalidate = 300; // keep the community counter fresh

export const metadata: Metadata = {
  title:
    "Level With Respect — Residents for a Good Neighbor on Pico Boulevard",
  description:
    "Residents near LEVEL Venue — the event venue at 9320 W Pico Blvd in Pico-Robertson, Los Angeles, CA 90035 — want it to succeed and the neighborhood to thrive alongside it. Join local residents seeking responsible operation.",
  alternates: { canonical: "/" },
};

const LOVE = [
  {
    icon: Heart,
    title: "Beautiful Space",
    body: "A thoughtfully designed event venue that contributes positively to Pico Boulevard.",
  },
  {
    icon: Building2,
    title: "Local Investment",
    body: "Businesses that invest in the neighborhood deserve the opportunity to succeed.",
  },
  {
    icon: Users,
    title: "Community Gathering Place",
    body: "Events can strengthen local connections and bring people together.",
  },
];

const IMPROVE = [
  {
    title: "Outdoor Amplified Music",
    body: "Residents have reported recurring concerns regarding sound carrying into nearby residential streets. The bass, it turns out, does not respect property lines.",
    href: "/issues#noise",
  },
  {
    title: "Alley Access",
    body: "Event-related vehicles can create challenges for residents accessing garages and parking. Getting home should not require event credentials.",
    href: "/issues#alley",
  },
  {
    title: "Commercial Vehicle Congestion",
    body: "Large service vehicles occasionally impact neighborhood circulation on streets designed for considerably smaller things.",
    href: "/issues#traffic",
  },
  {
    title: "Community Communication",
    body: "Residents would like a clearer channel for ongoing dialogue. A phone number that gets answered would be a wonderful start.",
    href: "/issues#neighborhood",
  },
];

const ASKS = [
  "Responsible sound management",
  "Respect for residential quiet hours",
  "Reliable alley access",
  "Better communication",
  "Ongoing community engagement",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(70%_60%_at_50%_0%,#f0e6d6_0%,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pt-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-clay-deep">
              9320 W Pico Blvd · Los Angeles, CA 90035
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.04] tracking-tight text-ink md:text-7xl">
              Level With Respect
            </h1>
            <p className="mt-6 max-w-2xl font-display text-2xl italic leading-snug text-ink-soft md:text-3xl">
              A beautiful venue can still be a good neighbor.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                LEVEL Venue has brought a striking event venue to 9320 W Pico
                Blvd in Pico-Robertson. Residents are not asking it to
                disappear.
              </p>
              <p className="font-medium text-ink">
                We are asking it to coexist responsibly with the neighborhood
                around it.
              </p>
            </div>
          </Reveal>

          {/* Primary call to action */}
          <Reveal delay={0.3}>
            <div className="mt-10 max-w-2xl rounded-2xl border border-line bg-white/50 p-7 shadow-card md:p-9">
              <div className="space-y-3">
                <PetitionCounter />
                <p className="font-display text-xl text-ink md:text-2xl">
                  Join Local Residents Seeking Responsible Operation
                </p>
              </div>
              <PetitionModal>
                <Button
                  variant="accent"
                  size="xl"
                  className="mt-6 w-full sm:w-auto"
                >
                  Sign the Petition
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </PetitionModal>
              <p className="mt-4 text-sm leading-relaxed text-mute">
                Support practical solutions for outdoor amplified music, alley
                access, and neighborhood quality of life.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button
                variant="outline"
                size="md"
                className="border-sand bg-sand hover:bg-[#ded5c2] hover:border-[#ded5c2]"
                asChild
              >
                <Link href="/issues">See the Issues</Link>
              </Button>
              <Button
                variant="outline"
                size="md"
                className="border-sand bg-sand hover:bg-[#ded5c2] hover:border-[#ded5c2]"
                asChild
              >
                <Link href="/stories#share">Share Your Story</Link>
              </Button>
              <Button
                variant="outline"
                size="md"
                className="border-sand bg-sand hover:bg-[#ded5c2] hover:border-[#ded5c2]"
                asChild
              >
                <Link href="/stories">Read Community Stories</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Love */}
      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-clay-deep">
              What We Love
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
              Credit where credit is due.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {LOVE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-line bg-bone p-8 shadow-card">
                  <item.icon className="h-6 w-6 text-clay" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What Needs Improvement */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-clay-deep">
              What Needs Improvement
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink md:text-4xl">
              Four things, none of them unreasonable.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {IMPROVE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white/50 p-8 shadow-card transition-shadow hover:shadow-lift"
                >
                  <h3 className="font-display text-xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-clay-deep">
                    See the documentation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Ask */}
      <section className="border-t border-line bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-clay">
                The Ask
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                What Residents Are Asking For
              </h2>
              <div className="mt-8 space-y-4 text-base leading-relaxed text-bone/75">
                <p>None of these requests prevent the venue from succeeding.</p>
                <p>
                  They simply help ensure success does not come at the expense
                  of neighboring residents.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="space-y-1">
                {ASKS.map((ask, i) => (
                  <li
                    key={ask}
                    className="flex items-baseline gap-5 border-b border-bone/10 py-5"
                  >
                    <span className="font-display text-sm italic text-clay">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl md:text-2xl">
                      {ask}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:px-8 md:py-28">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight text-ink md:text-5xl">
              We want LEVEL to succeed.
              <span className="mt-2 block italic text-clay-deep">
                Respectfully.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Successful businesses can also be good neighbors. Add your name
              and help us make the case — constructively.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PetitionModal>
                <Button variant="accent" size="lg">
                  Sign the Petition
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </PetitionModal>
              <Button variant="outline" size="lg" asChild>
                <Link href="/stories">Read Community Stories</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
