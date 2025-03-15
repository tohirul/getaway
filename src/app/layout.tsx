import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/providers/ContextProvider";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Getaway",
  description: "Travel and Tourism",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} select-none overflow-x-hidden text-white antialiased`}
      >
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
