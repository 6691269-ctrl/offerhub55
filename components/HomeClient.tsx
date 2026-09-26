"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { offers } from "@/data/offers";

export function HomeClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Все");

  const categories = useMemo(() => {
    const values = offers
      .map((offer: any) => offer.category)
      .filter(Boolean);
    return ["Все", ...Array.from(new Set(values))];
  }, []);

  const filteredOffers = offers.filter((offer: any) => {
    const text = `${offer.title ?? ""} ${offer.description ?? ""}`.toLowerCase();
    const matchesSearch = text.includes(query.toLowerCase());
    const matchesCategory =
      category === "Все" || offer.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Партнёрские предложения
          </h1>
          <p className="mt-2 text-gray-600">
            Выбирайте подходящее предложение и переходите к оформлению.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по предложениям..."
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 sm:max-w-md"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border px-4 py-3"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {filteredOffers.length === 0 ? (
          <div className="rounded-2xl border p-8 text-center text-gray-500">
            Ничего не найдено.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredOffers.map((offer: any) => (
              <article
                key={offer.slug}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm"
              >
                {offer.image && (
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="h-48 w-full object-cover"
                  />
                )}

                <div className="p-5">
                  <h2 className="text-xl font-semibold">{offer.title}</h2>

                  {offer.description && (
                    <p className="mt-2 text-sm text-gray-600">
                      {offer.description}
                    </p>
                  )}

                  {Array.isArray(offer.benefits) && (
                    <ul className="mt-4 space-y-2 text-sm">
                      {offer.benefits.map((benefit: string) => (
                        <li key={benefit}>✓ {benefit}</li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href={`/offer/${offer.slug}`}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-medium"
                  >
                    Подробнее
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}