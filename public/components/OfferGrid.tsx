import type {Offer} from '@/data/offers'; import {OfferCard} from './OfferCard'; import {EmptyState} from './EmptyState';
export function OfferGrid({offers}:{offers:Offer[]}){if(!offers.length)return <EmptyState/>; return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{offers.map(o=><OfferCard key={o.id} offer={o}/>)}</div>}
