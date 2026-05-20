import Link from 'next/link';

/**
 * Home page — simple landing that directs visitors to get the app.
 * Will be replaced with a full marketing page in Phase 7.8.
 */
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Logo mark */}
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#6C3FC5]">
        <span className="text-4xl font-extrabold text-white">M</span>
      </div>

      <h1 className="mb-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
        MyCards
      </h1>
      <p className="mb-8 max-w-md text-lg text-gray-400">
        Your story, card by card. Create beautiful, shareable digital card decks
        that tell your story.
      </p>

      {/* App download CTAs — placeholder links until store listings are live */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href="#"
          className="rounded-full bg-[#6C3FC5] px-8 py-3 font-semibold text-white transition hover:bg-[#5A33A3]"
        >
          Download for iOS
        </a>
        <a
          href="#"
          className="rounded-full border border-gray-600 px-8 py-3 font-semibold text-gray-200 transition hover:border-gray-400 hover:text-white"
        >
          Download for Android
        </a>
      </div>

      <p className="mt-12 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} MyCards. All rights reserved.
      </p>
    </main>
  );
}
