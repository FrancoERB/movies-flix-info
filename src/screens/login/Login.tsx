import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import bgLogin from "../../assets/background.jpg";
type LoginForm = {
  email: string;
  password: string;
};

export const Login = () => {
  const navigate = useNavigate();
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
  // const navigate = useNavigate();

  const onSubmit = (data: LoginForm) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const foundUser = users.find(
      (u: any) =>
        u.email === data.email.trim() && u.password === data.password.trim()
    );
    if (!foundUser) {
      alert("Usuario o contraseña incorrectos");
    } else {
      alert("Bienvenido");
      navigate("/home");
    }
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
          Iniciar sesión
        </h1>
        <input
          className={`w-[80%] h-[50px] bg-white rounded-md placeholder:pl-2 ${
            errors.email ? "border border-red-500" : "border border-gray-300"
          }`}
          placeholder="Ingrese su email"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-400 text-sm h-4">
            {errors.email.message}
          </span>
        )}
        <input
          className={`w-[80%] h-[50px] bg-white rounded-md placeholder:pl-2 ${
            errors.email ? "border border-red-500" : "border border-gray-300"
          }`}
          placeholder="Ingrese su contraseña"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-red-400 text-sm h-4">
            {errors.password.message}
          </span>
        )}
        <button
          className="bg-red-600 text-white text-2xl w-[80%] h-[50px] rounded-md"
          type="submit"
        >
          Iniciar sesión
        </button>
        <Link to={"/register"} className="text-md text-white hover:underline">
          {" "}
          Primera vez en MovieFlix ? Registrate
        </Link>
      </form>
    </div>
  );
};
