import { Home } from "../screens/home/Home";
// import { Login } from "../screens/login/Login";
import Login from "../screens/login/Login";
import { Register } from "../screens/register/Register";

export const routes = [
  { name: "Inicio", path: "/home", element: <Home /> },
  { name: "Series", path: "/series", element: "#" },
  { name: "Mi Lista", path: "/miLista", element: "#" },
  { name: "Registro", path: "/register", element: <Register /> },
  { name: "IniciarSesion", path: "/", element: <Login /> },
];
