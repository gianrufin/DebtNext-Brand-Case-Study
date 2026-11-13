# DebtNext Brand Identity Case Study

A React + Vite + Tailwind CSS single-page brand case study, prepared for local review and PDF export.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## PDF export

Open the page in a desktop browser and use Print → Save as PDF. The layout includes print-specific color and page-break rules. Enable background graphics in the print dialog for the dark product section and color swatches.

The product interface is a conceptual visual direction. All visible example labels are illustrative and do not represent customer data or verified product capabilities. The DebtNext logo is the supplied SVG, placed at its original proportions in `public/Asset 1.svg`.

## GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`. Push to `main` to build and publish the site. In the repository's Settings → Pages, set the build and deployment source to **GitHub Actions** if GitHub has not enabled it automatically. The Vite build uses relative asset paths so it can load from a project-page URL.
