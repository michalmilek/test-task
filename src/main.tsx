import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";

import SuspenseApp from "./App.tsx";
import theme from "./theme/theme.ts";
import "./i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <SuspenseApp />
  </React.StrictMode>
);
