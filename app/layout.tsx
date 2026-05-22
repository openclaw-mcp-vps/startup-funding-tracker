import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Startup Funding Tracker — Track Burn Rate & Runway',
  description: 'Track your startup burn rate, runway projections, and funding milestones. Built for pre-Series A founders and CFOs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="72eddbc0-32c7-4522-a40e-8cde222e11d3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
