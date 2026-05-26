import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

export type ContactFormFeedbackType = "success" | "error";

interface ContactFormFeedbackModalProps {
  type: ContactFormFeedbackType | null;
  message: string;
  onClose: () => void;
}

export function ContactFormFeedbackModal({
  type,
  message,
  onClose,
}: ContactFormFeedbackModalProps) {
  const { t } = useTranslation();
  const isOpen = type !== null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-feedback-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-label={t("contacts.close")}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="relative w-full max-w-md rounded-2xl border border-[#6129b5]/40 bg-[#0d0d1a] p-6 shadow-2xl shadow-[#6129b5]/20"
          >
            <motion.div
              className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${
                type === "success"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.05, type: "spring", stiffness: 400 }}
            >
              {type === "success" ? (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </motion.div>
            <h3
              id="contact-feedback-title"
              className="text-center text-xl font-bold text-white mb-2"
            >
              {type === "success"
                ? t("contacts.successTitle")
                : t("contacts.errorTitle")}
            </h3>
            <p className="text-center text-sm text-gray-300 leading-relaxed mb-6">
              {message}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="w-full cursor-pointer rounded-full bg-[#6129b5] py-3 font-semibold text-white transition-colors hover:bg-[#9494f8]"
            >
              {t("contacts.close")}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
