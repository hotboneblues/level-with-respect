import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { PetitionModal } from "@/components/petition-modal";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Do residents want LEVEL Venue to close? No. Answers to common questions about this independent resident advocacy initiative near 9320 W Pico Blvd, Los Angeles.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    q: "Do residents want LEVEL to close?",
    a: "No. Residents want the venue to succeed while operating responsibly. A thriving business and a livable neighborhood are not competing goals — most successful venues in Los Angeles manage both.",
  },
  {
    q: "Why was this website created?",
    a: "To provide a centralized place for residents to share concerns and advocate for constructive solutions. Individual complaints scatter; organized, documented, respectful advocacy gets results.",
  },
  {
    q: "Is this website affiliated with LEVEL?",
    a: "No. Level With Respect is an independent resident advocacy website and is not affiliated with, endorsed by, or sponsored by LEVEL Venue.",
  },
  {
    q: "What outcome are residents seeking?",
    a: "Practical improvements, communication, and accountability: responsible sound management, respect for residential quiet hours, reliable alley access, and an ongoing channel for community dialogue.",
  },
  {
    q: "How can I add my voice?",
    a: "Sign the petition, share a first-hand story on the Community Stories page, or submit documentation on the Issues page. Every submission is reviewed before publication, and anonymity is always an option.",
  },
  {
    q: "Is this a protest or boycott?",
    a: "Neither. This is neighbors asking a business they would genuinely like to see succeed to operate with the neighborhood in mind. We are pro-venue, pro-business, and pro-sleeping-before-midnight.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-clay-deep">
              FAQ
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Fair questions, plain answers.
            </h1>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          <dl className="space-y-4">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={Math.min(i * 0.06, 0.3)}>
                <div className="rounded-2xl border border-line bg-white/50 p-7 shadow-card md:p-8">
                  <dt className="font-display text-xl text-ink md:text-2xl">
                    {faq.q}
                  </dt>
                  <dd className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {faq.a}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={0.2}>
            <div className="mt-14 rounded-2xl bg-ink p-8 text-center md:p-10">
              <p className="font-display text-2xl text-bone">
                Still have a question?
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-bone/70">
                Write to{" "}
                <a
                  href="mailto:hello@levelwithrespect.com"
                  className="text-clay underline underline-offset-2"
                >
                  hello@levelwithrespect.com
                </a>{" "}
                — or add your name and stay in the loop.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <PetitionModal>
                  <Button variant="accent" size="lg">
                    Sign the Petition
                  </Button>
                </PetitionModal>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-bone/30 text-bone hover:border-bone hover:bg-bone/10 hover:text-bone"
                  asChild
                >
                  <Link href="/stories#share">Share Your Story</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
