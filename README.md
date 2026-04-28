# Luminoso Media - Modern Web Experience

A premium, high-end responsive website for Luminoso Media, a cutting-edge media production and content marketing agency. Built with Next.js, Tailwind CSS, and Framer Motion for smooth, cinematic animations.

## 🌟 Features

- **Modern Design**: Premium, cinematic aesthetic with bold typography and smooth transitions
- **Smooth Animations**: Framer Motion integration for elegant scroll effects, fade-ins, and parallax
- **Fully Responsive**: Mobile-first approach ensuring perfect experience on all devices
- **Performance Optimized**: Next.js App Router with server-side rendering capabilities
- **SEO Friendly**: Meta tags, structured data, and semantic HTML
- **Dark Theme**: Professional dark interface with vibrant orange/red accents

## 📱 Pages & Sections

### Landing Page (/)
- **Hero Section**: Full-screen video background with gradient overlay
- **About Section**: Team member showcases with hover effects
- **Services Section**: Grid of 4 key services with icon animations
- **Portfolio Preview**: Grid of recent work with lightbox integration
- **Contact Section**: Contact form and social links
- **Sticky Navbar**: Transparent header that becomes solid on scroll
- **Footer**: Minimal footer with links and social media

### Portfolio Page (/portfolio)
- Masonry/grid layout of portfolio pieces
- Filter tabs (All / Video / Photography)
- Lightbox modal for viewing full content
- Smooth transitions and animations

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion 11](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Components**: React 18 with TypeScript
- **Build Tool**: Next.js built-in bundler

## 🎨 Design System

### Color Palette
- **Primary Orange**: `#F28C48`
- **Primary Red**: `#F55252`
- **Dark**: `#0F0F0F`
- **Light**: `#FFFFFF`

### Typography
- Clean, modern sans-serif system fonts
- Bold, impactful headings
- Excellent readability across all screen sizes

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** (Download from [nodejs.org](https://nodejs.org/))
- **npm** or **yarn** package manager

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd "luminoso media"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - Navigate to `http://localhost:3000`
   - The site will auto-refresh as you make changes

### Build for Production

```bash
npm run build
npm start
```

This will create an optimized production build and start the production server.

## 📂 Project Structure

```
luminoso-media/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Landing page
│   │   ├── globals.css   # Global styles
│   │   └── portfolio/    # Portfolio page
│   ├── components/
│   │   ├── layout/       # Layout components (Navbar, Footer)
│   │   ├── sections/     # Landing page sections
│   │   └── pages/        # Full page components
│   └── utils/            # Helper functions
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## 🎬 Animation Features

- **Fade In/Out**: Smooth opacity transitions
- **Slide Up/Down**: Direction-aware entrance animations
- **Scale Transforms**: Zoom effects on hover
- **Parallax Effects**: Depth-based scrolling
- **Staggered Children**: Sequential animation timing
- **Auto-Play Videos**: Background videos with proper fallbacks

## 📱 Responsive Design Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are fully responsive and optimized for touch interactions.

## 🔧 Customization

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Add Framer Motion animations for visual appeal
3. Import and add to the landing page

### Changing Colors
Update the color variables in `tailwind.config.ts` under the `theme.extend.colors` section.

### Modifying Content
- Landing page content: Edit files in `src/components/sections/`
- Portfolio items: Update the `portfolioItems` array in respective components
- Text content: Update text strings in component files

## 🌐 Deployment

### Vercel (Recommended for Next.js)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
- **Netlify**: Supports Next.js with proper configuration
- **AWS Amplify**: Full Next.js support
- **Traditional Hosting**: Use `npm run build` and deploy the `.next` folder

## 📊 Performance

- Lighthouse Performance: 90+
- Core Web Vitals: Optimized
- Image Optimization: Next.js automatic image optimization
- Code Splitting: Automatic route-based code splitting

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Dependencies installation fails
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies
- Check for TypeScript errors: `npm run lint`

## 📝 License

© 2026 Luminoso Media. All rights reserved.

## 📧 Support

For issues or questions, please contact hello@luminosomedia.com

---

**Built with ❤️ by Luminoso Media Team**
