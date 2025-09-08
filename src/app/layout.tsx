import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TODO app",
  description: "E-sensia TODO app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex items-center flex-col gap-5`}
      >
        <div className="font-semibold w-full text-2xl bg-blue-600 py-5 text-white flex items-center justify-center gap-5">
          <Image priority width={50} height={50} src="/logo-raccourci-theme-sombre.svg" alt="Esensia logo" />
          TODO APP
        </div>
        <div className="bg-white rounded-lg p-10">
          {children}
        </div>

      </body>
    </html>
  );
}
