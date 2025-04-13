"use client";

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";
import Hydration from "./HydrationProvider";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider enableSystem defaultTheme="system" {...props}>
      <Hydration>{children}</Hydration>
    </NextThemesProvider>
  );
};

export default ThemeProvider;
