import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/providers/ContextProvider";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${inter.className} select-none overflow-x-hidden antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <ContextProvider>{children}</ContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
