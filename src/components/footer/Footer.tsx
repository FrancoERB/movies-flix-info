import { Link } from "react-router-dom";
import GitHub from "../../assets/icons/GitHub";
import Instagram from "../../assets/icons/Instagram";
import LinkedIn from "../../assets/icons/LinkedIn";
export const Footer = () => {
  return (
    <footer className=" py-12 border-t border-[rgb(51_51_51)]/50 px-[max(1rem,calc((100vw-1280px)/2+1rem))]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[rgb(153_153_153)]">
        <p>
          Creado por Franco Erben © 2025 MovieFlix. Todos los derechos
          reservados.
        </p>
        <div>
          <ul className="flex gap-3 font-semibold sm:text-xs text-white/50 ">
            <li className="hover:scale-110 hover:text-white">
              <Link
                to={"https://www.instagram.com/francoerben23/"}
                target="_blank"
                className="flex flex-row items-center gap-1"
              >
                <Instagram />
                Instagram
              </Link>
            </li>
            <li className="hover:scale-110 hover:text-white">
              <Link
                to={"https://github.com/FrancoERB"}
                target="_blank"
                className="flex flex-row items-center gap-1"
              >
                <GitHub />
                GitHub
              </Link>
            </li>
            <li className="hover:scale-110 hover:text-white">
              <Link
                to={"https://www.linkedin.com/in/franco-erben-272042205/"}
                target="_blank"
                className="flex flex-row items-center gap-1"
              >
                <LinkedIn />
                Linkedin
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Términos
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
};
