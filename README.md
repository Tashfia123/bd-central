# BNP Central Website

Official central landing website for Bangladesh Nationalist Party (BNP).

## Tech Stack

- **React 18+** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations

## Getting Started

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Implementation Status

### ✅ Part 1: Hero Section + BNP Identity Strip
- [x] Hero Section with background image ([hero.jpeg](public/hero.jpeg))
- [x] Dark gradient overlay for text readability
- [x] Slogan image display area (requires `slogan.png` in `/public` folder)
- [x] BNP Identity Strip with logo and party name
- [x] Smooth fade-in animations
- [x] Fully responsive design

### ✅ Part 2: Video Carousel Section (সংবাদ ও আপডেট)
- [x] Section title with Bengali text and green underline
- [x] Interactive video carousel with navigation arrows
- [x] Center card scaling emphasis
- [x] Video modal with blur overlay
- [x] Auto-play functionality
- [x] Keyboard navigation (Arrow keys, ESC)
- [x] Carousel indicators
- [x] Mock video data structure

### ✅ Part 3: Candidates Section (ফটো গ্যালারি)
- [x] Dual auto-scrolling carousels (left→right, right→left)
- [x] Smooth infinite scroll animation
- [x] Candidate cards with hover effects
- [x] Click navigation to portfolio pages
- [x] "See All" button → Candidates Grid page
- [x] Tarique Rahman featured first in grid
- [x] Portfolio placeholder pages
- [x] Mock candidate data (10 leaders)

### ✅ Part 4: Call to Action Section (কিভাবে ভোট দেবেন)
- [x] Three-step voting process cards
- [x] Arrow connectors between steps
- [x] Icons for each step
- [x] Additional information panel
- [x] Fully responsive layout

### ✅ Part 5: Footer
- [x] BNP branding with logo
- [x] Multi-column footer layout
- [x] Social media links (Facebook, YouTube, Instagram, Twitter/X, Telegram, TikTok)
- [x] Quick links to About, Resources, Updates
- [x] Legal links (Terms, Privacy, Contact, etc.)
- [x] Copyright and attribution

## Assets Required

Place these files in the `/public` folder:
- ✅ `bnp-logo.png` - BNP official logo
- ✅ `hero.jpeg` - Hero section background
- ⚠️ `slogan.png` - "Shobar Age Bangladesh" slogan image (REQUIRED)
- ⚠️ `video-thumbnails/*.jpg` - Video thumbnail images (5 videos)
- ⚠️ `candidates/*.jpg` - Candidate photo images (10 leaders)

## Project Structure

```
BNP-Central/
├── public/
│   ├── bnp-logo.png
│   ├── hero.jpeg
│   ├── slogan.png (add this)
│   ├── video-thumbnails/
│   │   └── (add video thumbnail images)
│   └── candidates/
│       └── (add candidate images)
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── BNPIdentityStrip.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── VideoCarouselSection.tsx
│   │   ├── CandidatesSection.tsx
│   │   └── CallToActionSection.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── CandidatesGrid.tsx
│   │   └── CandidatePortfolio.tsx
│   ├── data/
│   │   ├── videos.ts
│   │   └── candidates.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Design Philosophy

- **Subtle BNP green theme** inspired by bnpbd.org
- **Clean, professional, political landing page**
- **White backgrounds, green accents, black text**
- **No flashy gradients** - dignified, modern, trustworthy
- **No navbar** - smooth scrolling experience

## Color Palette

The custom BNP green palette is defined in [tailwind.config.js](tailwind.config.js):
- Primary: `#006747`
- Shades from 50 (lightest) to 900 (darkest)

## Routing

The application uses React Router with the following routes:

- `/` - Home page (all sections)
- `/candidates` - Full grid view of all candidates
- `/candidate/:id` - Individual candidate portfolio placeholder page

## Features

### Video Carousel
- Interactive carousel with left/right navigation
- Center card emphasis with scaling
- Click to open video in modal overlay
- Keyboard navigation support
- Smooth animations with Framer Motion

### Candidates Section
- Dual infinite-scrolling carousels
- Top carousel: left → right
- Bottom carousel: right → left
- Hover effects with image scaling
- Click to navigate to portfolio pages

### Call to Action
- Three-step voting process visualization
- Connected with arrow indicators
- Responsive card layout
- Icons and descriptive text

### Footer
- Comprehensive site navigation
- Social media integration
- Legal and policy links
- BNP branding and attribution

## Data Management

All data is stored in TypeScript files in the `/src/data` folder:
- `videos.ts` - Video carousel data (5 sample videos)
- `candidates.ts` - Candidate information (10 leaders, Tarique Rahman featured first)

Images are referenced with placeholder URLs. Replace with actual images in the `/public` folder.

## Notes

- No backend required - static data will be mocked in JSON/TS files
- Built to link to 300+ individual portfolio websites
- Focus on performance and accessibility
- All text in Bengali (বাংলা) for authentic experience
- Smooth scroll behavior enabled globally
- Mobile-first responsive design