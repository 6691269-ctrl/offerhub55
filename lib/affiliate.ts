import type { Offer } from '@/data/offers';
const ALLOWED = ['utm_source','utm_medium','utm_campaign'];
export function buildAffiliateUrl(offer: Offer, searchParams?: URLSearchParams | { get(name: string): string | null }) {
  const url = new URL(offer.affiliateUrl);
  if (searchParams) for (const key of ALLOWED) { const value = searchParams.get(key); if (value) url.searchParams.set(key,value); }
  return url.toString();
}
