import Link from 'next/link';

export function LegalHeader() {
  return (
    <header className="border-b border-white/10 px-6 py-4">
      <div className="mx-auto flex max-w-3xl items-center gap-3">
        <Link href="/" className="flex items-center gap-2 transition hover:opacity-80">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-violet">
            <span className="text-sm font-extrabold text-white">M</span>
          </div>
          <span className="font-semibold text-white">MyCards</span>
        </Link>
      </div>
    </header>
  );
}
