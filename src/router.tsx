import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./lib/layout/root-layout";
import { HomePage } from "./routes/home";
import { AboutPage } from "./routes/about";
import { NoMatchPage } from "./routes/no-match";
import { LoginPage } from "./routes/login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
}
