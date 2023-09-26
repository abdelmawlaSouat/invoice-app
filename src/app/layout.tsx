import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.scss";
import "normalize.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice App",
  description: "This app is a simple invoice app built with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-BE">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
