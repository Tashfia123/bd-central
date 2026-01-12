# 📁 Project Structure - New Components

## Complete File Tree

```
BNP-Central/
│
├── 📄 Documentation Files (NEW) ──────────────────────────────
│   ├── QUICK_START.md                    # 3-minute integration guide
│   ├── COMPONENTS_GUIDE.md               # Complete documentation
│   ├── COMPONENTS_SUMMARY.md             # Overview & summary
│   ├── NEW_COMPONENTS_README.md          # Technical specifications
│   ├── INTEGRATION_EXAMPLE.tsx           # Code examples
│   ├── IMPLEMENTATION_CHECKLIST.md       # Testing checklist
│   └── PROJECT_STRUCTURE.md              # This file
│
├── 📂 src/
│   │
│   ├── 📂 components/ ────────────────────────────────────────
│   │   ├── Footer.tsx                    # Existing
│   │   ├── HeroSection.tsx               # Existing
│   │   ├── BNPIdentityStrip.tsx          # Existing
│   │   ├── FeaturedNewsCarousel.tsx      # 🆕 NEW (350 lines)
│   │   ├── InfiniteGalleryCarousel.tsx   # 🆕 NEW (180 lines)
│   │   └── SocialMediaCTA.tsx            # 🆕 NEW (120 lines)
│   │
│   ├── 📂 sections/ ──────────────────────────────────────────
│   │   ├── VideoCarouselSection.tsx      # Existing
│   │   ├── CallToActionSection.tsx       # Existing
│   │   ├── CandidatesSection.tsx         # Existing
│   │   ├── NewsSection.tsx               # 🆕 NEW (45 lines)
│   │   └── GallerySection.tsx            # 🆕 NEW (12 lines)
│   │
│   ├── 📂 data/ ──────────────────────────────────────────────
│   │   ├── videos.ts                     # Existing
│   │   ├── candidates.ts                 # Existing
│   │   ├── news.ts                       # 🆕 NEW (6 articles)
│   │   └── gallery.ts                    # 🆕 NEW (10 images)
│   │
│   ├── 📂 pages/ ─────────────────────────────────────────────
│   │   ├── Home.tsx                      # ⚠️ UPDATE THIS
│   │   ├── CandidatesGrid.tsx            # Existing
│   │   └── CandidatePortfolio.tsx        # Existing
│   │
│   ├── App.tsx                            # Existing
│   ├── main.tsx                           # Existing
│   ├── index.css                          # Existing
│   └── vite-env.d.ts                      # Existing
│
├── 📂 Configuration Files ────────────────────────────────────
│   ├── package.json                       # Existing
│   ├── tsconfig.json                      # Existing
│   ├── vite.config.ts                     # Existing
│   ├── tailwind.config.js                 # Existing
│   ├── postcss.config.js                  # Existing
│   └── .gitignore                         # Existing
│
└── 📂 node_modules/                       # Dependencies
```

---

## 🆕 New Files Summary

### Components (3 files)
```
src/components/
├── FeaturedNewsCarousel.tsx       # Center-focused news carousel
├── InfiniteGalleryCarousel.tsx    # Dual-direction infinite gallery
└── SocialMediaCTA.tsx             # Social media CTA section
```

### Sections (2 files)
```
src/sections/
├── NewsSection.tsx                # Pre-configured news section wrapper
└── GallerySection.tsx             # Pre-configured gallery wrapper
```

### Data (2 files)
```
src/data/
├── news.ts                        # Sample news articles (6 items)
└── gallery.ts                     # Sample gallery images (10 items)
```

### Documentation (7 files)
```
Root directory/
├── QUICK_START.md                 # Quick integration guide
├── COMPONENTS_GUIDE.md            # Full documentation
├── COMPONENTS_SUMMARY.md          # Overview
├── NEW_COMPONENTS_README.md       # Technical specs
├── INTEGRATION_EXAMPLE.tsx        # Code examples
├── IMPLEMENTATION_CHECKLIST.md    # Testing checklist
└── PROJECT_STRUCTURE.md           # This file
```

**Total: 14 new files**

---

## 📊 Component Dependencies

```
Home.tsx (UPDATE THIS)
│
├─→ GallerySection.tsx
│   └─→ InfiniteGalleryCarousel.tsx
│       └─→ gallery.ts (data)
│
├─→ NewsSection.tsx
│   └─→ FeaturedNewsCarousel.tsx
│       └─→ news.ts (data)
│
└─→ SocialMediaCTA.tsx
    └─→ (no external data)
```

---

## 🔄 Integration Flow

