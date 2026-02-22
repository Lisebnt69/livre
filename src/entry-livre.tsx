import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout";
import Livre from "./pages/Livre";
import { initCookieConsent } from "./lib/cookieConsent";

initCookieConsent();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <Livre />
    </Layout>
  </React.StrictMode>
);