import { Link } from "react-router-dom";
import { BellIcon } from "../../assets/icons/BellIcon";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { UserIcon } from "../../assets/icons/User";
import { routes } from "../../router/Routes";

export const NavBar = () => {
  const navLinks = routes.filter(
    (r) => r.name !== "IniciarSesion" && r.name !== "Registro"
  );
  return (
    <header className="fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="bg-gradient-to-b from-[rgb(15_15_15)] via-[rgb(15_15_15)]/80 to-transparent">
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
            <div className="flex items-center gap-4">
              <button className="p-2 text-white rounded-full hover:bg-black/50 transition-colors">
                <SearchIcon />
              </button>
              <button className="p-2 text-white rounded-full hover:bg-black/50 transition-colors relative">
                <BellIcon />
                <span className="absolute text-white top-1 right-1 w-2 h-2 bg-accent rounded-full" />
              </button>
              <button className="w-8 h-8 text-white rounded-full bg-linear-to-br from-[hsl(210,100%,60%)] to-[hsl(210,100%,60%)]/50 flex items-center justify-center">
                <UserIcon />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
