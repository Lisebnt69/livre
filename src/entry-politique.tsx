import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import { initCookieConsent } from "./lib/cookieConsent";

initCookieConsent();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <PolitiqueConfidentialite />
    </Layout>
  </React.StrictMode>
);