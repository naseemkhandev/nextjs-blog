"use client";

import { ThemeProvider as Theme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <Theme attribute="class" enableSystem={false}>
      {children}
    </Theme>
  );
};

export default ThemeProvider;
