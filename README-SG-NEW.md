# Single Grain Website

A complete, production-ready marketing website for Single Grain built with Next.js, TypeScript, and Tailwind CSS.

## Design Theme: Fresh Light Theme with Gradients

**Visual Identity:**
- Clean white background with gradient accents
- Blue color palette (#2563eb) inspired by Single Grain brand
- Professional typography (Inter font)
- Gradient backgrounds for sections
- Clean whitespace and modern card designs
- Smooth animations with Framer Motion

## Quick Start

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000/sg-new`

### Build for Production

```bash
npm run build
npm start
```

## Site Structure

```
/sg-new
├── /                    # Homepage
├── /services            # Services overview
├── /services/[slug]     # Individual service pages (SEO, Paid Media, Content, CRO)
├── /case-studies        # Case studies grid
├── /case-studies/[slug] # Individual case study pages
├── /about               # About page (includes $2 story)
├── /contact             # Contact form
├── /careers             # Careers page
└── /blog                # Blog homepage
    └── /[slug]          # Individual blog post template
```

## Content Management

All website content is centralized in:

**File:** `src/lib/sg-content.ts`

Edit this file to update:
- Hero section text
- Services descriptions
- Case studies
- About page content
- Contact form labels
- Blog posts
- All copy and messaging

## Pages

### Homepage (`/sg-new`)
- Hero section with headline and proof line
- Stats section (3.2x ROI, 500+ companies, etc.)
- Services preview grid
- Why Choose section
- Testimonials
- Final CTA

### Services (`/sg-new/services`)
- Overview of all 4 services
- Individual service detail pages with:
  - What you get
  - Expected outcomes
  - CTA to contact

### Case Studies (`/sg-new/case-studies`)
- Grid view of all case studies
- Individual case study pages with:
  - Results metrics
  - Challenge & Solution
  - Testimonial

### About (`/sg-new/about`)
- Company story (bought for $2 in 2014)
- Mission
- Values (Be Open Minded, Be Reliable, Improvement Obsessed)
- Founder information

### Contact (`/sg-new/contact`)
- Contact form with all fields
- Trust bullets
- Budget selection dropdown

### Careers (`/sg-new/careers`)
- Company values
- Open positions list
- Apply buttons

### Blog (`/sg-new/blog`)
- Blog homepage with post grid
- Individual blog post template

## Components

All components are in `src/components/sg-new/`:
- `SGNavbar` - Sticky navigation
- `SGFooter` - Footer with links and newsletter
- `SGHero` - Homepage hero section
- `SGStats` - Statistics section
- `SGServices` - Services grid preview
- `SGWhyChoose` - Why choose section
- `SGTestimonials` - Testimonials grid
- `SGCTA` - Call-to-action section

## Design System

### Colors
- `bg-sg-blue` - Primary blue (#2563eb)
- `bg-sg-blue-light` - Light blue (#3b82f6)
- `bg-sg-blue-dark` - Dark blue (#1e40af)
- `text-sg-accent` - Accent green (#10b981)
- `text-sg-purple` - Purple accent (#8b5cf6)

### Typography
- `heading-xl` - 5xl/7xl bold
- `heading-lg` - 3xl/5xl bold
- `heading-md` - 2xl/3xl bold

### Components
- `card` - White card with shadow
- `card-hover` - Hover effect for cards
- `btn-primary` - Primary button (blue)
- `btn-secondary` - Secondary button (outline)
- `gradient-section` - Gradient background section

## SEO

- Metadata on all pages
- OpenGraph tags
- JSON-LD Organization schema on homepage
- Clean URLs
- Semantic HTML

## Features

- ✅ Responsive design (mobile + desktop)
- ✅ Smooth scroll animations
- ✅ Clean, modern design
- ✅ SEO optimized
- ✅ Fast performance
- ✅ Accessible
- ✅ All pages implemented
- ✅ Real Single Grain content (adapted)
- ✅ No personal branding

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
Edit CSS variables in `src/app/sg-new/sg-new.css`:
```css
@theme {
  --color-sg-blue: #2563eb;
  // ...
}
```

### Typography
Uses Inter font from Google Fonts. Edit in `src/app/sg-new/layout.tsx`.

### Content
All content in `src/lib/sg-content.ts` - edit to update copy.

## Key Features

- ✅ Fresh light theme (not dark, not portfolio)
- ✅ Gradient backgrounds
- ✅ Clean whitespace
- ✅ Professional blue color scheme
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Fast performance
- ✅ All pages implemented
- ✅ Real Single Grain branding
- ✅ No personal content

## Notes

- Form submissions are currently mocked (client-side only)
- All content is in `src/lib/sg-content.ts` for easy editing
- Blog posts are template-based (can be extended with CMS)
- Images are placeholder-ready (add real images as needed)

## Support

For questions or issues:
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel: https://vercel.com/docs

