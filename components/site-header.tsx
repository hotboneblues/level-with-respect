"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PetitionModal } from "@/components/petition-modal";

const NAV = [
  { href: "/issues", label: "The Issues" },
  { href: "/stories", label: "Community Stories" },
  { href: "/blog", label: "Journal" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bone/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          Level <span className="italic text-clay-deep">With</span> Respect
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm tracking-wide transition-colors hover:text-ink",
                pathname.startsWith(item.href) ? "text-ink" : "text-ink-soft"
              )}
            >
              {item.label}
            </Link>
          ))}
          <PetitionModal>
            <Button variant="accent" size="sm">
              Sign the Petition
            </Button>
          </PetitionModal>
        </nav>

        <button
          className="rounded-md p-2 text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-line/70 bg-bone px-5 pb-6 pt-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-base text-ink-soft hover:bg-cream hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <PetitionModal>
                <Button variant="accent" size="lg" className="w-full">
                  Sign the Petition
                </Button>
              </PetitionModal>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
