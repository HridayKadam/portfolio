import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hriday kadam, entrepreneur, builder & operator",
  description:
    "Hriday Kadam is an entrepreneur, builder and operator. Ventures, products, growth, and experiments.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="plain-body antialiased">{children}</body>
    </html>
  );
}
