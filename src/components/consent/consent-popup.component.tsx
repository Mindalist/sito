import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const CONSENT_STORAGE_KEY = "mindalist_consent_accepted";

export const ConsentPopup = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!accepted) {
      // Small delay so page paints first
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: isMobile ? "-100%" : "100%" }}
          animate={{ y: 0 }}
          exit={{ y: isMobile ? "-100%" : "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="fixed left-0 right-0 top-0 sm:top-auto sm:bottom-0 z-[9999] p-3 sm:p-4 md:p-5 pointer-events-auto pt-[calc(env(safe-area-inset-top)+0.75rem)] sm:pt-4 md:pt-5 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] sm:pb-4 md:pb-6"
        >
          <div
            className="
              relative overflow-hidden rounded-2xl md:rounded-3xl
              bg-[#0d0d1a]/95 border border-[#6129b5]/40
              shadow-2xl shadow-[#6129b5]/20
              backdrop-blur-xl
              max-w-4xl mx-auto
              max-h-[calc(100dvh-1.5rem-env(safe-area-inset-top))] sm:max-h-none
            "
          >
              {/* Subtle gradient accent on top */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9494f8]/60 to-transparent" />

              <div className="p-4 sm:p-5 md:p-7 flex flex-col max-h-[calc(100dvh-1.5rem-env(safe-area-inset-top))] sm:max-h-none">
                <div className="flex items-start gap-3 shrink-0">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#6129b5]/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#9494f8]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {t("consent.title")}
                    </h3>
                  </div>
                </div>

                {/* Text (the only scrollable area on small viewports) */}
                <div className="mt-3 sm:mt-4 pr-1 overflow-y-auto min-h-0 flex-1">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {t("consent.message")}{" "}
                    <Link
                      to="/termini-di-servizio"
                      className="text-[#9494f8] hover:text-[#b8b8ff] underline underline-offset-2 transition-colors"
                    >
                      {t("consent.termsLink")}
                    </Link>{" "}
                    {t("consent.cookiesNote")}
                  </p>
                </div>

                {/* Actions (always visible) */}
                <div className="mt-4 sm:mt-5 flex flex-col-reverse sm:flex-row gap-3 sm:justify-end shrink-0">
                  <button
                    type="button"
                    onClick={accept}
                    className="
                      w-full sm:w-auto px-6 py-3 rounded-xl font-medium
                      bg-gradient-to-r from-[#6129b5] to-[#7b3dd4]
                      text-white
                      hover:from-[#7029c9] hover:to-[#8b4ae0]
                      active:scale-[0.98]
                      transition-all duration-200
                      shadow-lg shadow-[#6129b5]/30
                    "
                  >
                    <span className="sm:hidden">{t("consent.acceptShort")}</span>
                    <span className="hidden sm:inline">{t("consent.accept")}</span>
                  </button>
                </div>
              </div>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
