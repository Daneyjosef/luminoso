# Quick Start Reference

## 🚀 Get Running in 3 Steps

```powershell
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser
# → http://localhost:3000
```

---

## 📂 Key Files to Edit

| Need to Change | File Location |
|---|---|
| **Colors/Branding** | `tailwind.config.ts` |
| **Company Name** | All component files (search & replace) |
| **Portfolio Items** | `src/components/sections/PortfolioPreviewSection.tsx`<br/>`src/components/pages/PortfolioPage.tsx` |
| **Contact Info** | `src/components/sections/ContactSection.tsx` |
| **Background Video** | `src/components/sections/HeroSection.tsx` |
| **Navigation Links** | `src/components/layout/Navbar.tsx` |
| **Team Members** | `src/components/sections/AboutSection.tsx` |
| **Services** | `src/components/sections/ServicesSection.tsx` |

---

## 🎨 Design Colors

```css
Orange:  #F28C48   /* Primary buttons, accents */
Red:     #F55252   /* Hover states, gradients */
Dark:    #0F0F0F   /* Background */
Light:   #FFFFFF   /* Text */
```

---

## 📝 Common Commands

```powershell
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Check code quality
```

---

## 🌐 Routes

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | `page.tsx` | Landing page (all sections) |
| `/portfolio` | `portfolio/page.tsx` | Portfolio gallery |

---

## 🎬 Sections on Landing Page

1. **Hero** - Video background with hero text
2. **About** - Team member showcase
3. **Services** - 4 service cards
4. **Portfolio** - Preview of work (6 items)
5. **Contact** - Contact form + info
6. **Navbar** - Sticky header
7. **Footer** - Links & social

---

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` (tailwind: `< sm`)
- **Tablet**: `640px - 1024px` (tailwind: `md - lg`)
- **Desktop**: `> 1024px` (tailwind: `> lg`)

---

## 🎭 Animation Libraries Used

- **Framer Motion**: Main animation library
- **CSS Animations**: Tailwind, globals.css
- **Hover Effects**: Tailwind, Framer Motion

---

## 🛠 Setup Requirements

- **Node.js 18+** (Download: https://nodejs.org/)
- **Code Editor** (VS Code recommended)
- **Internet** (for first-time dependency install)

---

## 📚 Documentation Files

- `README.md` - Main project documentation
- `SETUP.md` - Installation & setup guide
- `PROJECT_SUMMARY.md` - Detailed project overview
- `QUICK_REFERENCE.md` - This file

---

## 🆘 Troubleshooting Quick Links

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Dependencies fail | `rm node_modules && npm install` |
| Build errors | `rm .next && npm run build` |
| TypeScript errors | Check component imports |

---

## ✅ Project Status

- [x] Next.js App Router setup
- [x] Tailwind CSS configured
- [x] Framer Motion animations
- [x] All sections built
- [x] Portfolio page complete
- [x] Responsive design
- [x] Dark theme
- [x] Brand colors
- [x] TypeScript types

**Ready to customize & deploy! 🚀**

---

## 📧 Need Help?

1. Check **SETUP.md** for installation issues
2. Check **README.md** for feature documentation
3. Check **PROJECT_SUMMARY.md** for detailed overview
4. Review component files for code examples
