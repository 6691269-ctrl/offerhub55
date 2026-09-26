type Props = {
  offer: {
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
  };
  affiliateUrl: string;
};

export function OfferHero({ offer, affiliateUrl }: Props) {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {offer.image && (
        <img
          src={offer.image}
          alt={offer.title}
          className="h-56 w-full object-cover sm:h-72"
        />
      )}

      <div className="p-6 sm:p-8">
        <h1 className="text-3xl font-bold">{offer.title}</h1>

        {offer.subtitle && (
          <p className="mt-2 text-lg text-gray-600">{offer.subtitle}</p>
        )}

        {offer.description && (
          <p className="mt-4 text-gray-600">{offer.description}</p>
        )}

        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-xl bg-black px-6 py-3 font-medium text-white"
        >
          Перейти к оформлению
        </a>
      </div>
    </section>
  );
}