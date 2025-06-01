import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const bVietSans = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-sans",
  subsets: ["latin"],
  weight: "100",
});

export const metadata: Metadata = {
  title: "Kolkata's Top Coaching Institute for CA & Foundation",
  description:
    "ThoughtSpring: 36+ Years of Legacy - Kolkata's Top Coaching Institute for CA, JEE Main+Advanced, Olympiad, Class 8 to 12 and Other Competitive Exams. Join today and embark on a journey to academic excellence.",
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
      <body className={`${bVietSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
