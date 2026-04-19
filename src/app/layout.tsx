import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Open Research Studio · Kookmin",
  description:
    "A project-based studio for HCI, UX, interaction design, and physical AI at Kookmin University.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Open Research Studio",
    description:
      "Participate, make, research, experiment, grow. A project-based studio at Kookmin.",
    url: "https://openstudio.kookmin.vercel.app",
    siteName: "ORS",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ors-paper text-ors-ink font-sans">{children}</body>
    </html>
  )
}
