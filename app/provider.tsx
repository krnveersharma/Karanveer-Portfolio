"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  console.log("Current theme props:", props); 
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
 