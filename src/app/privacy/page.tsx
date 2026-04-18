import type { Metadata } from "next";
import { MeshGradient } from "@/components/MeshGradient";
import { CONTACT_EMAIL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Zelcodes handles your data — straightforward, developer-friendly, and minimal.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "April 18, 2026";

export default function PrivacyPage() {
  return (
    <div className="relative">
      <MeshGradient intensity="soft" />
      <div className="relative mx-auto max-w-3xl px-4 pt-20 pb-24 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <span className="glass inline-flex rounded-full px-3 py-1 text-xs text-muted">
            Legal · Zelcodes
          </span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient">Privacy Policy</span>
          </h1>
          <p className="mt-3 text-sm text-muted">Last updated {UPDATED}</p>
          <p className="mt-6 text-muted">
            Zelcodes is a small, independent project. We keep this short because
            we collect almost nothing.
          </p>
        </header>

        <article className="prose-legal mx-auto mt-14 max-w-2xl space-y-10">
          <Section title="1. What Zelcodes is">
            Zelcodes (“the site”, “we”, “us”) is a marketing and showcase
            website for a library of SwiftUI animations. Full source code is
            distributed via third-party platforms (Patreon, GitHub) — not from
            this site directly.
          </Section>

          <Section title="2. What we collect on this website">
            <p>By itself, the Zelcodes marketing site collects:</p>
            <ul>
              <li>
                <strong>Nothing personally identifiable</strong> when you
                browse. No account system, no sign-up, no forms that store
                personal data.
              </li>
              <li>
                <strong>Anonymous, aggregated usage data</strong> (page views,
                referrers, approximate region) via privacy-respecting analytics
                if enabled. No cookies tied to your identity, no cross-site
                tracking, no fingerprinting.
              </li>
            </ul>
          </Section>

          <Section title="3. Cookies">
            The site sets <strong>only essential cookies</strong> required for
            theme preference (light / dark mode) to persist across visits.
            These cookies are stored locally in your browser and are never
            shared with us or any third party.
          </Section>

          <Section title="4. Third-party services">
            <p>
              Clicking certain links takes you to services operated by other
              companies. Those services have their own privacy policies and
              data practices, which we don’t control:
            </p>
            <ul>
              <li>
                <strong>Patreon</strong> — for subscriptions and access to
                animation source code.
              </li>
              <li>
                <strong>GitHub</strong> — for hosting code repositories.
              </li>
              <li>
                <strong>YouTube / X</strong> — for embedded demo videos and
                social posts.
              </li>
            </ul>
            <p>
              When you follow those links, you are handing your session off to
              those providers. Please review their privacy policies for how
              they handle your data.
            </p>
          </Section>

          <Section title="5. Your rights">
            <p>
              If Zelcodes does hold any data about you (e.g., email from a
              direct support inquiry), you have the right to:
            </p>
            <ul>
              <li>Access, correct, or delete any data we hold about you.</li>
              <li>Withdraw consent for any optional processing.</li>
              <li>
                File a complaint with a supervisory authority if you think
                we’ve mishandled your data.
              </li>
            </ul>
            <p>
              To exercise any of these rights, email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </Section>

          <Section title="6. Data we’ll never do">
            <ul>
              <li>Sell your data to anyone.</li>
              <li>
                Run ad networks, retargeting pixels, or third-party trackers.
              </li>
              <li>
                Use dark patterns to trick you into a subscription you didn’t
                intend.
              </li>
            </ul>
          </Section>

          <Section title="7. Changes to this policy">
            We’ll update the “last updated” date at the top of this page if we
            meaningfully change anything. For significant changes, we’ll also
            mention it in the next newsletter on Patreon.
          </Section>

          <Section title="8. Contact">
            Questions, concerns, or data requests? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We read
            everything.
          </Section>
        </article>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
