import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_CONFIG,
  isEmailJSConfigured,
  isRecaptchaConfigured,
} from "../../../config/emailjs.config";
import {
  ContactFormFeedbackModal,
  type ContactFormFeedbackType,
} from "./contact-form-feedback-modal.component";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      render: (
        container: HTMLElement,
        parameters: { sitekey: string; theme?: "light" | "dark" }
      ) => number;
      getResponse: (widgetId?: number) => string;
      reset: (widgetId?: number) => void;
    };
  }
}

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialValues: FormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const RECAPTCHA_SCRIPT_ID = "recaptcha-api-script";
const RECAPTCHA_WIDTH = 304;
const RECAPTCHA_HEIGHT = 78;

const inputClassName =
  "box-border w-full max-w-full min-w-0 px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-2 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0";

function getEmailJsErrorMessage(
  error: unknown,
  fallback: string,
  t: (key: string) => string
): string {
  let raw = "";
  if (error && typeof error === "object") {
    const err = error as { text?: string; message?: string; status?: number };
    raw = err.text || err.message || "";
  }

  if (/invalid grant|gmail_api/i.test(raw)) {
    console.error(
      "[Contatti — azione richiesta al proprietario del sito] Riconnetti Gmail in EmailJS → Email Services:",
      raw
    );
    return t("contacts.emailServiceUnavailable");
  }

  if (/recaptcha|captcha/i.test(raw)) {
    return t("contacts.captchaFailed");
  }

  return raw || fallback;
}

