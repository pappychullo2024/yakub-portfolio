import Navbar from "@/src/components/Navbar";
import "./globals.css";
import Footer from "@/src/components/Footer";

export const metadata = {
  title: "Yakub Ojoawo | Frontend Engineer",
  description:
    "Frontend Engineer specializing in React, Next.js, and modern web technologies. Building scalable, high-performance web and AI-powered applications.",
  openGraph: {
    title: "Yakub Ojoawo | Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, and modern web technologies.",
    url: "https://yakub-portfolio.vercel.app", // temporary
    siteName: "Yakub Ojoawo",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Yakub Ojoawo Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
