import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MyCards — Your Story, Card by Card',
  description:
    'Create beautiful, shareable digital card decks that tell your story. Professional networking reimagined.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mycards.cards'),
  openGraph: {
    title: 'MyCards — Your Story, Card by Card',
    description:
      'Create beautiful, shareable digital card decks that tell your story.',
    siteName: 'MyCards',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-gray-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
