"use client"

import { motion } from "framer-motion"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-gray-200">
      <main className="max-w-3xl mx-auto px-6 py-16 leading-relaxed">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Privacy Policy
        </motion.h1>
        <p className="text-sm text-gray-400 mb-10">
          Last updated: August 26, 2025
        </p>

        {/* Card-style sections */}
        <section className="bg-zinc-900/50 backdrop-blur-md rounded-2xl p-6 shadow-lg mb-8">
          <p>
            At <strong>Neatify</strong>, your privacy is important to us. This
            Privacy Policy explains what information we collect, how we use it,
            and your rights regarding your personal data.
          </p>
        </section>

        <Section title="Information We Collect">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Email address</strong> – used to create and manage your
              account.
            </li>
            <li>
              <strong>Display name</strong> – shown in the app to personalize
              your experience.
            </li>
            <li>
              <strong>Profile avatar</strong> – displayed as part of your
              profile.
            </li>
          </ul>
          <p className="mt-4">
            This data is collected only when you sign in using{" "}
            <strong>Google</strong> or <strong>Discord</strong>.
          </p>
        </Section>

        <Section title="How We Use Your Data">
          <ul className="list-disc pl-6 space-y-2">
            <li>To create and manage your Neatify account.</li>
            <li>To display your name and avatar in the app.</li>
            <li>To ensure security and improve reliability.</li>
            <li>To provide support and essential service updates.</li>
          </ul>
        </Section>

        <Section title="What We Don’t Do">
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not sell or share your personal information.</li>
            <li>We do not post anything to your Google or Discord accounts.</li>
            <li>We do not collect extra personal data without your consent.</li>
          </ul>
        </Section>

        <Section title="Your Rights">
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the data we hold about you.</li>
            <li>Request correction or deletion of your data.</li>
            <li>
              Revoke Neatify’s access from Google or Discord settings at any
              time.
            </li>
          </ul>
          <p className="mt-4">
            To exercise your rights, email{" "}
            <a
              href="mailto:dy3239073@gmail.com"
              className="text-purple-400 hover:text-pink-400 transition-colors"
            >
              dy3239073@gmail.com
            </a>
            .
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this Privacy Policy occasionally. If changes are
            significant, we’ll notify you within the app or by email.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            Have questions? Reach us at{" "}
            <a
              href="mailto:dy3239073@gmail.com"
              className="text-purple-400 hover:text-pink-400 transition-colors"
            >
              dy3239073@gmail.com
            </a>
            .
          </p>
        </Section>
      </main>
    </div>
  )
}

/* Reusable section wrapper */
function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-zinc-900/50 backdrop-blur-md rounded-2xl p-6 shadow-lg mb-8"
    >
      <h2 className="text-2xl font-semibold mb-4 text-white">{title}</h2>
      {children}
    </motion.section>
  )
}
