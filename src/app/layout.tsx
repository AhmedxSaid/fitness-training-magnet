import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Challenge 7 أيام — مجاني باش تنقص 1-2kg 🇹🇳",
  description: "Challenge مجاني 7 أيام باش تنقص 1-2kg و تولّي consistent. Workouts ساهلين، guidance يومي على WhatsApp، tips تونسية على الماكلة.",
  keywords: ["challenge 7 أيام", "فيتنس تونس", "نزول وزن", "تحدي رياضي", "رجيم تونسي", "تحول جسم"],
  authors: [{ name: "7 Day Challenge" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Challenge 7 أيام — مجاني 🇹🇳",
    description: "Challenge مجاني 7 أيام باش تنقص 1-2kg و تولّي consistent.",
    url: "https://7daychallenge.tn",
    siteName: "7 Day Challenge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Challenge 7 أيام — مجاني 🇹🇳",
    description: "Challenge مجاني 7 أيام باش تنقص 1-2kg و تولّي consistent.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
