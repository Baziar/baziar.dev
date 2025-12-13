# Baziar.dev - Portfolio Website

A modern, responsive personal portfolio website for Morteza Baziar, a full-stack developer and creator of RapidKit framework.

**Live Demo:** https://baziar.dev

## Features

✨ **Modern Design**

- Responsive layout that works on all devices
- Beautiful gradient animations and smooth transitions
- Dark/Light mode toggle with smooth theme switching
- Professional typography with Outfit font for headings

🚀 **Performance Optimized**

- Built with Next.js 16 and Turbopack
- Optimized images with Next.js Image component
- Lazy loading for projects section
- Web Vitals monitoring and performance tracking
- Static pre-rendering for fast page loads
- ~90+ Lighthouse score

📱 **Mobile First**

- Hamburger navigation menu on mobile
- Responsive typography and spacing
- Touch-friendly interactive elements
- Optimized for all screen sizes

🔍 **SEO Optimized**

- JSON-LD structured data (Person schema)
- Dynamic sitemap.xml
- robots.txt configuration
- Comprehensive metadata
- Open Graph and Twitter card support

🎨 **Components**

- Animated Hero Section with gradient text
- About Section with tech stack showcase
- Projects Grid with hover effects
- Contact Section with social links
- Smooth animations with Framer Motion

## Tech Stack

**Frontend:**

- Next.js 16.0.1 (with Turbopack)
- React 19.2.0
- TypeScript
- Tailwind CSS 3.4.18
- Framer Motion (animations)
- Lucide React (icons)

**Fonts:**

- Inter (body text)
- Outfit (headings)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Baziar/baziar.dev.git
cd baziar-dev

# Install dependencies
yarn install

# Start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
yarn dev          # Start development server
yarn build        # Create production build
yarn start        # Start production server
yarn lint         # Run ESLint
yarn lint:fix     # Run ESLint and auto-fix issues
yarn format       # Format code with Prettier
yarn format:check # Check code formatting
yarn type-check   # Run TypeScript type checking
```

### Git Workflow & Quality Checks

This project uses **Husky** and **lint-staged** to ensure code quality:

**Pre-commit Hook:**

- ✅ Auto-formats code with Prettier
- ✅ Runs ESLint and fixes issues
- ✅ Checks only staged files (fast!)

**Pre-push Hook:**

- ✅ Runs full production build
- ✅ Ensures no build errors before push
- ✅ Prevents broken deployments

**To commit changes:**

```bash
git add .
git commit -m "feat: your changes"  # Triggers lint-staged
git push                             # Triggers build check
```

## Project Structure

```
baziar-dev/
├── app/
│   ├── page.tsx                 # Main page
│   ├── layout.tsx               # Root layout with metadata
│   ├── globals.css              # Global styles
│   ├── theme-provider.tsx       # Dark mode context
│   ├── theme-toggle.tsx         # Dark mode toggle component
│   ├── sitemap.ts               # Dynamic sitemap
│   ├── robots.ts                # Robots configuration
├── components/
│   ├── navigation.tsx           # Header with mobile menu
│   ├── hero-section.tsx         # Hero section
│   ├── about-section.tsx        # About header
│   ├── projects-header.tsx      # Projects header
│   ├── projects-grid.tsx        # Projects grid with animations
│   ├── contact-header.tsx       # Contact header
│   └── contact-buttons.tsx      # Contact action buttons
├── lib/
│   └── web-vitals.ts            # Web Vitals monitoring
├── public/
│   ├── baziar-avatar.png        # Profile image
│   ├── RapidKit.png             # RapidKit logo
│   └── robots.txt               # Robots file
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json                # TypeScript configuration
```

## Performance

- **Lighthouse Score:** 90+
- **Build Time:** ~3.7s
- **Bundle Size:** Optimized with tree-shaking
- **Image Optimization:** Next.js Image with lazy loading
- **Web Vitals:** Monitored and optimized

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Deploy on Vercel (Recommended)

1. Push to GitHub
2. Go to vercel.com/new
3. Import the repository
4. Vercel will auto-detect Next.js and deploy automatically

### Custom Domain

1. Purchase domain (e.g., baziar.dev)
2. In Vercel dashboard, go to Settings → Domains
3. Add your custom domain
4. Update DNS records at your registrar

## Author

**Morteza Baziar**

- Website: https://baziar.dev
- GitHub: https://github.com/Baziar
- LinkedIn: https://linkedin.com/in/baziar
- Email: baziar@live.com

## RapidKit

This portfolio showcases [RapidKit](https://getrapidkit.com), an open-source framework for generating production-ready FastAPI & NestJS projects.

- GitHub: https://github.com/getrapidkit
- NPM: https://npmjs.com/package/rapidkit

## License

MIT License - feel free to use this as a template for your own portfolio!

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
