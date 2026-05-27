import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./mindalist-footer.style.css";
import logo from "../../assets/LOGO_BIGLIETTO_DA_VISITA.png";
import aciLogo from "../../assets/partners/aci.png";
import raiLogo from "../../assets/partners/rai1.png";
import antiLogo from "../../assets/partners/anti.png";
import skyLogo from "../../assets/partners/sky.png";

const LogoMarquee: React.FC = () => {
  const logos = [
    { src: aciLogo, alt: "ACISport" },
    { src: raiLogo, alt: "Rai" },
    { src: antiLogo, alt: "Antigravity A1" },
    { src: skyLogo, alt: "Sky" },
  ];

  // Durata diversa in base alla larghezza schermo
  const isMobile = window.innerWidth < 768; // breakpoint md
  const duration = isMobile ? 20 : 40; // mobile più veloce

  return (
    <div className="w-full max-w-full overflow-x-clip relative select-none bg-[#020212] isolate">
      {/* Gradient sinistra */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#020212] to-transparent" />

      <motion.div
        className="flex w-max py-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Prima serie */}
        <div className="flex shrink-0 gap-4 md:gap-12 px-2 md:px-4">
          {logos.map(({ src, alt }, index) => (
            <img
              key={`logo1-${index}`}
              src={src}
              alt={alt}
              className="
                w-16 h-16           /* mobile: più piccoli */
                md:w-28 md:h-28     /* desktop: come prima */
                object-contain
                mx-2 md:mx-10       /* mobile: meno margine, desktop: come prima */
                opacity-80 hover:opacity-100
                transition-opacity
                flex-shrink-0
                cursor-pointer
              "
              draggable={false}
            />
          ))}
        </div>

        {/* Seconda serie */}
        <div className="flex shrink-0 gap-4 md:gap-12 px-2 md:px-4">
          {logos.map(({ src, alt }, index) => (
            <img
              key={`logo2-${index}`}
              src={src}
              alt={alt}
              className="
                w-16 h-16
                md:w-28 md:h-28
                object-contain
                mx-2 md:mx-10
                opacity-80 hover:opacity-100
                transition-opacity
                flex-shrink-0
                cursor-pointer
              "
              draggable={false}
            />
          ))}
        </div>
      </motion.div>

      {/* Gradient destra */}
      <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#020212] to-transparent" />
    </div>
  );
};

export function MindalistFooter() {
  const { t } = useTranslation();

  return (
    <>
      <LogoMarquee />

      <footer className="w-full max-w-full overflow-x-clip bg-[#020212] text-white pb-8">
        {/* Contenuto centrato ma background full-width */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Colonna logo + social */}
            <div className="space-y-4">
              <Link
                to="/"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img src={logo} alt="Mindalist logo" className="w-10 h-10" />
                <span className="ml-2 text-xl font-bold">Mindalist.fpv</span>
              </Link>
              <p className="text-gray-400">{t("footer.tagline")}</p>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/mindalist"
                  className="text-gray-400 hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/mindalist.fpv/"
                  className="text-gray-400 hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/andrea-manfroni-79574b13b/"
                  className="text-gray-400 hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                {t("footer.quickLinks")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/chi-sono"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servizi"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {t("nav.services")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contatti"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {t("nav.contacts")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{t("footer.services")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/servizi#build-droni"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {t("footer.customDrones")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servizi#post-produzione"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {t("footer.postProduction")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servizi#consulenza"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {t("footer.consulting")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servizi#videomaking"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {t("footer.videomaking")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contatti */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{t("footer.contactMe")}</h3>
              <address className="not-italic text-gray-400">
                <p className="mt-2">
                  {t("footer.email")}{" "}
                  <a
                    href="mailto:info@mindalist.it"
                    className="hover:text-white transition"
                  >
                   info@mindalist.it
                  </a>
                </p>

              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              {t("footer.copyright")}
            </p>
            <div className="flex space-x-6">
              <Link
                to="/termini-di-servizio"
                className="text-gray-500 hover:text-white text-sm transition"
              >
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
