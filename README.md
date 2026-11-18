# Black Shadow Team website

A bilingual (English/Bangla), responsive static website for Black Shadow Team with a premium dark-and-gold visual identity, subtle motion, and reduced-motion accessibility support.

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

## Build

Build the site for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deploy to Vercel

Import this repository into Vercel. The build settings are configured in `vercel.json`:
- Build Command: `npm run build`
- Output Directory: `dist`

Vercel Web Analytics is included and will automatically track page views once enabled in your Vercel dashboard.

## Notes

- Use the language control in the navigation to switch between English and Bangla.
- The logo and founder photo are loaded from the Black Shadow Team profile repository.
- Contact uses an email link; no form service or server-side API is required.
