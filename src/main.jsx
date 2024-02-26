import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./routes/index.jsx";
import "@radix-ui/themes/styles.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <Router />
    </MantineProvider>
  </React.StrictMode>
);
