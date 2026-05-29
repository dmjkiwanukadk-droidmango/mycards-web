import type { Metadata } from 'next';
import { LegalHeader } from '../../components/LegalHeader';
import { Footer } from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — MyCards',
  description: 'How MyCards collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-2 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-10 text-sm text-gray-500">
          Last updated: May 21, 2026
        </p>

        <div className="prose-legal">
          <p>
            MyCards (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the MyCards
            mobile application and the website at mycards.cards (collectively, the
            &ldquo;Service&rdquo;). This Privacy Policy explains what information we collect, how we
            use it, and what choices you have.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>1.1 Account Information</h3>
          <p>
            When you create an account we collect your email address, display name,
            username, and optional profile image. Authentication is handled by Supabase
            Auth; we store a hashed credential &mdash; never your plaintext password.
          </p>

          <h3>1.2 Content You Create</h3>
          <p>
            Cards, decks, text blocks, images, videos, audio clips, and links you upload or
            enter are stored in our database and, for media files, in cloud storage buckets
            provided by Supabase Storage. This content is associated with your user ID.
          </p>

          <h3>1.3 Usage Data</h3>
          <p>
            We record deck views and card views (viewer identity, timestamp) to provide you
            with analytics on who engaged with your content. We also collect basic device
            and session metadata (platform, app version) to diagnose issues and improve the
            Service.
          </p>

          <h3>1.4 Notification Preferences</h3>
          <p>
            Your notification preference choices (e.g., access requests, deck views, new
            features) are stored locally on your device and are not transmitted to our
            servers.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve the Service.</li>
            <li>Display your profile, decks, and cards to people you share them with.</li>
            <li>Provide analytics on how your content is viewed.</li>
            <li>Process access requests for your private decks.</li>
            <li>Send transactional emails (e.g., password resets).</li>
            <li>Enforce our Terms of Service and protect against abuse.</li>
          </ul>

          <h2>3. How We Share Your Information</h2>
          <p>
            We do not sell your personal information. We share data only in these
            circumstances:
          </p>
          <ul>
            <li>
              <strong>Public content.</strong> Decks and cards you mark as public are viewable by
              anyone with the link, including through the web viewer at mycards.cards.
            </li>
            <li>
              <strong>Service providers.</strong> We use Supabase (database, auth, storage) and
              Vercel (web hosting). These providers process data on our behalf under their
              own privacy policies.
            </li>
            <li>
              <strong>Legal requirements.</strong> We may disclose information if required by law,
              subpoena, or legal process.
            </li>
          </ul>

          <h2>4. Data Storage and Security</h2>
          <p>
            Your data is stored on Supabase-managed infrastructure. We use Row-Level
            Security (RLS) policies to ensure each user can only access their own data
            unless explicitly shared. Media files are stored in private buckets with signed
            URLs. All connections use HTTPS/TLS encryption in transit.
          </p>

          <h2>5. Data Retention and Deletion</h2>
          <p>
            We retain your data for as long as your account is active. You can delete all
            your data at any time from Settings &gt; Delete All My Data, which permanently
            removes your profile, decks, cards, saved contacts, and associated media. After
            deletion, residual copies may remain in backups for up to 30 days before being
            purged.
          </p>

          <h2>6. Your Rights and Choices</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Correct inaccurate data.</li>
            <li>Request deletion of your data.</li>
            <li>Object to or restrict certain processing.</li>
            <li>Export your data in a portable format.</li>
          </ul>
          <p>
            To exercise these rights, contact us at{' '}
            <a href="mailto:support@mycards.cards">support@mycards.cards</a>.
          </p>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            The Service is not intended for users under 13 (or the applicable minimum age
            in your jurisdiction). We do not knowingly collect personal information from
            children. If you believe a child has provided us with personal data, please
            contact us and we will promptly delete it.
          </p>

          <h2>8. Cookies and Local Storage</h2>
          <p>
            The web viewer at mycards.cards uses essential cookies for session management
            only. The mobile app uses AsyncStorage for local preferences (theme, notification
            settings). We do not use tracking cookies or third-party analytics cookies.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            Cards may contain links to third-party websites or services. We are not
            responsible for the privacy practices of those third parties. We encourage you
            to review their privacy policies.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of
            material changes by posting the updated policy on this page and updating the
            &ldquo;Last updated&rdquo; date. Continued use of the Service after changes
            constitutes acceptance of the updated policy.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:support@mycards.cards">support@mycards.cards</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
