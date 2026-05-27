# Madhan Raj R — Portfolio (Vite)

## 📁 Project Structure

```
portfolio/
├── index.html                  ← Vite entry (root level, NOT in public/)
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                ← Vite entry point
    ├── App.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Skills.jsx
    │   ├── Experience.jsx
    │   ├── Projects.jsx
    │   ├── Certifications.jsx
    │   ├── Contact.jsx
    │   └── SectionHeader.jsx
    ├── styles/
    │   ├── global.css
    │   ├── Navbar.css
    │   ├── Hero.css
    │   ├── Skills.css
    │   ├── Experience.css
    │   ├── Projects.css
    │   ├── ContactCert.css
    │   └── SectionUI.css
    ├── hooks/
    │   └── useInView.js
    └── data/
        └── portfolioData.js    ← Edit all your content here
```

## 🚀 Run with Vite (3 steps)

```bash
# Step 1 — Extract the zip and go into folder
cd portfolio

# Step 2 — Install dependencies
npm install

# Step 3 — Start dev server
npm run dev
```

Then open → http://localhost:5173

## 🏗️ Build for Production

```bash
npm run build
# Output goes to dist/ folder
```

## 🌐 Deploy Free

### Vercel (easiest)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder to netlify.com/drop
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

## ✏️ Update Your Content

All content is in ONE file → `src/data/portfolioData.js`

- Add a new project → add to `PROJECTS` array
- Add a new cert → add to `CERTIFICATIONS` array
- Update contact → edit `CONTACT` object

## 🎨 Change Theme Color

In `src/styles/global.css`, change:
```css
--accent-primary: #6366F1;  /* Change this to any color */
```
This updates the entire portfolio instantly.
