# Prabhat Kumar — Portfolio & Personal Website

Personal website and applied machine learning portfolio of **Prabhat Kumar** (Machine Learning Engineer @ Roku, Former Researcher & Tech Lead @ Bosch Research).

Live at: [https://prabhatkumar95.github.io](https://prabhatkumar95.github.io)

---

## ⚡ Zero-Maintenance Architecture

The site is built with **Astro v5** and **Tailwind CSS v4** (`@tailwindcss/vite`). All site content is completely decoupled from UI code into a single data file:

```
src/data/profile.yaml
```

To update your bio, add a project, update patents, change employment dates, or adjust relocation details, **simply edit `src/data/profile.yaml`**. The site automatically renders the changes without touching any HTML, JSX, or CSS.

---

## 🛠️ Local Development

### Requirements
- Node.js >= 22 (tested on Node v24.21.0)
- npm

### Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Type check
npx astro check

# Build production static export (to ./dist)
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 Deployment

The site is automatically deployed to GitHub Pages on every push to `master` via GitHub Actions (`.github/workflows/deploy.yml`).

---

## 📄 License

MIT License.