export default function MindalistForm2() {
  const { t } = useTranslation();
  const [isSending, setIsSending] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: ContactFormFeedbackType;
    message: string;
  } | null>(null);

  const recaptchaWrapperRef = useRef<HTMLDivElement>(null);
  const recaptchaContainerRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetIdRef = useRef<number | null>(null);

  const updateRecaptchaScale = useCallback(() => {
    const wrapper = recaptchaWrapperRef.current;
    const inner = recaptchaContainerRef.current;
    if (!wrapper || !inner) return;

    const scale = Math.min(1, wrapper.clientWidth / RECAPTCHA_WIDTH);
    inner.style.transform = `scale(${scale})`;
    inner.style.transformOrigin = "center top";
    wrapper.style.height = `${RECAPTCHA_HEIGHT * scale}px`;
  }, []);

  const showFeedback = useCallback(
    (type: ContactFormFeedbackType, message: string) => {
      setFeedback({ type, message });
    },
    []
  );

  const closeFeedback = useCallback(() => {
    setFeedback(null);
  }, []);

  const resetRecaptcha = useCallback(() => {
    if (
      recaptchaWidgetIdRef.current !== null &&
      typeof window !== "undefined" &&
      window.grecaptcha
    ) {
      window.grecaptcha.reset(recaptchaWidgetIdRef.current);
    }
    setRecaptchaError(false);
  }, []);

  const renderRecaptcha = useCallback(() => {
    const siteKey = EMAILJS_CONFIG.recaptchaSiteKey;
    const container = recaptchaContainerRef.current;
    if (!siteKey || !container || !window.grecaptcha) return;
    if (recaptchaWidgetIdRef.current !== null) return;

    window.grecaptcha.ready(() => {
      if (recaptchaWidgetIdRef.current !== null || !recaptchaContainerRef.current) {
        return;
      }
      recaptchaWidgetIdRef.current = window.grecaptcha!.render(
        recaptchaContainerRef.current,
        { sitekey: siteKey, theme: "dark" }
      );
      setRecaptchaReady(true);
      requestAnimationFrame(() => updateRecaptchaScale());
    });
  }, [updateRecaptchaScale]);

  useEffect(() => {
    if (!recaptchaReady) return;

    updateRecaptchaScale();
    window.addEventListener("resize", updateRecaptchaScale);
    return () => window.removeEventListener("resize", updateRecaptchaScale);
  }, [recaptchaReady, updateRecaptchaScale]);

  useEffect(() => {
    if (!isEmailJSConfigured()) return;
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  }, []);

  useEffect(() => {
    if (!isRecaptchaConfigured() || !EMAILJS_CONFIG.recaptchaSiteKey) return;

    const existing = document.getElementById(RECAPTCHA_SCRIPT_ID);
    if (existing) {
      if (window.grecaptcha) {
        renderRecaptcha();
      } else {
        existing.addEventListener("load", renderRecaptcha);
        return () => existing.removeEventListener("load", renderRecaptcha);
      }
      return;
    }

    const script = document.createElement("script");
    script.id = RECAPTCHA_SCRIPT_ID;
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = renderRecaptcha;
    document.head.appendChild(script);
  }, [renderRecaptcha]);

  const validationSchema = useMemo(
    () =>
      Yup.object({
        name: Yup.string().required(t("contacts.requiredField")),
        email: Yup.string()
          .required(t("contacts.requiredField"))
          .email(t("contacts.invalidEmail")),
        subject: Yup.string().required(t("contacts.requiredField")),
        message: Yup.string().required(t("contacts.requiredField")),
      }),
    [t]
  );

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      if (!isEmailJSConfigured()) {
        showFeedback(
          "error",
          `${t("contacts.notConfigured")} manfro.andrea@gmail.com`
        );
        setSubmitting(false);
        return;
      }

      if (isRecaptchaConfigured()) {
        const widgetId = recaptchaWidgetIdRef.current;
        const token =
          typeof window !== "undefined" && window.grecaptcha
            ? window.grecaptcha.getResponse(widgetId ?? undefined)
            : "";
        if (!token) {
          setRecaptchaError(true);
          showFeedback("error", t("contacts.completeCaptcha"));
          setSubmitting(false);
          return;
        }
        setRecaptchaError(false);
      }

      setIsSending(true);
      setSubmitting(true);

      try {
        const templateParams: Record<string, string> = {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        };

        if (isRecaptchaConfigured() && window.grecaptcha) {
          const widgetId = recaptchaWidgetIdRef.current;
          templateParams["g-recaptcha-response"] = window.grecaptcha.getResponse(
            widgetId ?? undefined
          );
        }

        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          templateParams,
          { publicKey: EMAILJS_CONFIG.publicKey }
        );

        resetForm();
        resetRecaptcha();
        showFeedback("success", t("contacts.success"));
      } catch (error) {
        console.error("EmailJS error:", error);
        showFeedback(
          "error",
          getEmailJsErrorMessage(error, t("contacts.error"), t)
        );
      } finally {
        setIsSending(false);
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="w-full min-w-0 max-w-full overflow-x-clip dark:bg-[#030318]">
      <ContactFormFeedbackModal
        type={feedback?.type ?? null}
        message={feedback?.message ?? ""}
        onClose={closeFeedback}
      />

      <form
        onSubmit={formik.handleSubmit}
        noValidate
        className="w-full min-w-0 max-w-full"
      >
        <div className="mb-5">
          <input
            id="name"
            name="name"
            type="text"
            placeholder={t("contacts.name")}
            autoComplete="name"
            className={inputClassName}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="text-[#dc3545] px-3 py-1">{formik.errors.name}</p>
          ) : null}
        </div>
        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            {t("contacts.email")}
          </label>
          <input
            id="email_address"
            name="email"
            type="email"
            placeholder={t("contacts.email")}
            autoComplete="email"
            className={inputClassName}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-[#dc3545] px-3 py-1">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="mb-5">
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder={t("contacts.subject")}
            autoComplete="off"
            className={inputClassName}
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <p className="text-[#dc3545] px-3 py-1">{formik.errors.subject}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <textarea
            id="message"
            name="message"
            placeholder={t("contacts.messageField")}
            className={`${inputClassName} h-36 resize-y`}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message ? (
            <p className="text-[#dc3545] px-3 py-1">{formik.errors.message}</p>
          ) : null}
        </div>

        {isRecaptchaConfigured() && EMAILJS_CONFIG.recaptchaSiteKey && (
          <div className="mb-5 flex w-full max-w-full flex-col items-center">
            <div
              ref={recaptchaWrapperRef}
              className="mb-2 w-full max-w-full overflow-hidden flex justify-center"
            >
              <div ref={recaptchaContainerRef} className="shrink-0" />
            </div>
            {!recaptchaReady && (
              <p className="text-gray-400 text-sm mt-2">
                {t("contacts.loadingCaptcha")}
              </p>
            )}
            {recaptchaError && (
              <p className="text-[#dc3545] text-sm mt-2 w-full text-center">
                {t("contacts.completeCaptcha")}
              </p>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={isSending || formik.isSubmitting}
          className="box-border cursor-pointer w-full max-w-full py-4 font-semibold !text-white transition-colors !bg-[#6129b5] rounded-md hover:!bg-[#8e98df] focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 dark:bg-white dark:text-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSending || formik.isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              {t("contacts.sending")}
            </>
          ) : (
            t("contacts.send")
          )}
        </button>
      </form>
    </div>
  );
}
