# Configurazione EmailJS

Il form contatti utilizza EmailJS per inviare email, con opzionale reCAPTCHA v2 anti-spam.

## Setup (5 minuti)

### 1. Registrazione EmailJS
1. Vai su [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea un account gratuito (100 email/mese)

### 2. Configura Servizio Email
1. Dashboard → **Email Services** → **Add New Service**
2. Scegli il tuo provider (es. **Gmail**)
3. Segui le istruzioni per collegare il tuo account
4. Copia il **Service ID** (es. `service_abc123`)

### 3. Crea Template Email
1. Dashboard → **Email Templates** → **Create New Template**
2. Usa questo template:

```
Subject: {{subject}}

Nuovo messaggio dal form contatti:

Nome: {{from_name}}
Email: {{from_email}}

Messaggio:
{{message}}
```

3. Imposta:
   - **Template Name**: Contact Form
   - **To Email**: manfro.andrea@gmail.com
   - **From Email**: {{from_email}}
   - **From Name**: {{from_name}}
4. Nella tab **Settings** del template, spunta **Enable reCAPTCHA V2 verification** e inserisci la **Secret Key** (vedi sotto).
5. Salva e copia il **Template ID** (es. `template_xyz456`)

### 4. reCAPTCHA (anti-spam)
1. Vai su [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin/create)
2. Registra un nuovo sito: scegli **reCAPTCHA v2** → "Casella di controllo 'Non sono un robot'"
3. Aggiungi i domini (es. `localhost`, `mindalist.it`)
4. Copia la **Chiave del sito** (Site Key) e la **Chiave segreta** (Secret Key)
5. La **Secret Key** va inserita nel template EmailJS (step 3.4 sopra)
6. La **Site Key** va in `.env.local` come `VITE_RECAPTCHA_SITE_KEY`

### 5. Ottieni Public Key
1. Dashboard → **Account** → **API Keys**
2. Copia la **Public Key** (es. `abcXYZ123456789`)

### 6. Configura Variabili d'Ambiente
1. Crea un file `.env.local` nella root del progetto
2. Inserisci le tue credenziali:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz456
VITE_EMAILJS_PUBLIC_KEY=abcXYZ123456789
VITE_RECAPTCHA_SITE_KEY=your_site_key_from_google_recaptcha
```

3. Riavvia il server di sviluppo (`npm run dev`)

Se non imposti `VITE_RECAPTCHA_SITE_KEY`, il form funziona ugualmente ma senza verifica anti-spam (e devi disabilitare reCAPTCHA nel template EmailJS).

## Test
1. Compila il form contatti
2. Clicca "Invia Messaggio"
3. Dovresti vedere "Messaggio inviato con successo!"
4. Controlla la tua email: dovresti ricevere il messaggio con tutti i dati

## Troubleshooting
- **"Email service not configured"**: le variabili d'ambiente non sono impostate
- **"Error sending message"**: verifica Service ID, Template ID e Public Key
- **Email non arriva**: controlla spam, verifica template su EmailJS dashboard
- **reCAPTCHA non appare**: verifica `VITE_RECAPTCHA_SITE_KEY` in `.env.local` e che il dominio sia autorizzato in [reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
- **412 / insufficient scopes (Gmail)**: riautorizza il servizio Gmail in EmailJS o usa SMTP con App Password
