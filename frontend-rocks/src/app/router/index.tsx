import { BrowserRouter, Route, Routes } from "react-router";
import { RootRoute } from "../../routes/root";
import { DetailRoute } from "../../routes/detail";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootRoute />} />
      <Route path="/dettaglio/:id" element={<DetailRoute />} />
    </Routes>
  </BrowserRouter>
);
