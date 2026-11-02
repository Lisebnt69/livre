import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource-variable/archivo/standard.css";
import "@fontsource-variable/public-sans";
import "./index.css";
import App from "./App";
import { initCookieConsent } from "./lib/cookieConsent";

const el = document.getElementById("root")!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Page pré-rendue : on « hydrate » le HTML existant. Sinon (vite dev), rendu classique.
if (el.hasChildNodes()) hydrateRoot(el, app);
else createRoot(el).render(app);

void initCookieConsent();
