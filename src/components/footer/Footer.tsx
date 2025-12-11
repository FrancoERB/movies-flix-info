export const Footer = () => {
  return (
    <footer className=" py-12 border-t border-[rgb(51_51_51)]/50 px-[max(1rem,calc((100vw-1280px)/2+1rem))]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[rgb(153_153_153)]">
        <p>
          Creado por Franco Erben © 2025 MovieFlix. Todos los derechos
          reservados.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Términos
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacidad
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};
