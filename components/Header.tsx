import Link from "next/link";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold">
          OfferHub
        </Link>

        <nav className="flex gap-5 text-sm">
          <Link href="/">Главная</Link>
          <Link href="/about">О нас</Link>
          <Link href="/privacy">Конфиденциальность</Link>
        </nav>
      </div>
    </header>
  );
}
