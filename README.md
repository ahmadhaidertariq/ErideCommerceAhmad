# ErideCommerce

A modern website for an Amazon private label growth agency. Built with Next.js, TailwindCSS, and Framer Motion.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TailwindCSS v4**
- **Framer Motion** - Animations
- **Resend** - Contact form email delivery

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact Form

The contact form sends emails to `info@eridecommerce.com` via Resend. To enable:

1. Create an account at [resend.com](https://resend.com)
2. Add `RESEND_API_KEY` to your environment variables
3. Verify your domain in Resend for production (or use `onboarding@resend.dev` for testing)

Without the API key, form submissions are logged to the console.

## Image Placeholders

Replace placeholder images in `/public/images/`:

- `placeholder.svg` - General placeholder (used for case studies, blog)
- Add category-specific images to `/public/images/case-studies/` as needed

## Deploy on Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add `RESEND_API_KEY` in Environment Variables
4. Deploy

## Project Structure

```
src/
├── app/
│   ├── api/contact/     # Contact form API
│   ├── about/
│   ├── blog/
│   ├── case-studies/
│   ├── services/
│   ├── privacy/
│   └── terms/
├── components/          # Header, Footer
├── sections/            # Hero, Trust, Services, etc.
└── utils/               # Blog & case study data
```

## Brand Colors

- Primary Blue: `#2F4F85`
- Accent Orange: `#D65A2F`
- Soft Peach: `#E7A98E`
- Light Background: `#F8FAFC`
