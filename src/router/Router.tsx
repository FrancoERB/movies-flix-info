import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesLinks } from "./Routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesLinks.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
