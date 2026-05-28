# Madhan Raj R — Portfolio v2

Clean, human-driven editorial design. Warm dark palette, serif + mono typography.

## 🚀 Quick Start

```bash
npm install
npm run dev
# → http://localhost:5173
```

## 📧 Enable the Contact Form (EmailJS — Free)

1. Go to https://www.emailjs.com and create a free account
2. Add an **Email Service** (Gmail) → get `SERVICE_ID`
3. Create an **Email Template** → get `TEMPLATE_ID`
   - Template variables to use:
     - `{{from_name}}` — sender's name
     - `{{from_email}}` — sender's email
     - `{{from_phone}}` — sender's phone
     - `{{reason}}` — reason for contact
     - `{{subject}}` — subject
     - `{{message}}` — message body
4. Go to **Account → General** → copy your `PUBLIC_KEY`
5. Open `src/data/portfolioData.js` and fill in:

```js
export const EMAILJS = {
  serviceId:  "service_xxxxxxx",
  templateId: "template_xxxxxxx",
  publicKey:  "xxxxxxxxxxxxxxxxxxxx",
};
```

That's it — the form will now send emails directly to your Gmail, no backend needed.

## 📁 Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx          ← shows your-photo.jpg
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Certifications.jsx ← shows certificate1–6.png
│   └── Contact.jsx        ← EmailJS form
├── styles/
│   ├── global.css         ← CSS variables, theme (change --gold to rebrand)
│   ├── Navbar.css
│   ├── Hero.css
│   ├── Skills.css
│   ├── Experience.css
│   ├── Projects.css
│   ├── Certifications.css
│   └── Contact.css
├── data/
│   └── portfolioData.js   ← ALL content lives here
├── hooks/
│   └── useInView.js
├── App.jsx
└── main.jsx
public/
└── images/
    ├── your-photo.jpg
    ├── certificate1.png … certificate6.png
```

## 🎨 Change Theme Color

In `src/styles/global.css`:
```css
--gold: #C9A84C;   /* ← change this to rebrand everything */
```

## 🌐 Deploy

```bash
npm run build        # → dist/
# Drag dist/ to netlify.com/drop  OR
npx vercel           # Vercel auto-detects Vite
```
