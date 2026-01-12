# 🚀 Quick Start Guide - New Components

## Files Created

### Components
- ✅ [FeaturedNewsCarousel.tsx](src/components/FeaturedNewsCarousel.tsx) - Center-focused news carousel
- ✅ [InfiniteGalleryCarousel.tsx](src/components/InfiniteGalleryCarousel.tsx) - Dual-direction infinite gallery
- ✅ [SocialMediaCTA.tsx](src/components/SocialMediaCTA.tsx) - Social media connect section

### Sections (Pre-configured wrappers)
- ✅ [NewsSection.tsx](src/sections/NewsSection.tsx) - Full section with heading + carousel
- ✅ [GallerySection.tsx](src/sections/GallerySection.tsx) - Gallery wrapper

### Data Files
- ✅ [news.ts](src/data/news.ts) - Sample news articles (6 items)
- ✅ [gallery.ts](src/data/gallery.ts) - Sample gallery images (10 items)

### Documentation
- ✅ [COMPONENTS_GUIDE.md](COMPONENTS_GUIDE.md) - Full documentation
- ✅ [INTEGRATION_EXAMPLE.tsx](INTEGRATION_EXAMPLE.tsx) - Code examples
- ✅ [QUICK_START.md](QUICK_START.md) - This file

---

## 3-Minute Integration

### Step 1: Open Home.tsx
```bash
# Location: src/pages/Home.tsx
```

### Step 2: Add Imports (Top of file)
```tsx
import GallerySection from '../sections/GallerySection';
import NewsSection from '../sections/NewsSection';
import SocialMediaCTA from '../components/SocialMediaCTA';
```

### Step 3: Add Components (Inside return statement)
```tsx
const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BNPIdentityStrip />
      <GallerySection />           // 🆕 Add this
      <VideoCarouselSection />
      <NewsSection />              // 🆕 Add this
      <CandidatesSection />
      <CallToActionSection />
      <SocialMediaCTA />           // 🆕 Add this
      <Footer />
    </div>
  );
};
```

### Step 4: Save and Test
```bash
npm run dev
# Open http://localhost:5173
```

---

## Customization (5 minutes)

### Update News Content
**File**: [src/data/news.ts](src/data/news.ts)

```typescript
export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    image: 'YOUR_IMAGE_URL',
    category: 'আপনার ক্যাটাগরি',
    date: '১২ জানুয়ারি ২০২৬',
    title: 'আপনার শিরোনাম',
    description: 'আপনার বিবরণ',
  },
  // Add more...
];
```

### Update Gallery Images
**File**: [src/data/gallery.ts](src/data/gallery.ts)

```typescript
export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'YOUR_IMAGE_URL',
    alt: 'বর্ণনা',
  },
  // Add more...
];
```

### Update Social Media Links
**File**: [src/components/SocialMediaCTA.tsx](src/components/SocialMediaCTA.tsx)

Find line ~15 and update:
```typescript
{
  name: 'Facebook Page',
  url: 'https://www.facebook.com/YOUR_PAGE',  // Change this
  // ...
}
```

---

## Component Preview

### 1️⃣ Featured News Carousel
![Preview](https://via.placeholder.com/800x400/006747/ffffff?text=News+Carousel)
- Center card is emphasized
- Side preview cards (desktop only)
- Smooth animations
- Navigation arrows + dots

### 2️⃣ Infinite Gallery Carousel
![Preview](https://via.placeholder.com/800x300/006747/ffffff?text=Gallery+Carousel)
- Row 1: Scrolls left → right
- Row 2: Scrolls right → left
- Pause on hover
- Infinite seamless loop

### 3️⃣ Social Media CTA
![Preview](https://via.placeholder.com/800x300/006747/ffffff?text=Social+CTA)
- Facebook Page, Group, YouTube, Twitter
- Platform-authentic colors
- Hover animations
- Opens in new tab

---

## Troubleshooting

### Issue: Components not showing
✅ Check imports are correct
✅ Verify file paths
✅ Ensure components are inside `<div className="min-h-screen">`

### Issue: Images not loading
✅ Check image URLs in data files
✅ Ensure URLs are accessible
✅ Test with placeholder images first

### Issue: Bengali text broken
✅ Ensure files are UTF-8 encoded
✅ Check font is loaded in index.css
✅ Test in different browsers

---

## File Structure
```
BNP-Central/
├── src/
│   ├── components/
│   │   ├── FeaturedNewsCarousel.tsx    🆕
│   │   ├── InfiniteGalleryCarousel.tsx 🆕
│   │   └── SocialMediaCTA.tsx          🆕
│   ├── sections/
│   │   ├── NewsSection.tsx             🆕
│   │   └── GallerySection.tsx          🆕
│   ├── data/
│   │   ├── news.ts                     🆕
│   │   └── gallery.ts                  🆕
│   └── pages/
│       └── Home.tsx                    (Update this)
├── COMPONENTS_GUIDE.md                 🆕
├── INTEGRATION_EXAMPLE.tsx             🆕
└── QUICK_START.md                      🆕
```

---

## Next Steps

1. ✅ Integrate components into Home.tsx (see Step 1-4 above)
2. ✅ Replace sample data with real content
3. ✅ Update social media links
4. ✅ Test on mobile and desktop
5. ✅ Customize colors/spacing if needed

---

## Support

Need help?
- 📖 See [COMPONENTS_GUIDE.md](COMPONENTS_GUIDE.md) for full docs
- 💻 Check [INTEGRATION_EXAMPLE.tsx](INTEGRATION_EXAMPLE.tsx) for code samples
- 🐛 Test with default data first before customizing

---

**Ready to use!** All components are production-ready with TypeScript, responsive design, and accessibility built-in.
