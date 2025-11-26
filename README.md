# QIWO Global Logistic Website

Premium Next.js 14 (App Router) one-page website for QIWO Import & Export. Features advanced animations, interactive components, and a world-class design system.

## 🌟 Advanced Features

### Design & UX
- **Scroll Progress Indicator** - Gradient progress bar at page top
- **Parallax Hero** - Video background with dynamic overlay opacity
- **Glassmorphism Header** - Frosted glass effect with backdrop blur
- **Animated Statistics** - CountUp animations on scroll into view
- **Pattern Backgrounds** - Subtle grid and dot patterns on sections
- **Micro-interactions** - Hover lifts, scale transforms, and smooth transitions

### Interactive Components
- **Testimonials Carousel** - Auto-rotating customer reviews with manual controls
- **FAQ Accordion** - Expandable Q&A with smooth height animations
- **Animated Counters** - Number animations for statistics
- **WhatsApp Button** - Pulsing chat icon with hover effects

### Performance & SEO
- Server Components where possible
- Optimized images and video
- SEO metadata per page
- Smooth scroll behavior
- Font optimization

## 🎨 Design System

**Colors (from logo)**
- Primary Navy: `#0B2E5B`
- Deep Navy: `#071D3B`
- Light Blue: `#1F6FE5`
- Accent Red: `#D6332E`

**Typography**
- Headers: Up to 7xl (hero), 3-5xl (sections)
- Body: Base to xl with relaxed leading
- Tracking: Tight for headers, wide for eyebrows

**Spacing**
- Sections: py-20 / py-32
- Cards: p-6 / p-8
- Gaps: gap-4 / gap-6 / gap-8
- Rounded: rounded-2xl (16px)

**Shadows**
- Cards: shadow-lg → shadow-xl on hover
- Buttons: shadow-lg with color tints
- Header: shadow-lg with border

## 📁 Project Structure

```
app/
  layout.tsx          # Root layout with SEO
  page.tsx            # One-page home with all sections
  about/page.tsx      # Company info (static page)
  services/page.tsx   # Service details
  gallery/page.tsx    # Image lightbox
  blog/
    page.tsx          # Blog list
    [slug]/page.tsx   # Blog post
  contact/page.tsx    # Contact form

components/
  Header.tsx          # Glassmorphism header with nav
  Footer.tsx          # Footer links
  Section.tsx         # Animated section wrapper
  AnimatedCounter.tsx # CountUp component
  Testimonials.tsx    # Carousel component
  FAQ.tsx             # Accordion component
  ScrollProgress.tsx  # Progress bar
  WhatsAppButton.tsx  # Floating CTA

content/blog/         # MDX blog posts

lib/mdx.ts            # Blog post utilities

styles/globals.css    # Tailwind + custom patterns
```

## 🚀 Quick Start

```pwsh
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:3000` to see the site!

## 📱 Pages & Sections

### Home (`/`) - One-Page Layout
1. **Hero** - Video background with parallax overlay
2. **Services** - 3 cards with icons (🚢 ✈️ 💼)
3. **Statistics** - Animated counters (1000m², 500+ clients, etc.)
4. **Why Choose Us** - 4 feature cards
5. **Testimonials** - Auto-rotating carousel
6. **Gallery Preview** - 4 images with hover effects
7. **Blog Preview** - 3 latest articles
8. **FAQ** - Interactive accordion
9. **Contact** - Kosovo & China offices

### Static Pages
- `/about` - Team, map, timeline
- `/services` - Detailed service breakdown
- `/gallery` - Full image grid with lightbox
- `/blog` - Article list + individual posts
- `/contact` - Contact form + maps

## ✨ Key Interactions

**On Scroll**
- Progress bar fills at top
- Sections fade in with stagger
- Stats count up on view
- Parallax hero overlay

**On Hover**
- Cards lift (-4px to -6px)
- Images scale (1.02-1.05)
- Buttons scale (0.95 on click)
- Gallery rotates (±1deg)

**Auto-Animations**
- WhatsApp icon pulses
- Testimonials rotate every 5s
- Hero content fades in on load

## 🎯 Assets Setup

**Required Files** (copy to `public/img/`)
```
public/img/logo.png          # Company logo
public/img/background.mp4    # Hero video
public/img/depo.jpg          # Gallery images
public/img/ngarkim1.jpg
public/img/treg1.jpg
public/img/kliente.jpg
```

## 🌐 Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## 📦 Production Build

```pwsh
npm run build
npm start
```

Deploy to Vercel, Netlify, or any Node.js host.

## 🔧 Customization

**Change Colors**
Edit `tailwind.config.js`:
```js
colors: {
  brand: {
    DEFAULT: "#0B2E5B",  // Your primary
    dark: "#071D3B",
    light: "#1F6FE5",
    red: "#D6332E",
  }
}
```

**Add/Edit Sections**
Use the `<Section>` component:
```tsx
<Section eyebrow="Label" title="Heading" desc="Subtitle" className="bg-white">
  {/* Your content */}
</Section>
```

**Modify Animations**
All animations use framer-motion. Adjust durations, delays, and transitions in component props.

---

Built with ❤️ for QIWO Global Logistic

# ermal
