import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import "./globals.css";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} relative min-h-screen select-none overflow-hidden text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
