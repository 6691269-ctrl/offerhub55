import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-gray-500 sm:px-6 lg:px-8">
        <div>© {new Date().getFullYear()} OfferHub</div>

        <div className="flex gap-4">
          <Link href="/privacy">Политика конфиденциальности</Link>
          <Link href="/terms">Условия</Link>
        </div>
      </div>
    </footer>
  );
}