'use client';

import { useState, useEffect } from 'react';

/**
 * Sticky bottom banner prompting visitors to download the app.
 * Dismissible - stays hidden for the session once closed.
 * Detects platform to show the right store link.
 */
export function GetAppBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [platform, setPlatform] = useState<'ios' | 'android' | 'other'>('other');

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) {
      setPlatform('ios');
    } else if (/android/.test(ua)) {
      setPlatform('android');
    }
  }, []);

  if (dismissed) return null;

  const storeUrl =
    platform === 'ios'
      ? 'https://apps.apple.com/app/mycards/id6742676498'
      : platform === 'android'
        ? 'https://play.google.com/store/apps/details?id=com.mycards.app'
        : 'https://apps.apple.com/app/mycards/id6742676498';

  const storeLabel =
    platform === 'android' ? 'Get on Google Play' : 'Get on App Store';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-800 bg-gray-950/95 px-4 py-3 backdrop-blur-md sm:py-4">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6C3FC5] shadow-lg shadow-[#6C3FC5]/20">
            <span className="text-lg font-extrabold text-white">M</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">MyCards</p>
            <p className="text-xs text-gray-400">Create your own card decks</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-[#6C3FC5] px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-[#5A33A3]"
          >
            {platform === 'other' ? 'Get App' : storeLabel}
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
