import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-800">
        <span className="text-3xl">?</span>
      </div>
      <h1 className="mb-2 text-2xl font-bold text-white">Not Found</h1>
      <p className="mb-8 max-w-sm text-gray-400">
        This deck, card, or profile doesn&apos;t exist or may be private.
      </p>
      <Link
        href="/"
        className="rounded-full bg-[#6C3FC5] px-6 py-2.5 font-semibold text-white transition hover:bg-[#5A33A3]"
      >
        Go to MyCards
      </Link>
    </main>
  );
}
