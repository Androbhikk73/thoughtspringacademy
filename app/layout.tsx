import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kolkata's Top Coaching Institute for CA & Foundation",
  description:
    "ThoughtSpring: 36+ Years of Legacy - Kolkata's Top Coaching Institute for CA, JEE Main+Advanced, Olympiad, Class 8 to 12 and Other Competitive Exams. Join today and embark on a journey to academic excellence.",
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0 , user-scalable=no",
  keywords:
    "NEET Coaching, JEE Coaching, JEE Advanced Coaching, Coaching for Class 8th, Coaching for Class 9th, Coaching for Class 10th, Coaching for class 11th, Coaching for Class 12th, Olympiad Coaching, Foundation Coaching, Top Coaching for NEET, Top Coaching, Coaching for CA, CA Coaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
