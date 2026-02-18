import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = "G-TT502FRSXG";

export default function AnalyticsPageView() {
  const location = useLocation();

  useEffect(() => {
    window.gtag?.("config", GA_ID, {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null;
}
