import {
  BellAlertIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { routesLinks } from "../../router/Routes";

export const NavBar = () => {
  const hiddenRoutes = ["Registro", "IniciarSesion", "MovieDetail"];
  const navLinks = routesLinks.filter((r) => !hiddenRoutes.includes(r.name));
  return (
    <header className="fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="bg-linear-to-b from-[rgb(15_15_15)] via-[rgb(15_15_15)]/80 to-transparent">
        <div className="w-full max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <h1 className="text-2xl text-zinc-100 font-bold tracking-tighter">
                MovieFlix
              </h1>

              {/* Nav Links */}
              <ul className="hidden md:flex items-center gap-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-white hover:text-red-500 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button className="p-2 text-white rounded-full hover:bg-black/50 transition-colors">
                <MagnifyingGlassIcon />
              </button>
              <button>
                <BellAlertIcon className="size-6 text-white rounded-full hover:bg-black/50 hover:scale-105 transition-colors relative" />
              </button>
              <button>
                <UserCircleIcon className="size-6 text-white rounded-full bg-transparent hover:bg-black/50 hover:scale-105 transition-colors" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
