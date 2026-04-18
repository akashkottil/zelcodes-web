import type { Metadata } from "next";
import { MeshGradient } from "@/components/MeshGradient";
import { CONTACT_EMAIL, PATREON_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The rules of using Zelcodes — the showcase, the source code, and the relationship between you and us.",
  alternates: { canonical: "/terms" },
};

const UPDATED = "April 18, 2026";

export default function TermsPage() {
  return (
    <div className="relative">
      <MeshGradient intensity="soft" />
      <div className="relative mx-auto max-w-3xl px-4 pt-20 pb-24 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <span className="glass inline-flex rounded-full px-3 py-1 text-xs text-muted">
            Legal · Zelcodes
          </span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient">Terms of Service</span>
          </h1>
          <p className="mt-3 text-sm text-muted">Last updated {UPDATED}</p>
          <p className="mt-6 text-muted">
            The short version: browse the showcase freely, unlock the source on
            Patreon, use it in your apps, don’t redistribute the raw library.
          </p>
        </header>

        <article className="prose-legal mx-auto mt-14 max-w-2xl space-y-10">
          <Section title="1. Who we are">
            Zelcodes (“we”, “us”) is an independent library of SwiftUI
            animations created by Akash Kottil. This website is the public
            showcase; the source-code distribution happens via{" "}
            <a href={PATREON_URL} target="_blank" rel="noreferrer">
              Patreon
            </a>
            .
          </Section>

          <Section title="2. Agreement">
            By using this website you agree to these terms. If you don’t agree,
            you shouldn’t use the site or subscribe on Patreon.
          </Section>

          <Section title="3. The showcase is free">
            <ul>
              <li>
                Everything visible on this website (the animation previews,
                descriptions, blog posts, brand material) is free to view.
              </li>
              <li>
                You are welcome to share, link, reference, and discuss Zelcodes
                publicly.
              </li>
              <li>
                You may not scrape the site to rebuild a competing catalogue,
                republish the brand assets as your own, or falsely claim
                affiliation with Zelcodes.
              </li>
            </ul>
          </Section>

          <Section title="4. Patreon source code — your license">
            <p>
              When you subscribe to the Zelcodes Patreon tier, you receive a
              non-exclusive, non-transferable, worldwide licence to:
            </p>
            <ul>
              <li>
                <strong>Use the source code</strong> in unlimited personal and
                commercial apps, free or paid, on any Apple platform.
              </li>
              <li>
                <strong>Modify and adapt</strong> the code to fit your
                products.
              </li>
              <li>
                <strong>Keep your apps shipping</strong> even after your
                subscription ends — nothing stops working, no runtime key.
              </li>
            </ul>
            <p>You may not:</p>
            <ul>
              <li>
                Redistribute the raw source (or a recognisable derivative) as
                a library, tutorial, paid asset pack, or GitHub repo. The
                animations must be embedded inside your own product.
              </li>
              <li>
                Share your Patreon access, repository credentials, or
                downloaded files with non-subscribers.
              </li>
              <li>
                Use the Zelcodes name or brand marks to imply endorsement of
                your product.
              </li>
            </ul>
          </Section>

          <Section title="5. Subscriptions, billing and refunds">
            Subscriptions, billing, taxes, cancellations, and refunds are
            handled by Patreon under{" "}
            <a
              href="https://www.patreon.com/policy/legal"
              target="_blank"
              rel="noreferrer"
            >
              their terms
            </a>
            . We don’t process payments or store payment details ourselves.
            If you need a refund, please use Patreon’s standard refund flow;
            we’re happy to help mediate if something goes wrong.
          </Section>

          <Section title="6. Intellectual property">
            <p>
              All source code, animations, illustrations, logos, typography
              treatments, poster artwork and written content on Zelcodes are
              the intellectual property of Akash Kottil. Swift, SwiftUI, and
              Apple-related marks are property of Apple Inc. and are used here
              only for descriptive reference.
            </p>
          </Section>

          <Section title="7. No warranty">
            The code and animations are provided <strong>“as is”</strong>,
            without warranty of any kind. We do our best to test on real
            devices, but your app’s quality is ultimately your responsibility.
            We aren’t liable for bugs, regressions, App Store rejections, or
            any indirect or consequential damages arising from use of the
            library.
          </Section>

          <Section title="8. Limitation of liability">
            To the maximum extent allowed by law, the total liability of
            Zelcodes for any claim related to these terms or your use of the
            site is capped at the total fees you’ve paid us via Patreon in the
            12 months preceding the claim.
          </Section>

          <Section title="9. Termination">
            We may suspend or terminate your access to the Patreon repository
            if you materially breach these terms (for example, redistributing
            the source). You can cancel your subscription at any time via
            Patreon.
          </Section>

          <Section title="10. Changes to these terms">
            When these terms change in a meaningful way, we’ll update the
            “last updated” date and note the change in the next Patreon post.
            Continued use of the site or subscription after an update is taken
            as acceptance of the new terms.
          </Section>

          <Section title="11. Governing law">
            These terms are governed by the laws of India. Any dispute that
            can’t be worked out amicably will be subject to the exclusive
            jurisdiction of the courts in Kerala, India.
          </Section>

          <Section title="12. Contact">
            Questions about the licence, your subscription, or the terms? Get
            in touch at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
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
