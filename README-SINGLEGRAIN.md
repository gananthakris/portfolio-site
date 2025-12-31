# Single Grain Website

A modern, high-converting marketing website for Single Grain built with Next.js, TypeScript, and Tailwind CSS.

## Design Theme: Dark Mode + Grain + Neon

**Visual Identity:**
- Dark base (#0b0f14) with grain texture background
- Neon lime accent (#a5ff3d) for CTAs and highlights
- Neon cyan (#00f5ff) for secondary accents
- Glassmorphism cards with subtle borders
- Editorial typography (Geist Sans + Geist Mono)
- Subtle animations with Framer Motion

## Quick Start

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000/singlegrain`

### Build for Production

```bash
npm run build
npm start
```

## Site Structure

```
/singlegrain
├── /                    # Homepage
├── /services            # Services overview
├── /services/[slug]     # Individual service pages
├── /case-studies        # Case studies grid
├── /case-studies/[slug] # Individual case study
├── /about               # About page (includes $2 story)
├── /resources           # Learning center / resources
├── /careers             # Careers page
└── /contact             # Contact form
```

## Content Management

All website content is centralized in:

**File:** `src/lib/singlegrain-content.ts`

Edit this file to update:
- Hero section text
- Services descriptions
- Case studies
- About page content
- Contact form labels
- All copy and messaging

### Example: Updating a Service

```typescript
// In src/lib/singlegrain-content.ts
export const services = [
  {
    id: "seo",
    title: "SEO",
    description: "Your description here...",
    outcomes: ["Outcome 1", "Outcome 2"],
    // ...
  }
]
```

## Pages

### Homepage (`/singlegrain`)
- Hero with headline and proof line
- 3 pillars (ROI-focused, Expert-led, AI-forward)
- Comparison table (Traditional vs Single Grain)
- Services preview grid
- Logo strip
- Founder credibility block
- Newsletter CTA
- Final contact CTA

### Services (`/singlegrain/services`)
- Overview of all services
- Individual service detail pages with:
  - Outcomes
  - Approach
  - What you get
  - Typical engagement

### Case Studies (`/singlegrain/case-studies`)
- Grid view of all case studies
- Individual case study pages with:
  - Results metrics
  - Challenge & Solution
  - Testimonial
  - Key learnings

### About (`/singlegrain/about`)
- Company story (bought for $2 in 2014)
- Mission
- Values (Be Open Minded, Be Reliable, Improvement Obsessed)
- Culture points
- Founder information

### Resources (`/singlegrain/resources`)
- Learning center with resource cards
- Playbooks, webinars, guides

### Careers (`/singlegrain/careers`)
- Company values
- Open positions list
- Apply buttons

### Contact (`/singlegrain/contact`)
- Contact form with all fields
- Trust bullets
- Location info

## Components

All components are in `src/components/singlegrain/`:
- `SGNavbar` - Sticky navigation
- `SGFooter` - Footer with links
- `SGHero` - Homepage hero section
- `SGPillars` - 3 pillars section
- `SGComparison` - Traditional vs Single Grain
- `SGServicesPreview` - Services grid preview
- `SGLogoStrip` - Company logos
- `SGFounder` - Founder credibility block
- `SGNewsletter` - Newsletter signup
- `SGContactCTA` - Final CTA section

## Design System

### Colors
- `bg-sg-dark` - Main dark background (#0b0f14)
- `bg-sg-dark-lighter` - Lighter dark (#141920)
- `bg-sg-dark-card` - Card background (#1a1f28)
- `text-sg-neon-lime` - Neon lime accent (#a5ff3d)
- `text-sg-neon-cyan` - Neon cyan accent (#00f5ff)
- `text-sg-light` - Light text (#f5f5f0)
- `text-sg-light-muted` - Muted light text (#b8b8b3)

### Typography
- `heading-xl` - 5xl/7xl bold
- `heading-lg` - 3xl/5xl bold
- `heading-md` - 2xl/3xl bold

### Components
- `glass-card` - Glassmorphism card
- `glass-card-hover` - Hover effect for cards
- `grain-bg` - Grain texture background
- `neon-lime` - Neon lime text with glow
- `neon-cyan` - Neon cyan text with glow

## SEO

- Metadata on all pages
- OpenGraph tags
- JSON-LD Organization schema on homepage
- OG image generation at `/singlegrain/api/og`
- Clean URLs
- Semantic HTML

## Performance

- Optimized images
- Static generation where possible
- Minimal JavaScript
- Fast loading times
- Lighthouse 90+ target

## Deployment

### Deploy to Vercel

1. **Via Vercel CLI:**
   ```bash
   vercel --prod
   ```

2. **Via GitHub:**
   - Push to GitHub
   - Connect repository to Vercel
   - Auto-deploy on push

### Environment Variables

No environment variables required for basic functionality.

## Customization

### Colors
Edit CSS variables in `src/app/singlegrain/singlegrain.css`:
```css
@theme {
  --color-sg-neon-lime: #a5ff3d;
  --color-sg-dark: #0b0f14;
  // ...
}
```

### Typography
Uses Geist Sans and Geist Mono. Edit in `src/app/singlegrain/layout.tsx`.

### Content
All content in `src/lib/singlegrain-content.ts` - edit to update copy.

## Key Features

- ✅ Dark mode + grain texture aesthetic
- ✅ Neon accent colors (lime/cyan)
- ✅ Glassmorphism cards
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Fast performance
- ✅ Accessible
- ✅ All pages implemented
- ✅ Fresh, original copy (not copied from Single Grain)
- ✅ Based on public facts

## Notes

- Form submissions are currently mocked (client-side only)
- All content is in `src/lib/singlegrain-content.ts` for easy editing
- Grain texture is animated via CSS
- Glassmorphism uses backdrop-blur
- Neon effects use text-shadow and box-shadow

## Support

For questions or issues:
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel: https://vercel.com/docs

