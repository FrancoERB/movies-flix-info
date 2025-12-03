import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../screens/home/Home";
import { Login } from "../screens/login/Login";
import { Register } from "../screens/register/Register";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
