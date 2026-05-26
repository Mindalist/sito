// EmailJS Configuration
// Per ottenere queste credenziali:
// 1. Registrati su https://www.emailjs.com/
// 2. Crea un servizio email (es. Gmail)
// 3. Crea un template email con le variabili: from_name, from_email, subject, message
// 4. Abilita reCAPTCHA v2 nel template EmailJS e registra il sito su https://www.google.com/recaptcha/admin
// 5. Aggiungi le variabili d'ambiente nel file .env.local

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
  recaptchaSiteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY || "",
};

// Verifica che le credenziali siano configurate
export const isEmailJSConfigured = () => {
  return (
    EMAILJS_CONFIG.serviceId &&
    EMAILJS_CONFIG.templateId &&
    EMAILJS_CONFIG.publicKey
  );
};

// Verifica se reCAPTCHA è configurato (opzionale)
export const isRecaptchaConfigured = () => Boolean(EMAILJS_CONFIG.recaptchaSiteKey);
