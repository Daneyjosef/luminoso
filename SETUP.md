## Installation & Setup Instructions

### Step 1: Install Node.js

Before proceeding, you need to install Node.js (which includes npm):

1. **Download Node.js** from https://nodejs.org/
   - Choose the LTS (Long Term Support) version
   - Download the Windows installer (.msi file)

2. **Install it** following the installation wizard
   - Accept all default options
   - Node.js and npm will be added to your system PATH

3. **Verify installation** by opening PowerShell and running:
   ```powershell
   node --version
   npm --version
   ```
   You should see version numbers for both.

---

### Step 2: Open Terminal in VS Code

1. Open VS Code with the `luminoso media` folder
2. Press `` Ctrl + ` `` to open the integrated terminal
3. Select "PowerShell" if prompted

---

### Step 3: Install Project Dependencies

In the terminal, run:
```powershell
npm install
```

This will download and install all the required packages:
- Next.js
- React & React DOM
- Tailwind CSS
- Framer Motion
- React Icons
- And more...

**This may take 2-5 minutes.** You'll see a progress bar and messages. Wait until you see the prompt return.

---

### Step 4: Start Development Server

Once installation is complete, run:
```powershell
npm run dev
```

You should see output like:
```
> dev
> next dev

  ▲ Next.js 15.1.3
  - Local:        http://localhost:3000
  - Environments: .env*.local

 ✓ Ready in 1.23s
```

---

### Step 5: Open Website

1. In your browser, go to: **http://localhost:3000**
2. You should see the Luminoso Media landing page!

---

## Project Features

### Landing Page (Home)
- **Hero Section**: Full-screen video with gradient overlay
- **About Section**: Team member showcase cards
- **Services Section**: 4 service cards with icon animations
- **Portfolio Preview**: 6 portfolio items with hover effects
- **Contact Section**: Contact form and social links
- **Navbar**: Sticky header with scroll effects
- **Footer**: Minimal footer with links

### Portfolio Page
- Visit `/portfolio` for dedicated portfolio page
- Filter between All / Video / Photography
- Click any item to view in lightbox modal

### Animations
- Smooth fade-in transitions on scroll
- Scale effects on hover
- Parallax backgrounds (video)
- Staggered card animations
- Button hover effects

---

## Available Commands

```powershell
# Start development server (default: localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint (check for code issues)
npm run lint
```

---

## Customization Guide

### 1. Change Brand Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    orange: '#F28C48',  // Change this
    red: '#F55252',     // Change this
  },
  dark: '#0F0F0F',      // Change this
  light: '#FFFFFF',     // Change this
}
```

### 2. Update Company Name

- Edit component files to replace "Luminoso Media"
- Update `tailwind.config.ts` for custom theme colors

### 3. Add Your Portfolio Items

Edit `src/components/sections/PortfolioPreviewSection.tsx` and `src/components/pages/PortfolioPage.tsx`:
```typescript
const portfolioItems = [
  {
    id: 1,
    title: 'Your Project Name',
    category: 'video', // or 'photography'
    image: 'your-image-url',
  },
  // Add more items...
];
```

### 4. Update Contact Information

Edit `src/components/sections/ContactSection.tsx`:
```typescript
const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'your@email.com',  // Change this
    href: 'mailto:your@email.com',
  },
  // Update phone number and location too...
];
```

### 5. Replace Background Videos

Edit `src/components/sections/HeroSection.tsx`:
```tsx
<source
  src="your-video-url.mp4"  // Replace this
  type="video/mp4"
/>
```

---

## Deployment

### Deploy to Vercel (Recommended)

1. Create an account at https://vercel.com
2. Connect your GitHub repository
3. Click "Deploy"
4. Your site goes live instantly!

### Deploy to Netlify

1. Create an account at https://netlify.com
2. Connect your repository
3. Build command: `npm run build`
4. Publish directory: `.next`

---

## Troubleshooting

### Port 3000 Already in Use
```powershell
npm run dev -- -p 3001
```
Then visit http://localhost:3001

### Node Modules Issues
```powershell
Remove-Item -Recurse -Force node_modules
rm package-lock.json
npm install
```

### Build Errors
```powershell
Remove-Item -Recurse -Force .next
npm run build
```

---

## File Structure

```
luminoso-media/
├── src/
│   ├── app/                           # Next.js App Router
│   │   ├── layout.tsx                 # Root layout wrapper
│   │   ├── page.tsx                   # Home page
│   │   ├── globals.css                # Global styles
│   │   └── portfolio/page.tsx         # Portfolio page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Navigation bar
│   │   │   └── Footer.tsx             # Footer
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx        # Hero with video
│   │   │   ├── AboutSection.tsx       # Team showcase
│   │   │   ├── ServicesSection.tsx    # Services grid
│   │   │   ├── PortfolioPreviewSection.tsx  # Portfolio preview
│   │   │   └── ContactSection.tsx     # Contact form
│   │   └── pages/
│   │       └── PortfolioPage.tsx      # Full portfolio page
│   └── utils/
│       └── helpers.ts                 # Helper functions
├── public/                            # Static assets
├── package.json                       # Dependencies
├── tailwind.config.ts                 # Tailwind setup
├── tsconfig.json                      # TypeScript config
├── next.config.js                     # Next.js config
└── README.md                          # Project documentation
```

---

## Next Steps

1. ✅ Install Node.js
2. ✅ `npm install` to install packages
3. ✅ `npm run dev` to start development
4. ✅ Open http://localhost:3000
5. ✅ Customize colors, content, and images
6. ✅ Deploy to Vercel when ready!

---

## Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React Icons**: https://react-icons.github.io/react-icons/

Enjoy building with Luminoso Media! 🚀
