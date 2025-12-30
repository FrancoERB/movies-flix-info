import type { ReactElement } from "react";
import { Home } from "../screens/home/Home";
import Login from "../screens/login/Login";
import { MovieDetail } from "../screens/movieDetail/MovieDetail";
import { Register } from "../screens/register/Register";

export interface AppRoute {
  name: string;
  path: string;
  element: ReactElement;
  protected: boolean;
}

export const routesLinks: AppRoute[] = [
  { name: "Inicio", path: "/home", element: <Home />, protected: true },
  { name: "IniciarSesion", path: "/", element: <Login />, protected: false },
  {
    name: "Registro",
    path: "/register",
    element: <Register />,
    protected: false,
  },
  {
    name: "MovieDetail",
    path: "/movieDetail/:id",
    element: <MovieDetail />,
    protected: true,
  },
];
