export interface Offer {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  logo: string;
  image: string;
  benefits: string[];
  buttonText: string;
  affiliateUrl: string;
  featured?: boolean;
  badge?: string;
  disclaimer?: string;
}

export const offers: Offer[] = [
  {
    id: "alfa-business",
    slug: "alfa-business",
    title: "Альфа-Бизнес",
    subtitle: "Регистрация бизнеса",
    description: "Регистрация ИП или ООО онлайн.",
    category: "Бизнес",
    logo: logo: "/images/Alpha Logo.svg",,
    image: image: "/images/Alpha Business.svg",,
    benefits: [
      "Регистрация бизнеса онлайн",
      "Помощь с оформлением",
      "Онлайн-подача документов",
      "Удобное оформление",
    ],
    buttonText: "Подробнее",
    affiliateUrl: "https://example.com/affiliate",
    featured: true,
    badge: "Популярное",
  },
  {
    id: "business-services",
    slug: "business-services",
    title: "Сервис для бизнеса",
    subtitle: "Инструменты для предпринимателей",
    description: "Подбор продуктов и сервисов для бизнеса.",
    category: "Сервисы",
    logo: logo: "/images/Service Logo.svg",,
    image: image: "/images/Service Banner.svg",,
    benefits: [
      "Единый интерфейс",
      "Полезные инструменты",
      "Онлайн-доступ",
    ],
    buttonText: "Подробнее",
    affiliateUrl: "https://example.com/affiliate",
  },
];

export const categories = Array.from(
  new Set(offers.map((offer) => offer.category))
).sort((a, b) => a.localeCompare(b, "ru"));
