import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./lib/layout/root-layout";
import { HomePage } from "./routes/home";
import { AboutPage } from "./routes/about";
import { NoMatchPage } from "./routes/no-match";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />

        {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
}
