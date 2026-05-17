import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "./styles/global.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  once: false,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
