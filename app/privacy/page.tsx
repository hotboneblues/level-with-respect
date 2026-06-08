import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Level With Respect handles the information residents share: petition signups, stories, and documentation.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <h1 className="font-display text-4xl text-ink">Privacy</h1>
        <div className="prose-lwr mt-8">
          <p>
            Level With Respect is a volunteer, resident-led initiative. We
            collect only what you choose to give us, and we use it only for
            this initiative.
          </p>
          <h2>What we collect</h2>
          <p>
            Petition interest signups (name, email, street name), community
            story submissions, and issue documentation, including any photos or
            video you attach. Email addresses attached to stories and reports
            are used solely to follow up on your submission and are never
            published.
          </p>
          <h2>What we do with it</h2>
          <p>
            We use your email to notify you when the petition officially opens
            and for occasional updates about this initiative. We do not sell,
            rent, or share your information with anyone, including LEVEL Venue,
            advertisers, or other organizations. Aggregate counts (such as the
            number of supporters) may be published; individual signatures are
            not published without consent.
          </p>
          <h2>Moderation</h2>
          <p>
            Stories and documentation are reviewed before publication. If you
            chose anonymity, your name is never displayed. You may request
            removal of your submission or your signup at any time by writing
            to{" "}
            <a href="mailto:hello@levelwithrespect.com">
              hello@levelwithrespect.com
            </a>
            .
          </p>
          <h2>Storage and analytics</h2>
          <p>
            Data is stored with Supabase and the site is hosted on Vercel. We
            use privacy-respecting, cookie-free page analytics to understand
            overall traffic. We do not run advertising or tracking pixels.
          </p>
        </div>
      </div>
    </section>
  );
}
