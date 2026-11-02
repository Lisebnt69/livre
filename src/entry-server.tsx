import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { headTags } from "./lib/seo";
import { findRoute, notFound, routes } from "./routes";
import { abs } from "./data/site";

export function render(path: string) {
  return renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>
  );
}

export { headTags, routes, notFound, findRoute, abs };
