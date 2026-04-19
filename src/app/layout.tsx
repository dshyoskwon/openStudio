import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import NewsSidebar from "@/components/NewsSidebar";

export const metadata: Metadata = {
  title: "ORS · Open Research Studio",
  description: "A project-based studio for HCI, UX, interaction design, and physical AI. Kookmin University, Seoul.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ORS · Open Research Studio",
    description: "Participate, make, research, experiment, grow.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col md:flex-row bg-ors-paper text-ors-ink font-sans antialiased">
        {/* Left: Navigation */}
        <header className="w-full md:w-56 flex-shrink-0 p-6 md:h-screen md:sticky md:top-0 border-b md:border-b-0 md:border-r border-gray-100">
          <Navigation />
        </header>

        {/* Center: Main Content */}
        <main className="flex-1 min-w-0 p-8 md:p-12 lg:p-16 overflow-x-hidden"> {/* overflow 추가하여 가로 스크롤 방지 */}
          {/* max-w-3xl 제한을 풀고 더 넓게 설정 (예: max-w-7xl 또는 제한 없음) */}
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>

        {/* Right: News */}
        <aside className="w-full md:w-72 flex-shrink-0 p-8 md:h-screen md:sticky md:top-0 border-t md:border-t-0 md:border-l border-gray-100 bg-gray-50 md:bg-white">
          <NewsSidebar />
        </aside>
      </body>
    </html>
  );
}
