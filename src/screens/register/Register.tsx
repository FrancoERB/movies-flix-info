import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import bgLogin from "../../assets/background.jpg";
import { Eye } from "../../assets/icons/Eye";
import { EyeOff } from "../../assets/icons/EyeOff";
import { Film } from "../../assets/icons/Film";
import { Lock } from "../../assets/icons/Lock";
import { Mail } from "../../assets/icons/Mail";

type RegFormData = {
  email: string;
  password: string;
  repeatPassword: string;
};

export const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  const registerSchema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .email("Ingrese un email válido")
      .required("El email es obligatorio"),

    password: yup
      .string()
      .trim()
      .required("La contraseña es obligatoria")
      .min(6, "Debe tener al menos 6 caracteres"),

    repeatPassword: yup
      .string()
      .trim()
      .oneOf([yup.ref("password")], "Las contraseñas no coinciden")
      .required("Repetí la contraseña"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegFormData>({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = (data: RegFormData) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const newUser = {
      email: data.email.trim(),
      password: data.password.trim(),
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro exitoso, inicie sesión con sus credenciales");
    navigate("/");
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
      {/* Background radial gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle,rgba(59,130,246,0.25),transparent)] opacity-40" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle,rgba(59,130,246,0.15),transparent)] opacity-40" />
      </div>

      {/* Floating circles */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full border border-white/10 opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border border-white/10 opacity-10" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full border border-white/10 opacity-15" />

      <form
        className="
          relative w-full max-w-md p-8 rounded-3xl
          bg-white/5 backdrop-blur-2xl border border-white/10
          shadow-[0_8px_32px_rgba(0,0,0,0.45)]
          flex flex-col items-center gap-6
        "
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="relative">
            <Film />
            <div className="absolute inset-0 bg-blue-500/40 blur-xl" />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            Movie<span className="text-blue-500">Flix</span>
          </span>
        </div>

        <h1 className="text-2xl font-semibold text-center text-white">
          Registrate
        </h1>
        <p className="text-gray-400 text-center mb-4">
          Completa los campos para registrarte
        </p>

        {/* EMAIL */}
        <div className="relative w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Mail />
          </div>

          <input
            className={`
              pl-12 h-12 w-full rounded-2xl bg-white/10
              border border-white/20 text-white
              placeholder:text-gray-400
              focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
              outline-none
              ${errors.email ? "border-red-500" : ""}
            `}
            placeholder="Ingrese un email"
            type="text"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <p className="text-red-400 text-sm w-full -mt-2">
            {errors.email.message}
          </p>
        )}

        {/* PASSWORD */}
        <div className="relative w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Lock />
          </div>

          <input
            type={showPassword ? "text" : "password"}
            className={`
              pl-12 pr-12 h-12 w-full rounded-2xl bg-white/10
              border border-white/20 text-white
              placeholder:text-gray-400
              focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
              outline-none
              ${errors.password ? "border-red-500" : ""}
            `}
            placeholder="Crear una contraseña"
            {...register("password")}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition"
            aria-label={
              showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
            }
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-400 text-sm w-full -mt-2">
            {errors.password.message}
          </p>
        )}

        {/* REPEAT PASSWORD */}
        <div className="relative w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Lock />
          </div>

          <input
            type={showRepeat ? "text" : "password"}
            className={`
              pl-12 pr-12 h-12 w-full rounded-2xl bg-white/10
              border border-white/20 text-white
              placeholder:text-gray-400
              focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
              outline-none
              ${errors.repeatPassword ? "border-red-500" : ""}
            `}
            placeholder="Repetir contraseña"
            {...register("repeatPassword")}
          />

          <button
            type="button"
            onClick={() => setShowRepeat(!showRepeat)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition"
            aria-label={
              showRepeat ? "Ocultar contraseña" : "Mostrar contraseña"
            }
          >
            {showRepeat ? <EyeOff /> : <Eye />}
          </button>
        </div>
        {errors.repeatPassword && (
          <p className="text-red-400 text-sm w-full -mt-2">
            {errors.repeatPassword.message}
          </p>
        )}

        {/* Submit */}
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
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default Register;
