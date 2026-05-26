import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/LOGO_BIGLIETTO_DA_VISITA.png";
import LanguageSwitcher from "./language-switcher.component";

export default function MindalistNavbar() {
  const location = useLocation();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeStyle =
    "rounded-md bg-[#6129b5] px-5 py-2.5 text-sm font-medium text-[#E0E0E0] transition hover:text-[#E0E0E0]/75";
  const inactiveStyle =
    "text-[#E0E0E0] transition hover:text-[#E0E0E0]/75 text-sm font-medium";

  const getLinkStyle = (path: string) => {
    return location.pathname === path ? activeStyle : inactiveStyle;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((open) => !open);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] w-full max-w-[100vw] overflow-x-clip border-b border-[#6129b5]/30 bg-[#020212]/90 shadow-lg shadow-[#6129b5]/5 backdrop-blur-md pt-[env(safe-area-inset-top)]">
      <div className="mx-auto box-border w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex h-14 sm:h-16 min-w-0 items-center justify-between gap-2">
          <div className="shrink-0 w-12 sm:w-[75px]">
            <Link to="/" onClick={closeMobileMenu} className="block">
              <img
                src={logo}
                alt="Mindalist.fpv"
                className="h-auto w-full max-w-full"
              />
            </Link>
          </div>

          <div className="flex min-w-0 shrink items-center justify-end gap-2 sm:gap-4">
            <nav aria-label="Global" className="hidden min-w-0 md:block">
              <ul className="flex items-center gap-4 lg:gap-6 text-sm">
                <li>
                  <Link className={getLinkStyle("/") + " select-none"} to="/">
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link
                    className={getLinkStyle("/chi-sono") + " select-none"}
                    to="/chi-sono"
                  >
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    className={getLinkStyle("/servizi") + " select-none"}
                    to="/servizi"
                  >
                    {t("nav.services")}
                  </Link>
                </li>
                <li>
                  <Link
                    className={getLinkStyle("/contatti") + " select-none"}
                    to="/contatti"
                  >
                    {t("nav.contacts")}
                  </Link>
                </li>
              </ul>
            </nav>

            <LanguageSwitcher />

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="block shrink-0 rounded bg-[#6129b5] p-2 text-white transition-colors hover:bg-[#9494f8] md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-2 min-w-0 border-t border-gray-800 pt-4 pb-2 md:hidden">
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    className={getLinkStyle("/") + " select-none block"}
                    to="/"
                    onClick={closeMobileMenu}
                  >
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link
                    className={getLinkStyle("/chi-sono") + " select-none block"}
                    to="/chi-sono"
                    onClick={closeMobileMenu}
                  >
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    className={getLinkStyle("/servizi") + " select-none block"}
                    to="/servizi"
                    onClick={closeMobileMenu}
                  >
                    {t("nav.services")}
                  </Link>
                </li>
                <li>
                  <Link
                    className={getLinkStyle("/contatti") + " select-none block"}
                    to="/contatti"
                    onClick={closeMobileMenu}
                  >
                    {t("nav.contacts")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
