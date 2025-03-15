import React, { ReactNode } from "react";

import Header from "@/components/Header";

// Define props for the layout component, adjusting based on Next.js expectations
interface RootLayoutProps {
  children: ReactNode;
}

// The default layout component
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <React.StrictMode>
      <Header />
      <main>{children}</main>
    </React.StrictMode>
  );
};

export default RootLayout;
