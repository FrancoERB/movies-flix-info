import {
  Bars3Icon,
  BellAlertIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { routesLinks } from "../../router/Routes";

export const NavBar = () => {
  const hiddenRoutes = [
    "Registro",
    "IniciarSesion",
    "MediaDetail",
    "SeriesDetail",
  ];

  const navLinks = routesLinks.filter((r) => !hiddenRoutes.includes(r.name));

  const [notificationIsOpen, setNotificationIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 right-0 z-50">
      <div className="bg-linear-to-b from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold tracking-tighter text-zinc-100">
                MovieFlix
              </h1>

              <ul className="hidden md:flex items-center gap-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-zinc-100 hover:text-red-500 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2">
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 text-white rounded-full hover:bg-black/50 transition"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="size-6" />
                ) : (
                  <Bars3Icon className="size-6" />
                )}
              </button>

              <div className="hidden md:flex items-center gap-2">
                {/* <button className="p-2 text-white rounded-full hover:bg-black/50 transition">
                  <MagnifyingGlassIcon className="size-6" />
                </button> */}

                <button
                  className="relative p-2 text-white rounded-full hover:bg-black/50 transition"
                  onClick={() => setNotificationIsOpen((prev) => !prev)}
                >
                  <BellAlertIcon className="size-6" />
                </button>

                <button className="p-2 text-white rounded-full hover:bg-black/50 transition">
                  <UserCircleIcon className="size-6" />
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute left-0 top-full w-full bg-zinc-900 border-t border-zinc-800 animate-fade-in">
              <ul className="flex flex-col divide-y divide-zinc-800">
                {navLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-6 py-4 text-zinc-100 hover:bg-zinc-800 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>

              <div className="px-6 py-4 space-y-4 border-t border-zinc-800">
                {/* <button className="flex items-center gap-3 text-zinc-200">
                  <MagnifyingGlassIcon className="size-5" />
                  Buscar
                </button> */}

                <button className="flex items-center gap-3 text-zinc-200">
                  <BellAlertIcon className="size-5" />
                  Notificaciones
                </button>

                <button className="flex items-center gap-3 text-zinc-200">
                  <UserCircleIcon className="size-5" />
                  Perfil
                </button>
              </div>
            </div>
          )}

          {notificationIsOpen && (
            <div className="hidden md:block absolute right-64 top-20 w-72 bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg overflow-hidden animate-fade-in">
              <div className="px-4 py-3 border-b border-zinc-800 text-sm text-zinc-200">
                Notificaciones
              </div>

              <ul className="max-h-64 overflow-y-auto">
                <li className="px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-800 cursor-pointer">
                  🎬 Nueva película agregada
                </li>
                <li className="px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-800 cursor-pointer">
                  ⭐ Recomendación para vos
                </li>
                <li className="px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-800 cursor-pointer">
                  🔔 Recordatorio de estreno
                </li>
              </ul>

              <div className="px-4 py-2 text-center text-xs text-zinc-400 hover:text-white cursor-pointer border-t border-zinc-800">
                Ver todas
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
