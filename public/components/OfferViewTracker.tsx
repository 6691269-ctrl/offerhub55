'use client'; import {useEffect} from 'react'; import type {Offer} from '@/data/offers'; import {trackOfferView} from '@/lib/analytics';
export function OfferViewTracker({offer}:{offer:Offer}){useEffect(()=>{trackOfferView(offer)},[offer]); return null;}
