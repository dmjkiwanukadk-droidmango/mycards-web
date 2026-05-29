import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalHeader } from '../../components/LegalHeader';
import { Footer } from '../../components/Footer';

export const metadata: Metadata = {
  title: 'End User License Agreement — MyCards',
  description:
    'End User License Agreement governing your use of the MyCards application.',
};

export default function EulaPage() {
  return (
    <>
      <LegalHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-2 text-3xl font-bold">
          End User License Agreement
        </h1>
        <p className="mb-10 text-sm text-gray-500">
          Last updated: May 25, 2026
        </p>

        <div className="prose-legal">
          <p>
            This End User License Agreement (&ldquo;EULA&rdquo;) is a legal
            agreement between you (&ldquo;you&rdquo; or &ldquo;User&rdquo;) and
            MyCards (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            for the use of the MyCards mobile application and any related
            services (collectively, the &ldquo;Application&rdquo;). By
            downloading, installing, or using the Application, you agree to be
            bound by this EULA. If you do not agree, do not install or use the
            Application.
          </p>

          <h2>1. License Grant</h2>
          <p>
            Subject to the terms of this EULA, we grant you a limited,
            non-exclusive, non-transferable, revocable license to download,
            install, and use the Application on a device that you own or
            control, solely for your personal, non-commercial purposes.
          </p>

          <h2>2. License Restrictions</h2>
          <p>You agree that you will not:</p>
          <ul>
            <li>
              Copy, modify, adapt, translate, reverse engineer, decompile,
              disassemble, or create derivative works based on the Application.
            </li>
            <li>
              Distribute, sublicense, lease, rent, lend, or otherwise transfer
              the Application or any rights therein to any third party.
            </li>
            <li>
              Remove, alter, or obscure any copyright, trademark, or other
              proprietary notices contained in the Application.
            </li>
            <li>
              Use the Application for any unlawful purpose or in any manner that
              could damage, disable, overburden, or impair our servers or
              networks.
            </li>
            <li>
              Use automated systems, bots, or scripts to interact with the
              Application without our prior written consent.
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the Application
              or its related systems or networks.
            </li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            The Application, including all content, features, functionality,
            design, graphics, logos, icons, and code, is owned by MyCards and is
            protected by copyright, trademark, and other intellectual property
            laws. This EULA does not grant you any ownership interest in the
            Application; it only grants a limited license to use the Application
            as described herein.
          </p>

          <h2>4. User Content</h2>
          <p>
            You retain all rights to content you create within the Application,
            including card decks, text, images, and other media. By using the
            Application, you grant us a limited license to host, display, and
            transmit your content solely for the purpose of providing the
            service to you and other users you choose to share with. For more
            details, see our{' '}
            <Link href="/terms" className="text-brand-violet-light underline">
              Terms of Service
            </Link>
            .
          </p>

          <h2>5. Subscriptions and In-App Purchases</h2>
          <p>
            The Application may offer premium features through subscription
            plans or in-app purchases. All payments are processed through the
            Apple App Store or Google Play Store, and are subject to the
            respective store&apos;s terms and refund policies. Prices and
            features are presented within the Application at the time of
            purchase. We reserve the right to change pricing with reasonable
            notice.
          </p>

          <h2>6. Privacy</h2>
          <p>
            Your privacy is important to us. Our collection and use of your
            personal information is governed by our{' '}
            <Link
              href="/privacy"
              className="text-brand-violet-light underline"
            >
              Privacy Policy
            </Link>
            , which is incorporated into this EULA by reference.
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            The Application may integrate with or link to third-party services
            (such as authentication providers, analytics, and payment
            processors). Your use of such third-party services is subject to
            their respective terms and privacy policies. We are not responsible
            for the practices or content of any third-party services.
          </p>

          <h2>8. Updates and Changes</h2>
          <p>
            We may release updates, patches, or new versions of the Application
            from time to time. These updates may be required for continued use
            of the Application and may be downloaded and installed automatically
            depending on your device settings. We may also modify or discontinue
            features of the Application at our discretion with reasonable
            notice.
          </p>

          <h2>9. Disclaimer of Warranties</h2>
          <p>
            THE APPLICATION IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
            AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APPLICATION WILL BE
            UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER
            HARMFUL COMPONENTS.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
            SHALL MYCARDS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO
            LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
            ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE
            THE APPLICATION. OUR TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE
            AMOUNT YOU PAID US FOR THE APPLICATION IN THE 12 MONTHS PRECEDING
            THE CLAIM.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless MyCards and its
            officers, directors, employees, and agents from any claims,
            liabilities, damages, losses, and expenses (including reasonable
            attorneys&apos; fees) arising out of or in connection with your use
            of the Application, your violation of this EULA, or your violation
            of any rights of another.
          </p>

          <h2>12. Termination</h2>
          <p>
            This EULA is effective until terminated. We may terminate this
            license at any time if you fail to comply with any of its terms. Upon
            termination, you must cease all use of the Application and delete
            all copies from your devices. You may terminate this EULA at any
            time by deleting the Application from your devices and, if
            applicable, deleting your account through Settings.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            This EULA shall be governed by and construed in accordance with
            applicable law, without regard to conflict of law principles. Any
            disputes arising under this EULA shall be resolved through good
            faith negotiation, and if necessary, binding arbitration.
          </p>

          <h2>14. Severability</h2>
          <p>
            If any provision of this EULA is held to be unenforceable or
            invalid, that provision will be limited or eliminated to the minimum
            extent necessary, and the remaining provisions of this EULA will
            remain in full force and effect.
          </p>

          <h2>15. Entire Agreement</h2>
          <p>
            This EULA, together with our{' '}
            <Link href="/terms" className="text-brand-violet-light underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="text-brand-violet-light underline"
            >
              Privacy Policy
            </Link>
            , constitutes the entire agreement between you and MyCards regarding
            the Application and supersedes all prior agreements and
            understandings.
          </p>

          <h2>16. Contact Us</h2>
          <p>
            If you have questions about this EULA, please contact us at:{' '}
            <a href="mailto:support@mycards.cards">support@mycards.cards</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
