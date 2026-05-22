export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Finance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track your startup&apos;s burn rate and runway
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your bank accounts, automate burn rate calculations, and get runway projections with funding milestone alerts — built for pre-Series A founders and CFOs.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {['Plaid Bank Integration', 'Burn Rate Automation', 'Runway Projections', 'Milestone Alerts'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$29</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#6e7681] text-sm mb-6">Everything you need to stay on top of your finances</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Plaid bank account sync',
              'Automated burn rate calculations',
              'Runway projections (3, 6, 12 mo)',
              'Funding milestone alerts',
              'CSV export & reports',
              'Email & Slack notifications',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#3fb950] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">How does bank account integration work?</h3>
            <p className="text-[#8b949e] text-sm">We use Plaid, the industry-standard financial data API trusted by thousands of apps. Connect your accounts securely in minutes — we only read transaction data, never move money.</p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">How is burn rate calculated?</h3>
            <p className="text-[#8b949e] text-sm">Burn rate is automatically calculated from your linked accounts using a rolling 3-month average of net cash outflows. You can adjust the window and exclude one-time expenses from the dashboard.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your account settings with no penalties. Your data remains accessible until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#6e7681] text-sm">
        &copy; {new Date().getFullYear()} Startup Funding Tracker. All rights reserved.
      </footer>
    </main>
  )
}