```
┌─────────────────────────────────────────────────────────────┐
│ Step 1: Add Imports to Home.tsx                             │
├─────────────────────────────────────────────────────────────┤
│ import GallerySection from '../sections/GallerySection'     │
│ import NewsSection from '../sections/NewsSection'           │
│ import SocialMediaCTA from '../components/SocialMediaCTA'   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ Step 2: Add Components to JSX                               │
├─────────────────────────────────────────────────────────────┤
│ <HeroSection />                                             │
│ <BNPIdentityStrip />                                        │
│ <GallerySection />              ← NEW                       │
│ <VideoCarouselSection />                                    │
│ <NewsSection />                 ← NEW                       │
│ <CandidatesSection />                                       │
│ <CallToActionSection />                                     │
│ <SocialMediaCTA />              ← NEW                       │
│ <Footer />                                                  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ Step 3: Customize Data Files                                │
├─────────────────────────────────────────────────────────────┤
│ • Update src/data/news.ts with real articles                │
│ • Update src/data/gallery.ts with real images               │
│ • Update social links in SocialMediaCTA.tsx                 │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ Step 4: Test & Deploy                                       │
├─────────────────────────────────────────────────────────────┤
│ • npm run dev                                               │
│ • Test on desktop & mobile                                  │
│ • npm run build                                             │
│ • Deploy                                                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 📦 Component Size Breakdown

| Component | Lines | Bundle Size | Dependencies |
|-----------|-------|-------------|--------------|
| FeaturedNewsCarousel.tsx | ~350 | ~8 KB | Framer Motion |
| InfiniteGalleryCarousel.tsx | ~180 | ~6 KB | None (native JS) |
| SocialMediaCTA.tsx | ~120 | ~5 KB | Framer Motion |
| NewsSection.tsx | ~45 | ~2 KB | FeaturedNewsCarousel |
| GallerySection.tsx | ~12 | ~1 KB | InfiniteGalleryCarousel |
| news.ts | ~50 | <1 KB | None |
| gallery.ts | ~40 | <1 KB | None |
| **Total** | **~797** | **~23 KB** | Framer Motion |

---

## 🎯 File Purposes

### Core Components

#### [FeaturedNewsCarousel.tsx](src/components/FeaturedNewsCarousel.tsx)
- **Purpose**: Display news articles in horizontal carousel
- **Features**: 3-card view, center focus, navigation
- **Uses**: Framer Motion, Tailwind CSS
- **Props**: `articles: NewsArticle[]`

#### [InfiniteGalleryCarousel.tsx](src/components/InfiniteGalleryCarousel.tsx)
- **Purpose**: Continuous scrolling image gallery
- **Features**: Dual-direction, infinite loop, pause on hover
- **Uses**: requestAnimationFrame, Tailwind CSS
- **Props**: `images: GalleryImage[]`, `speed?: number`

#### [SocialMediaCTA.tsx](src/components/SocialMediaCTA.tsx)
- **Purpose**: Social media call-to-action
- **Features**: Platform buttons, hover effects
- **Uses**: Framer Motion, Tailwind CSS
- **Props**: None (internal configuration)

### Section Wrappers

#### [NewsSection.tsx](src/sections/NewsSection.tsx)
- **Purpose**: Full section with heading + carousel
- **Contains**: Title, description, FeaturedNewsCarousel, "View All" button
- **Uses**: FeaturedNewsCarousel component

#### [GallerySection.tsx](src/sections/GallerySection.tsx)
- **Purpose**: Simple wrapper for gallery
- **Contains**: InfiniteGalleryCarousel
- **Uses**: InfiniteGalleryCarousel component

### Data Files

#### [news.ts](src/data/news.ts)
- **Purpose**: News articles data
- **Structure**: Array of NewsArticle objects
- **Fields**: id, image, category, date, title, description

#### [gallery.ts](src/data/gallery.ts)
- **Purpose**: Gallery images data
- **Structure**: Array of GalleryImage objects
- **Fields**: id, src, alt

---

## 📖 Documentation Files

### Quick Reference

#### [QUICK_START.md](QUICK_START.md) - Start Here! ⭐
- **Read Time**: 3 minutes
- **Purpose**: Fastest integration path
- **Contains**: Basic steps, quick customization

#### [COMPONENTS_SUMMARY.md](COMPONENTS_SUMMARY.md)
- **Read Time**: 5 minutes
- **Purpose**: High-level overview
- **Contains**: What's delivered, features, next steps

### Detailed Guides

#### [COMPONENTS_GUIDE.md](COMPONENTS_GUIDE.md)
- **Read Time**: 15 minutes
- **Purpose**: Complete component documentation
- **Contains**: Usage, customization, accessibility, troubleshooting

#### [NEW_COMPONENTS_README.md](NEW_COMPONENTS_README.md)
- **Read Time**: 10 minutes
- **Purpose**: Technical specifications
- **Contains**: Props, performance, browser support, testing

### Implementation Tools

#### [INTEGRATION_EXAMPLE.tsx](INTEGRATION_EXAMPLE.tsx)
- **Read Time**: 5 minutes
- **Purpose**: Code examples
- **Contains**: Integration patterns, custom layouts, responsive examples

#### [IMPLEMENTATION_CHECKLIST.md](IMPLEMENTATION_CHECKLIST.md)
- **Read Time**: As needed (reference)
- **Purpose**: Step-by-step testing
- **Contains**: Pre-launch checklist, common issues, success metrics

#### [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - This File
- **Read Time**: 2 minutes
- **Purpose**: Project organization
- **Contains**: File tree, dependencies, integration flow

---

## 🔗 Import Chains

### For News Carousel
```typescript
Home.tsx
  ↓ imports
