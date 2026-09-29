import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { offers } from '@/data/offers';
import { buildAffiliateUrl } from '@/lib/affiliate';

export function generateStaticParams() {
  return offers.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const o = offers.find((x) => x.slug === slug);

  if (!o) return {};

  return {
    title: `${o.title} — ${o.subtitle}`,
    description: o.description,
    alternates: {
      canonical: `/offer/${o.slug}`,
    },
    openGraph: {
      title: `${o.title} — ${o.subtitle} | OfferHub`,
      description: o.description,
      images: [o.image],
    },
  };
}

export default async function OfferPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
  }>;
}) {
  const { slug } = await params;
  const sp = await searchParams;

  const o = offers.find((x) => x.slug === slug);

  if (!o) {
    redirect('/');
  }

  const qs = new URLSearchParams();

  for (const key of [
    'utm_source',
    'utm_medium',
    'utm_campaign',
  ] as const) {
    if (sp[key]) {
      qs.set(key, sp[key]!);
    }
  }

  const href = buildAffiliateUrl(o, qs);

  redirect(href);
}
