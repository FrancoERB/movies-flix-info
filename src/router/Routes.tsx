import { Home } from "../screens/home/Home";
// import { Login } from "../screens/login/Login";
import Login from "../screens/login/Login";
import { MovieDetail } from "../screens/movieDetail/MovieDetail";
import { Register } from "../screens/register/Register";

export const routesLinks = [
  { name: "Inicio", path: "/home", element: <Home /> },
  { name: "Series", path: "/series", element: "#" },
  { name: "Mi Lista", path: "/miLista", element: "#" },
  { name: "IniciarSesion", path: "/", element: <Login /> },
  { name: "Registro", path: "/register", element: <Register /> },
  { name: "MovieDetail", path: "/movieDetail/:id", element: <MovieDetail /> },
];
