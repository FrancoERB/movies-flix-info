import type { ReactElement } from "react";
import { Home } from "../screens/home/Home";
import Login from "../screens/login/Login";
import { MediaDetailPage } from "../screens/movieDetail/MediaDetailPage";
import { Register } from "../screens/register/Register";
import { Series } from "../screens/series/Series";

export interface AppRoute {
  name: string;
  path: string;
  element: ReactElement;
  protected: boolean;
}

export const routesLinks: AppRoute[] = [
  { name: "Inicio", path: "/home", element: <Home />, protected: true },
  { name: "Series", path: "/seriesList", element: <Series />, protected: true },
  { name: "IniciarSesion", path: "/", element: <Login />, protected: false },
  {
    name: "Registro",
    path: "/register",
    element: <Register />,
    protected: false,
  },
  {
    name: "MediaDetail",
    path: "/mediaDetail/:id/:mediaType",
    element: <MediaDetailPage />,
    protected: true,
  },
  {
    name: "SeriesDetail",
    path: "/mediaDetail/:id/:mediaType",
    element: <MediaDetailPage />,
    protected: true,
  },
];
