import { Footer } from '../components/Footer';

/* --- Data --- */
const STEPS = [
  {
    num: '01',
    title: 'Create Cards',
    desc: 'Design rich cards with text, images, video, and links. Each card captures one facet of who you are.',
  },
  {
    num: '02',
    title: 'Build Decks',
    desc: 'Group cards into themed decks — one for networking, another for dating, one just for you.',
  },
  {
    num: '03',
    title: 'Share Your Story',
    desc: 'Send a link or QR code. Anyone can view your deck in seconds — no app required.',
  },
];

const FEATURES = [
  {
    icon: '✦',
    title: 'Signature Card Flip',
    desc: 'Every card has a front and back with a smooth 3D flip animation. Put your best face forward, then reveal the details.',
  },
  {
    icon: '◈',
    title: '6 Deck Themes',
    desc: 'From Midnight Gold to Rose Blush — pick a theme that matches your vibe. Each one is crafted to feel premium.',
  },
  {
    icon: '◉',
    title: 'Private Decks',
    desc: 'Control who sees what. Set a deck to private and approve access requests one by one.',
  },
  {
    icon: '▣',
    title: 'Rich Content Blocks',
    desc: 'Text, images, video, audio, and links — up to 4 blocks per card. Say more in less space.',
  },
  {
    icon: '◎',
    title: 'Web Viewer',
    desc: "Recipients don\'t need to download anything. Your decks look beautiful in any browser.",
  },
  {
    icon: '⬡',
    title: 'Analytics',
    desc: 'See who viewed your decks and cards. Understand which parts of your story resonate.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'MyCards replaced my entire portfolio site. I just send people my deck link now.',
    name: 'Coming soon',
    role: 'Early tester',
  },
  {
    quote: 'The flip animation alone makes people stop and pay attention.',
    name: 'Coming soon',
    role: 'Early tester',
  },
  {
    quote: "Finally, a way to introduce myself that isn\'t a boring PDF or a cluttered LinkedIn.",
    name: 'Coming soon',
    role: 'Early tester',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(108,63,197,0.25),transparent)]" />

        <div className="relative z-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-violet shadow-lg shadow-brand-violet/20">
            <span className="text-3xl font-extrabold text-white">M</span>
          </div>

          <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Your story,{' '}
            <span className="bg-gradient-to-r from-brand-violet to-brand-violet-light bg-clip-text text-transparent">
              card by card
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-gray-400 sm:text-xl">
            Create beautiful digital card decks that capture who you are.
            Share them with anyone &mdash; no app needed to view.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-brand-violet px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand-violet/25 transition hover:bg-brand-violet-light hover:shadow-brand-violet-light/25"
            >
              <AppleIcon />
              Download for iOS
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 font-semibold text-gray-200 transition hover:border-white/30 hover:text-white"
            >
              <PlayIcon />
              Download for Android
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="h-8 w-5 rounded-full border-2 border-white/20 p-1">
            <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-white/40" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-brand-violet">
            How it works
          </p>
          <h2 className="mb-16 text-center text-3xl font-bold sm:text-4xl">
            Three steps to being understood
          </h2>

          <div className="grid gap-12 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-bold text-brand-violet-light">
                  {s.num}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-brand-violet">
            Features
          </p>
          <h2 className="mb-16 text-center text-3xl font-bold sm:text-4xl">
            Everything you need, nothing you don&apos;t
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-brand-violet/30 hover:bg-white/[0.04]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-violet/10 text-lg text-brand-violet-light">
                  {f.icon}
                </div>
                <h3 className="mb-2 font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP PREVIEW */}
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-violet">
            See it in action
          </p>
          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
            Designed to make an impression
          </h2>

          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
            {['Create', 'Flip', 'Share'].map((label) => (
              <div
                key={label}
                className="flex aspect-[9/16] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent"
              >
                <div className="text-center">
                  <div className="mb-2 text-3xl text-brand-violet-light">
                    {label === 'Create' ? '✦' : label === 'Flip' ? '◈' : '◎'}
                  </div>
                  <p className="text-sm font-medium text-gray-400">{label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-gray-600">
            App screenshots coming soon &mdash; real devices, real decks.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-brand-violet">
            What people are saying
          </p>
          <h2 className="mb-16 text-center text-3xl font-bold sm:text-4xl">
            Early reactions
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <p className="mb-4 text-sm italic leading-relaxed text-gray-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-medium text-gray-400">{t.name}</p>
                  <p className="text-xs text-gray-600">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to be{' '}
            <span className="bg-gradient-to-r from-brand-violet to-brand-violet-light bg-clip-text text-transparent">
              understood
            </span>
            ?
          </h2>
          <p className="mb-8 text-gray-400">
            Download MyCards and start building the decks that tell your story.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-brand-violet px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand-violet/25 transition hover:bg-brand-violet-light"
          >
            Get MyCards &mdash; It&apos;s Free
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

function AppleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.83.52-1.58 1.3-1.87.78-.29 1.67-.1 2.26.49L21 12l-14.44 9.88c-.59.59-1.48.78-2.26.49A1.99 1.99 0 013 20.5z" />
    </svg>
  );
}
