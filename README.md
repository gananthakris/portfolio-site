# Gokulkrishna A - Portfolio Website

A world-class personal portfolio built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Animated Hero Section** - Magnetic buttons with Framer Motion animations
- **Interactive Experience Timeline** - Scroll-triggered animations with impact metrics
- **Project Showcase** - Modal-based project details with problem/solution/impact format
- **Skills Visualization** - Animated progress rings and categorized skill groups
- **Contact Form** - EmailJS integration for seamless communication
- **Dark/Light Theme** - System-aware theme toggle with smooth transitions
- **SEO Optimized** - Complete metadata, sitemap, and robots.txt
- **Performance** - Optimized images, lazy loading, and Vercel Analytics
- **Fully Responsive** - Mobile-first design that works on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Animations**: Framer Motion
- **Analytics**: Vercel Analytics
- **Email**: EmailJS
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your EmailJS credentials:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Get your EmailJS keys from [https://www.emailjs.com/](https://www.emailjs.com/)

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update name, title, and description
   - Replace profile image at `/public/Gokul.jpeg`

2. **About Section** (`src/components/About.tsx`):
   - Update your story and background

3. **Experience** (`src/components/Experience.tsx`):
   - Update work experience in the `experiences` array

4. **Projects** (`src/components/Projects.tsx`):
   - Update projects in the `projects` array
   - Add project images to `/public/`

5. **Skills** (`src/components/Skills.tsx`):
   - Update skills and proficiency levels

6. **Contact** (`src/components/Contact.tsx`):
   - Update email and social links

### Theme Colors

The portfolio uses a consistent gradient theme (`#4f46e5` → `#7c3aed`). To customize:

1. Update gradient classes in components (search for `from-blue-600 to-purple-600`)
2. Update CSS variables in `src/app/globals.css`

## 📝 SEO Configuration

- Update `src/app/layout.tsx` with your metadata
- Update `src/app/sitemap.ts` with your domain
- Update `src/app/robots.ts` with your domain

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The site will automatically deploy on every push to main.

## 📊 Performance

The portfolio is optimized for:
- **Lighthouse Score**: ≥95
- **Core Web Vitals**: All green
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Font Optimization**: Next.js font optimization

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [TailwindCSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)

---

**Made with ❤️ by Gokulkrishna A**
