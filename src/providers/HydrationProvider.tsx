"use client";

import React, { useEffect, useState } from "react";

const Hydration: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server
  }

  return <>{children}</>;
};

export default Hydration;
