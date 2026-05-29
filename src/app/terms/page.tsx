import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalHeader } from '../../components/LegalHeader';
import { Footer } from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service — MyCards',
  description: 'Terms and conditions governing your use of the MyCards platform.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <LegalHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-2 text-3xl font-bold">Terms of Service</h1>
        <p className="mb-10 text-sm text-gray-500">
          Last updated: May 21, 2026
        </p>

        <div className="prose-legal">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
            MyCards mobile application and website at mycards.cards (collectively, the
            &ldquo;Service&rdquo;), operated by MyCards (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;). By creating an account or using the Service, you agree to be
            bound by these Terms. If you do not agree, do not use the Service.
          </p>

          <h2>1. Eligibility</h2>
          <p>
            You must be at least 13 years old (or the minimum age required in your
            jurisdiction) to use the Service. By using the Service, you represent that you
            meet this requirement.
          </p>

          <h2>2. Your Account</h2>
          <p>
            You are responsible for maintaining the security of your account credentials and
            for all activity that occurs under your account. You agree to notify us
            immediately at{' '}
            <a href="mailto:support@mycards.cards">support@mycards.cards</a> if you suspect
            unauthorized access.
          </p>
          <p>
            Each person may maintain only one account. We reserve the right to suspend or
            terminate accounts that violate these Terms.
          </p>

          <h2>3. Your Content</h2>
          <h3>3.1 Ownership</h3>
          <p>
            You retain ownership of all content you create or upload to the Service
            (text, images, videos, audio, links). By posting content, you grant us a
            worldwide, non-exclusive, royalty-free license to host, display, reproduce, and
            distribute your content solely for the purpose of operating and providing the
            Service.
          </p>

          <h3>3.2 Responsibility</h3>
          <p>
            You are solely responsible for your content. You represent that you have the
            right to share any content you upload and that it does not infringe any third
            party&apos;s intellectual property, privacy, or other rights.
          </p>

          <h3>3.3 Content Removal</h3>
          <p>
            We reserve the right to remove content that violates these Terms or that we
            reasonably believe is harmful, without prior notice. You may delete your own
            content at any time through the app.
          </p>

          <h2>4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful purpose.</li>
            <li>
              Upload content that is defamatory, obscene, threatening, or that promotes
              violence or discrimination.
            </li>
            <li>
              Impersonate another person or misrepresent your identity or affiliation.
            </li>
            <li>
              Attempt to access other users&apos; accounts or data without authorization.
            </li>
            <li>
              Interfere with or disrupt the Service, servers, or networks connected to the
              Service.
            </li>
            <li>
              Use automated means (bots, scrapers) to access the Service without our written
              permission.
            </li>
            <li>
              Circumvent any usage limits, security measures, or access controls.
            </li>
          </ul>

          <h2>5. Subscriptions and Payments</h2>
          <p>
            The Service offers a free tier with limited features and a premium tier with
            expanded capabilities. Premium features, pricing, and payment terms are
            presented in the app at the time of purchase. All purchases are processed
            through the applicable app store (Apple App Store or Google Play) and are
            subject to their terms and refund policies.
          </p>

          <h2>6. Privacy</h2>
          <p>
            Your use of the Service is also governed by our{' '}
            <Link href="/privacy" className="text-brand-violet-light underline">
              Privacy Policy
            </Link>
            , which explains how we collect, use, and protect your information.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            The Service, including its design, logos, code, and documentation, is owned by
            MyCards and protected by intellectual property laws. These Terms do not grant you
            any right to use our branding or trademarks without written permission.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>
            The Service may contain links to or integrations with third-party websites and
            services. We are not responsible for the content, privacy practices, or terms of
            any third-party services.
          </p>

          <h2>9. Disclaimers</h2>
          <p>
            THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
            WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,
            ERROR-FREE, OR SECURE.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, MYCARDS SHALL NOT BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS
            OF PROFITS OR DATA, ARISING FROM YOUR USE OF THE SERVICE, EVEN IF WE HAVE BEEN
            ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED
            THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless MyCards and its affiliates from any
            claims, damages, losses, or expenses (including reasonable legal fees) arising
            from your use of the Service, your content, or your violation of these Terms.
          </p>

          <h2>12. Termination</h2>
          <p>
            You may stop using the Service and delete your account at any time from Settings
            &gt; Delete All My Data. We may suspend or terminate your access if you violate
            these Terms or engage in conduct that we reasonably believe is harmful to the
            Service or other users.
          </p>

          <h2>13. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of material
            changes by posting the updated Terms on this page and updating the &ldquo;Last
            updated&rdquo; date. Continued use of the Service after changes constitutes
            acceptance of the updated Terms.
          </p>

          <h2>14. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with applicable law. Any
            disputes arising from these Terms or the Service shall be resolved through good
            faith negotiation, and if necessary, binding arbitration.
          </p>

          <h2>15. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at:{' '}
            <a href="mailto:support@mycards.cards">support@mycards.cards</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
