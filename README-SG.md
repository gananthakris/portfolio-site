# Single Grain Website

A modern, premium marketing website for Single Grain built with Next.js, TypeScript, and Tailwind CSS.

## Theme: "Signal & Momentum"

This website features a fresh design system that's different from Single Grain's current site:
- Dark-mode optional
- Editorial typography
- Bold data cards
- Minimal gradients
- Asymmetric layouts
- Proof blocks as prominent cards

## Quick Start

### Run Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000/sg
```

### Build for Production

```bash
npm run build
npm start
```

## Content Management

All website content is centralized in a single file for easy editing:

**File:** `src/lib/content.ts`

Edit this file to update:
- Hero section text
- Services descriptions
- Case studies
- Testimonials
- About page content
- Contact form labels
- CTAs

### Example: Updating a Service

```typescript
// In src/lib/content.ts
export const services = {
  items: [
    {
      id: "seo",
      title: "SEO Services",
      description: "Your description here...",
      features: ["Feature 1", "Feature 2"],
      // ...
    }
  ]
}
```

After editing `content.ts`, the changes will automatically appear across all pages.

## Site Structure

```
/sg
├── /                    # Homepage
├── /services            # Services overview
├── /services/[slug]     # Individual service pages
├── /case-studies        # Case studies grid
├── /case-studies/[slug] # Individual case study
├── /about               # About page (includes $2 story)
├── /contact             # Contact form
├── /insights            # Blog placeholder
└── /careers             # Careers (links to careers site)
```

## Pages

### Homepage (`/sg`)
- Hero section with headline "Signal & Momentum"
- Stats section (3.2x ROI, 500+ companies, etc.)
- Services grid
- Proof section (featured case studies)
- Testimonials
- CTA section

### Services (`/sg/services`)
- Overview of all 6 services
- Individual service detail pages

### Case Studies (`/sg/case-studies`)
- Grid view of all case studies
- Individual case study detail pages with full story

### About (`/sg/about`)
- Company story (bought for $2 in 2014)
- Mission and values
- Founder information

### Contact (`/sg/contact`)
- Contact form with all fields
- Budget selection dropdown

## Components

All components are in `src/components/sg/`:
- `SGNavbar` - Sticky navigation
- `SGHero` - Homepage hero section
- `SGStats` - Statistics section
- `SGServices` - Services grid
- `SGProof` - Case studies proof section
- `SGTestimonials` - Testimonials carousel
- `SGCTA` - Call-to-action section
- `SGFooter` - Footer with links

## SEO & Metadata

Each page includes:
- Title tags
- Meta descriptions
- OpenGraph tags
- Clean URLs
- Semantic HTML

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
Edit Tailwind classes in components. The theme uses:
- Gray scale (white to black)
- Minimal color accents
- Dark mode support

### Typography
Uses Inter font from Google Fonts. Edit in `src/app/sg/layout.tsx`.

### Layout
All layouts are responsive and use Tailwind's grid system.

## Research Brief

See `research/brief.md` for the complete website strategy brief including:
- Positioning statement
- Services breakdown
- Proof points
- Voice & tone
- Target audience

## Notes

- All content is in `src/lib/content.ts` for easy editing
- Form submissions are currently mocked (client-side only)
- Images are optimized for performance
- All pages are statically generated where possible
- Dark mode is supported throughout

## Support

For questions or issues, refer to:
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel deployment: https://vercel.com/docs

