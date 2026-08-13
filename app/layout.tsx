import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "http://localhost:3000",
  ),
  title: "My Orders | Lenskart",
  description: "Track and view the details of your Lenskart order.",
  openGraph: {
    title: "My Order #1348342058",
    description: "Meller Binti All Black — arriving at store by 19 Aug.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Lenskart order summary" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Order #1348342058",
    description: "Meller Binti All Black — arriving at store by 19 Aug.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
