import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import bgLogin from "../../assets/background.jpg";
import { Eye } from "../../assets/icons/Eye";
import { EyeOff } from "../../assets/icons/EyeOff";
import { Film } from "../../assets/icons/Film";
import { Lock } from "../../assets/icons/Lock";
import { Mail } from "../../assets/icons/Mail";

type LoginForm = {
  email: string;
  password: string;
};

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .email("Email inválido")
      .required("Campo obligatorio"),
    password: yup.string().trim().required("Campo obligatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginForm) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const foundUser = users.find(
      (u: any) =>
        u.email === data.email.trim() && u.password === data.password.trim()
    );

    if (!foundUser) {
      alert("Usuario o contraseña incorrectos");
      return;
    }

    alert("Bienvenido");
    navigate("/home");
  };

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgLogin})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle,rgba(59,130,246,0.25),transparent)] opacity-40" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle,rgba(59,130,246,0.15),transparent)] opacity-40" />
      </div>
      {/* CARD */}
      <div
        className="
      relative w-full max-w-md p-8 rounded-3xl 
      bg-white/5 backdrop-blur-2xl border border-white/10 
      shadow-[0_8px_32px_rgba(0,0,0,0.45)] animate-fade-up
    "
      >
        {/* LOGO */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="relative">
            <Film />
            <div className="absolute inset-0 bg-blue-500/40 blur-xl" />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            Movie<span className="text-blue-500">Flix</span>
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-semibold text-center mb-2">
          Iniciar Sesión
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Ingresa tus credenciales para continuar
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* EMAIL */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Mail />
            </div>

            <input
              type="email"
              placeholder="Correo electrónico"
              {...register("email")}
              className={`
                pl-12 h-12 w-full rounded-2xl bg-white/10 
                border border-white/20 text-white 
                placeholder:text-gray-400
                focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                outline-none
                ${errors.email ? "border-red-500" : ""}
                `}
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-sm -mt-3">{errors.email.message}</p>
          )}

          {/* PASSWORD */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Lock />
            </div>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              {...register("password")}
              className={`
                        pl-12 pr-12 h-12 w-full rounded-2xl bg-white/10 
                        border border-white/20 text-white 
                        placeholder:text-gray-400
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                        outline-none
                        ${errors.password ? "border-red-500" : ""}
                        `}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {errors.password && (
            <p className="text-red-400 text-sm -mt-3">
              {errors.password.message}
            </p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="
          w-full h-12 rounded-2xl 
          bg-blue-500 hover:bg-blue-600 
          text-white font-semibold text-base 
          transition-all duration-300 
          shadow-lg shadow-blue-500/25
        "
          >
            Iniciar Sesión
          </button>
        </form>

        {/* LINK */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            ¿Primera vez en MovieFlix?{" "}
            <Link
              to="/register"
              className="text-blue-500 hover:text-blue-400 font-medium hover:underline"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
