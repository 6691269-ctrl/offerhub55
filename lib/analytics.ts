import type { Offer } from '@/data/offers';

export function trackOfferView(offer: Offer) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('offerhub:offer_view',{detail:{offerId:offer.id,slug:offer.slug}}));
}
export function trackOfferClick(offer: Offer) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('offerhub:offer_click',{detail:{offerId:offer.id,slug:offer.slug}}));
}
