import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { articles, getArticle } from "@/lib/articles";
import { SITE_URL, SITE_NAME } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PetitionModal } from "@/components/petition-modal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `${SITE_URL}/blog/${article.slug}`,
      publishedTime: article.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
  };

  const index = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[(index + 1) % articles.length];

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-mute transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Journal
        </Link>
        <header className="mt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-mute">
            <time dateTime={article.date}>{formatDate(article.date)}</time> ·{" "}
            {article.readingTime}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            {article.title}
          </h1>
        </header>

        <div className="prose-lwr mt-10">
          {article.sections.map((section, i) => (
            <section key={i}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </section>
          ))}
        </div>

        <footer className="mt-14 border-t border-line pt-10">
          <div className="rounded-2xl bg-cream p-8 text-center">
            <p className="font-display text-xl text-ink">
              Live near Pico Boulevard?
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
              This journal is part of Level With Respect, a resident initiative
              for responsible venue operation. Add your name to stay informed.
            </p>
            <div className="mt-5">
              <PetitionModal>
                <Button variant="accent" size="lg">
                  Sign the Petition
                </Button>
              </PetitionModal>
            </div>
          </div>

          <Link
            href={`/blog/${next.slug}`}
            className="group mt-6 flex items-center justify-between rounded-2xl border border-line p-6 transition-shadow hover:shadow-card"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-mute">
                Next essay
              </p>
              <p className="mt-1 font-display text-lg text-ink">
                {next.title}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-clay-deep transition-transform group-hover:translate-x-1" />
          </Link>
        </footer>
      </div>
    </article>
  );
}
