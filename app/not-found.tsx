import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-5 py-28 text-center md:py-36">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-clay-deep">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">
        This page moved out of the neighborhood.
      </h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
        The page you are looking for does not exist. The rest of the site,
        happily, does.
      </p>
      <Button variant="primary" size="lg" className="mt-8" asChild>
        <Link href="/">Back to the homepage</Link>
      </Button>
    </section>
  );
}
