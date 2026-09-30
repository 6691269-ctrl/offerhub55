"use client";

import { useEffect, useMemo, useState } from "react";
import type { Offer } from "@/data/offers";

type Props = {
  offers: Offer[];
};

const categoryButtons = [
  { value: "Все", label: "Все" },
  { value: "Кредитные карты", label: "Кредитные карты" },
  { value: "Дебетовые карты", label: "Дебетовые карты" },
  { value: "РКО", label: "РКО" },
  { value: "Регистрация бизнеса", label: "Бизнес" },
  { value: "Займы", label: "Займы" },
];

const marks: Record<string, string> = {
  "Т-Банк": "Т",
  "Альфа-Банк": "A",
  "Ozon Банк": "O",
  "ВТБ": "ВТБ",
  "ПСБ": "ПСБ",
  "ОТП Банк": "OTP",
  "Совкомбанк": "Х",
  "Уралсиб": "У",
  "МТС Банк": "МТС",
  "Сбер": "С",
  "БСПБ": "БСПБ",
  "РСХБ": "РСХБ",
  "Ак Барс": "АБ",
  "УБРиР": "УБ",
  "Ренессанс": "Р",
  "Ингосстрах": "И",
  "Точка": "Т",
  "Яндекс": "Я",
  "URBAN CARD": "UC",
  "MoneyMan": "MM",
  "Webbankir": "WB",
  "Credit7": "C7",
  "FastMoney": "FM",
  "MaxКредит": "MK",
  "Белка": "Б",
  "Bunny Money": "BM",
};

function bankMark(name: string) {
  return marks[name] ?? name.slice(0, 2).toUpperCase();
}

export function HomeClient({ offers }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Все");
  const [selected, setSelected] = useState<Offer | null>(null);

  const filteredOffers = useMemo(() => {
    const q = query.trim().toLowerCase();

    return offers.filter((offer) => {
      const matchesCategory =
        category === "Все" || offer.category === category;

      const haystack = [
        offer.title,
        offer.subtitle,
        offer.description,
        offer.bankName,
        offer.category,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!q || haystack.includes(q));
    });
  }, [offers, query, category]);

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="support">
        Поддержка · Telegram:{" "}
        <a
          href="https://t.me/AurenTo77"
          target="_blank"
          rel="noopener noreferrer"
        >
          @AurenTo77
        </a>
      </div>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="badge">ФИНАНСОВАЯ ВИТРИНА</div>
            <h1>Финансовые предложения в одном месте</h1>
            <p>
              Банковские карты, РКО, регистрация бизнеса и займы. Нажмите на
              категорию или предложение, чтобы перейти по партнёрской ссылке.
            </p>
          </div>

          <div className="statbox">
            <div className="stat">{filteredOffers.length}</div>
            <div className="small">предложений в каталоге</div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="controls">
          <div className="controls-in">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Поиск банка или продукта..."
              aria-label="Поиск банка или продукта"
            />

            {categoryButtons.map((item) => (
              <button
                key={item.value}
                type="button"
                className={category === item.value ? "active" : ""}
                onClick={() => setCategory(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid">
          {filteredOffers.map((offer) => (
            <article
              key={offer.id}
              className="card"
              onClick={() => setSelected(offer)}
            >
              <div className={`bank-banner ${offer.brandClass}`}>
                <img
                  className="bank-real-logo"
                  src={offer.logo}
                  alt=""
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <div className="bank-mark">{bankMark(offer.bankName)}</div>
                <div>
                  <div className="bank-name">{offer.bankName}</div>
                  <div className="bank-sub">Банковское предложение</div>
                </div>
              </div>

              <span className="badge">
                {offer.category === "Регистрация бизнеса"
                  ? "Бизнес"
                  : offer.category}
              </span>

              <h3>{offer.title}</h3>

              <ul className="criteria">
                {offer.benefits.map((benefit, index) => (
                  <li key={`${offer.id}-${index}`}>{benefit}</li>
                ))}
              </ul>

              <div className="age">{offer.age || "Возраст: 18+"}</div>

              <div className="bottom">
                <a
                  className="cta"
                  href={offer.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  {offer.buttonText} →
                </a>
              </div>
            </article>
          ))}

          {filteredOffers.length === 0 && (
            <div className="empty">Ничего не найдено.</div>
          )}
        </div>
      </div>

      {selected && (
        <div
          className="detail-backdrop open"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <div
            className="detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="detailTitle"
          >
            <div className="detail-head">
              <div>
                <div className="detail-bank">
                  <img
                    className="detail-logo"
                    src={selected.logo}
                    alt=""
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                  <div>
                    <div className="detail-cat">
                      {selected.category === "Регистрация бизнеса"
                        ? "Бизнес"
                        : selected.category}
                    </div>
                    <h2 id="detailTitle">{selected.title}</h2>
                  </div>
                </div>

                <ul className="detail-list">
                  {selected.benefits.map((benefit, index) => (
                    <li key={`${selected.id}-detail-${index}`}>{benefit}</li>
                  ))}
                </ul>

                <div className="detail-age">
                  {selected.age || "Возраст: 18+"}
                </div>

                <a
                  className="detail-action"
                  href={selected.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selected.buttonText}
                </a>

                <div className="mobile-note">
                  Переход откроется на сайте банка или партнёрской площадке.
                </div>
              </div>

              <button
                className="detail-close"
                type="button"
                aria-label="Закрыть"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
