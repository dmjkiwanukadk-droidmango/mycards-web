import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gray-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-violet">
              <span className="text-sm font-extrabold text-white">M</span>
            </div>
            <span className="text-sm font-semibold text-white">MyCards</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
            <Link href="/eula" className="transition hover:text-white">
              EULA
            </Link>
            <Link
              href="https://mycards.cards/changelog"
              className="transition hover:text-white"
            >
              Changelog
            </Link>
            <Link
              href="mailto:support@mycards.cards"
              className="transition hover:text-white"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-8 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} MyCards. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