NewsSection.tsx
  ↓ imports
FeaturedNewsCarousel.tsx
  ↓ imports
news.ts
```

### For Gallery Carousel
```typescript
Home.tsx
  ↓ imports
GallerySection.tsx
  ↓ imports
InfiniteGalleryCarousel.tsx
  ↓ imports
gallery.ts
```

### For Social CTA
```typescript
Home.tsx
  ↓ imports
SocialMediaCTA.tsx
  (no data imports)
```

---

## 📝 Files You Need to Edit

### Required (Must Edit)
- ✅ [src/pages/Home.tsx](src/pages/Home.tsx) - Add new component imports and JSX

### Recommended (Should Edit)
- ⚠️ [src/data/news.ts](src/data/news.ts) - Replace sample news with real content
- ⚠️ [src/data/gallery.ts](src/data/gallery.ts) - Replace sample images with real photos
- ⚠️ [src/components/SocialMediaCTA.tsx](src/components/SocialMediaCTA.tsx) - Update social media URLs

### Optional (Can Edit)
- 🔧 Component styling (Tailwind classes)
- 🔧 Animation speeds and durations
- 🔧 Component text and labels
- 🔧 Responsive breakpoints

---

## 🎨 Visual Page Layout (After Integration)

```
┌───────────────────────────────────────────────────────────┐
│                      Hero Section                         │ ← Existing
├───────────────────────────────────────────────────────────┤
│                  BNP Identity Strip                       │ ← Existing
├───────────────────────────────────────────────────────────┤
│               Gallery Section (NEW)                       │ ← 🆕
│       [→→→ Images scrolling right →→→]                   │
│       [←←← Images scrolling left ←←←]                    │
├───────────────────────────────────────────────────────────┤
│                 Video Carousel Section                    │ ← Existing
├───────────────────────────────────────────────────────────┤
│                 News Section (NEW)                        │ ← 🆕
│              [◄ Card  |  CARD  |  Card ►]                │
├───────────────────────────────────────────────────────────┤
│                  Candidates Section                       │ ← Existing
├───────────────────────────────────────────────────────────┤
│                Call to Action Section                     │ ← Existing
├───────────────────────────────────────────────────────────┤
│              Social Media CTA (NEW)                       │ ← 🆕
│         [Facebook] [Group] [YouTube] [Twitter]            │
├───────────────────────────────────────────────────────────┤
│                        Footer                             │ ← Existing
└───────────────────────────────────────────────────────────┘
```

---

## 🚀 Recommended Reading Order

### For Quick Integration (10 minutes)
1. [QUICK_START.md](QUICK_START.md) - 3 min
2. [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) (this file) - 2 min
3. Update [Home.tsx](src/pages/Home.tsx) - 2 min
4. Update data files - 3 min

### For Full Understanding (45 minutes)
1. [COMPONENTS_SUMMARY.md](COMPONENTS_SUMMARY.md) - 5 min
2. [COMPONENTS_GUIDE.md](COMPONENTS_GUIDE.md) - 15 min
3. [NEW_COMPONENTS_README.md](NEW_COMPONENTS_README.md) - 10 min
4. [INTEGRATION_EXAMPLE.tsx](INTEGRATION_EXAMPLE.tsx) - 5 min
5. [IMPLEMENTATION_CHECKLIST.md](IMPLEMENTATION_CHECKLIST.md) - 10 min

### For Development (as needed)
- [INTEGRATION_EXAMPLE.tsx](INTEGRATION_EXAMPLE.tsx) - Copy code patterns
- [IMPLEMENTATION_CHECKLIST.md](IMPLEMENTATION_CHECKLIST.md) - Testing reference
- [COMPONENTS_GUIDE.md](COMPONENTS_GUIDE.md) - Customization options

---

## ✅ Quick Verification

After integration, verify these files exist:

```bash
# Check components
ls src/components/FeaturedNewsCarousel.tsx
ls src/components/InfiniteGalleryCarousel.tsx
ls src/components/SocialMediaCTA.tsx

# Check sections
ls src/sections/NewsSection.tsx
ls src/sections/GallerySection.tsx

# Check data
ls src/data/news.ts
ls src/data/gallery.ts

# Check docs
ls QUICK_START.md
ls COMPONENTS_GUIDE.md
```

All should exist without errors!

---

**Ready to integrate?** → Start with [QUICK_START.md](QUICK_START.md)

---

*Project Structure v1.0 | January 2026*
