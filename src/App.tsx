import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import { findRoute, notFound, routes } from "./routes";
import { applyMeta } from "./lib/seo";

function MetaSync() {
  const { pathname } = useLocation();
  useEffect(() => applyMeta(findRoute(pathname).meta), [pathname]);
  return null;
}

export default function App() {
  return (
    <Layout>
      <MetaSync />
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
        <Route path="*" element={notFound.element} />
      </Routes>
    </Layout>
  );
}
