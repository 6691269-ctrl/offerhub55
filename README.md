# OfferHub

Production-ready Next.js витрина партнёрских офферов. Офферы отделены от UI: для добавления нового предложения достаточно изменить `data/offers.ts` и добавить изображения в `public/images/`.

## Установка

```bash
npm install
```

## Локальный запуск

```bash
npm run dev
```

Откройте `http://localhost:3000`.

## Проверка production

```bash
npm run lint
npm run build
npm start
```

## Как добавить оффер

1. Добавьте объект `Offer` в `data/offers.ts`.
2. Укажите уникальные `id` и `slug`.
3. Добавьте `logo` и `image` в `public/images/`.
4. Укажите `affiliateUrl`. Для production используйте вашу реальную партнёрскую ссылку; в репозитории-примере используется `https://example.com/affiliate`.
5. Никакие компоненты или страницы менять не нужно. Категория появится автоматически.

## Изображения

Пути задаются только в данных:

```ts
logo: '/images/my-logo.svg',
image: '/images/my-banner.webp',
```

Для растровых изображений Next/Image оптимизирует выдачу автоматически. SVG-заглушки из примера можно заменить своими файлами.

## Affiliate URL и UTM

Компоненты не знают о партнёрских URL. Они получают готовый URL из `lib/affiliate.ts`. Функция `buildAffiliateUrl()` переносит только `utm_source`, `utm_medium` и `utm_campaign`.

## Аналитика

`lib/analytics.ts` содержит `trackOfferView()` и `trackOfferClick()`. Сейчас они создают браузерные события без реальных ID. Это место для подключения Google Analytics, Яндекс Метрики или Meta Pixel.

## Environment variables

В текущей версии реальные environment variables не требуются. При подключении аналитики добавляйте публичные ID через `NEXT_PUBLIC_*` и не помещайте секреты в клиентский код.

## SEO

Есть metadata, Open Graph, Twitter Card, canonical, robots, sitemap и динамические metadata для страниц офферов.

> Перед публичным запуском замените `https://example.com` в `app/layout.tsx`, `app/sitemap.ts` и `app/robots.ts` на реальный домен и опубликуйте юридически проверенные тексты `/privacy` и `/terms`.

## Деплой

Проект готов для деплоя на Vercel или любой платформе, поддерживающей Next.js:

```bash
npm install
npm run build
npm start
```
