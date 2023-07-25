import { extendTheme } from "@chakra-ui/react";

// 2. Update the breakpoints as key-value pairs
export const newTheme = extendTheme({
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "1020px",
    xl: "1200px",
    "2xl": "1536px",
  },
});

