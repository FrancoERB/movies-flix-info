import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import bgLogin from "../../assets/background.jpg";

type RegFormData = {
  email: string;
  password: string;
  repeatPassword: string;
};
export const Register = () => {
  const navigate = useNavigate();
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
    navigate("/home");
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgLogin})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      <form
        className="flex flex-col items-center bg-black/70 gap-4 border-2 w-[550px] h-[700px] rounded-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="flex text-4xl items-start w-[80%]  text-white my-8 font-extrabold">
          Registrate
        </h1>
        <input
          className={`w-[80%] h-[50px] bg-white rounded-md placeholder:pl-2 ${
            errors.email ? "border border-red-500" : "border border-gray-300"
          }`}
          placeholder="Ingrese un email"
          type="text"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
        <input
          type="password"
          className={`w-[80%] h-[50px] bg-white rounded-md placeholder:pl-2 ${
            errors.email ? "border border-red-500" : "border border-gray-300"
          }`}
          placeholder="Crear una contraseña"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <input
          type="password"
          className={`w-[80%] h-[50px] bg-white rounded-md placeholder:pl-2 ${
            errors.email ? "border border-red-500" : "border border-gray-300"
          }`}
          placeholder="Repetir contraseña"
          {...register("repeatPassword")}
        />
        {errors.repeatPassword && (
          <p className="text-red-500">{errors.repeatPassword.message}</p>
        )}
        <button className="bg-red-600 text-white text-2xl w-[80%] h-[50px] rounded-md">
          Confirmar
        </button>
      </form>
    </div>
  );
};
