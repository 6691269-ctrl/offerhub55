"use client";

import { useEffect } from "react";

type Props = {
  offer: {
    slug: string;
    title: string;
  };
};

export function OfferViewTracker({ offer }: Props) {
  useEffect(() => {
    console.log("Offer viewed:", offer.slug);
  }, [offer.slug]);

  return null;
}