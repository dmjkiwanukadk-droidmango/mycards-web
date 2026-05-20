'use client';

import { useState } from 'react';

/**
 * Sticky bottom banner prompting visitors to download the app.
 * Dismissible — stays hidden for the session once closed.
 */
export function GetAppBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-800 bg-gray-950/95 px-4 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Mini logo */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6C3FC5]">
            <span className="text-lg font-extrabold text-white">M</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Get the MyCards App</p>
            <p className="text-xs text-gray-400">Create your own card decks</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="rounded-full bg-[#6C3FC5] px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-[#5A33A3]"
          >
            Open
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 text-gray-500 transition hover:text-gray-300"
            aria-label="Dismiss"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M6 6l8 8M14 6l-8 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
