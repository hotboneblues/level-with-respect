import Link from "next/link";
import { DISCLAIMER } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg text-ink">
              Level <span className="italic text-clay-deep">With</span> Respect
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              A resident-led initiative for responsible operation and good
              neighborhood relations near LEVEL Venue, 9320 W Pico Blvd,
              Los Angeles, CA 90035.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-mute">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/issues" className="text-ink-soft hover:text-ink">The Issues</Link></li>
              <li><Link href="/stories" className="text-ink-soft hover:text-ink">Community Stories</Link></li>
              <li><Link href="/blog" className="text-ink-soft hover:text-ink">Journal</Link></li>
              <li><Link href="/faq" className="text-ink-soft hover:text-ink">FAQ</Link></li>
              <li><Link href="/privacy" className="text-ink-soft hover:text-ink">Privacy</Link></li>
            </ul>
          </nav>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-mute">
              Contact
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Residents, neighbors, and local businesses:{" "}
              <a
                href="mailto:hello@levelwithrespect.com"
                className="text-clay-deep underline underline-offset-2"
              >
                hello@levelwithrespect.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-xs leading-relaxed text-mute">{DISCLAIMER}</p>
          <p className="mt-2 text-xs text-mute">
            © {new Date().getFullYear()} Level With Respect. All views
            expressed reflect resident experiences and opinions.
          </p>
        </div>
      </div>
    </footer>
  );
}
