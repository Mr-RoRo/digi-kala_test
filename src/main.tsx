import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { newTheme } from "./data/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={newTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
