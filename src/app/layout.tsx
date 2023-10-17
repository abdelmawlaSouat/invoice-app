import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.scss";
import "normalize.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice App",
  description: "This app is a simple invoice app built with Next.js.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-BE">
      <body className={inter.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
