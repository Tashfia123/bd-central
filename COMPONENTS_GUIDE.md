# BNP Central - Component Implementation Guide

This guide covers the three new components added to the BNP Central website.

---

## 📰 1. Featured News Card Carousel

### Overview
A center-focused horizontal carousel displaying news articles with smooth animations, category badges, and dates.

### Features
- ✅ Center card emphasis with scale effect
- ✅ Left & right preview cards (visible on desktop)
- ✅ Smooth transitions with Framer Motion
- ✅ Navigation arrows
- ✅ Pagination indicators
- ✅ Bengali font support
- ✅ Fully responsive
- ✅ Fallback images

### File Locations
- **Component**: `src/components/FeaturedNewsCarousel.tsx`
- **Data**: `src/data/news.ts`
- **Section**: `src/sections/NewsSection.tsx`

### Data Structure

```typescript
interface NewsArticle {
  id: string;           // Unique identifier
  image: string;        // Image URL
  category: string;     // Category name (e.g., "রেজিস্ট্রেশন আপডেট")
  date: string;         // Date in Bengali (e.g., "১৯ ডিসেম্বর")
  title: string;        // Article title in Bengali
  description: string;  // Brief description in Bengali
}
```

### Usage Example

```tsx
import FeaturedNewsCarousel from '../components/FeaturedNewsCarousel';
import { newsArticles } from '../data/news';

function MyComponent() {
  return (
    <div>
      <h2>সংবাদ ও আপডেট</h2>
      <FeaturedNewsCarousel articles={newsArticles} />
    </div>
  );
}
```

### Customization Options

**Add/Edit News Articles** in `src/data/news.ts`:

```typescript
export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    image: 'https://your-image-url.com/image.jpg',
    category: 'নতুন ঘোষণা',
    date: '১২ জানুয়ারি',
    title: 'আপনার শিরোনাম এখানে',
    description: 'আপনার বিবরণ এখানে লিখুন।',
  },
  // ... more articles
];
```

### Integration in Home Page

```tsx
// src/pages/Home.tsx
import NewsSection from '../sections/NewsSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <NewsSection />  {/* Add this line */}
      <Footer />
    </div>
  );
};
```

### Styling

The component uses Tailwind classes and respects your BNP green color palette:
- Primary color: `bnp-green` (#006747)
- Hover effects with scale transformations
- Shadow effects for depth
- Responsive breakpoints (mobile, tablet, desktop)

### Accessibility
- ✅ ARIA labels on navigation buttons
- ✅ Keyboard navigation support
- ✅ Alt text for images
- ✅ Semantic HTML structure

---

## 🎨 2. Dual-Direction Infinite Carousel Gallery

### Overview
A two-row continuous scrolling image gallery with opposite scroll directions, creating a dynamic marquee effect.

### Features
- ✅ First row scrolls left → right
- ✅ Second row scrolls right → left
- ✅ Infinite seamless loop
- ✅ Pause on hover
- ✅ Smooth 60fps animations using `requestAnimationFrame`
- ✅ Customizable scroll speed
- ✅ No visible seams or jumps
- ✅ Performance optimized

### File Locations
- **Component**: `src/components/InfiniteGalleryCarousel.tsx`
- **Data**: `src/data/gallery.ts`
- **Section**: `src/sections/GallerySection.tsx`

### Data Structure

```typescript
interface GalleryImage {
  id: string;   // Unique identifier
  src: string;  // Image URL
  alt: string;  // Alt text in Bengali
}
```

### Usage Example

```tsx
import InfiniteGalleryCarousel from '../components/InfiniteGalleryCarousel';
import { galleryImages } from '../data/gallery';

function MyComponent() {
  return (
    <InfiniteGalleryCarousel
      images={galleryImages}
      speed={40}  // pixels per second (default: 30)
    />
  );
}
```

### Customization Options

**Adjust Scroll Speed**:
```tsx
<InfiniteGalleryCarousel images={galleryImages} speed={50} />
// Higher number = faster scroll
// Recommended range: 20-60
```

**Add/Edit Gallery Images** in `src/data/gallery.ts`:

```typescript
export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://your-image-url.com/image1.jpg',
    alt: 'বর্ণনা এখানে',
  },
  // ... more images (recommended: 8-12 images)
];
```

### Integration in Home Page

```tsx
// src/pages/Home.tsx
import GallerySection from '../sections/GallerySection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GallerySection />  {/* Add at the top of page */}
      <Footer />
    </div>
  );
};
```

### Technical Details

- Uses `requestAnimationFrame` for smooth 60fps animation
- Triples image array to create seamless infinite loop
- Resets position when one set scrolls off screen
- Handles mouse events for pause on hover
- No CSS animations (pure JavaScript for better control)

### Performance Tips

- Use optimized images (WebP format recommended)
- Image size: 400x250px or 800x500px
- Keep total images between 8-15 for best performance
- Images are lazy-loaded by browser

---

## 📱 3. Social Media CTA Section

### Overview
A visually striking call-to-action section with pill-shaped social media buttons, encouraging users to connect on all platforms.

### Features
- ✅ Large centered heading with underline accent
- ✅ Four social platform buttons (Facebook Page, Facebook Group, YouTube, Twitter/X)
- ✅ Platform-specific colors and icons
- ✅ Hover animations (scale, icon movement, external link icon)
- ✅ Responsive grid layout
- ✅ Opens links in new tab
- ✅ Gradient background

### File Locations
- **Component**: `src/components/SocialMediaCTA.tsx`

### Usage Example

```tsx
import SocialMediaCTA from '../components/SocialMediaCTA';

function MyComponent() {
  return (
    <div>
      {/* Other content */}
      <SocialMediaCTA />
      <Footer />
    </div>
  );
}
```

### Customization

**Edit Social Media Links** in `src/components/SocialMediaCTA.tsx`:

```tsx
const socialLinks: SocialLink[] = [
  {
    name: 'Facebook Page',
    icon: <svg>...</svg>,
    url: 'https://www.facebook.com/YourPage',  // Change this
    color: 'bg-[#1877F2]',
    hoverColor: 'hover:bg-[#145dbf]',
  },
  // ... edit other platforms
];
```

**Add New Social Platform**:

```tsx
{
  name: 'Instagram',
  icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  url: 'https://www.instagram.com/YourAccount',
  color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400',
  hoverColor: 'hover:from-purple-700 hover:via-pink-600 hover:to-orange-500',
}
```

**Change Heading Text**:

```tsx
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
  আপনার নতুন শিরোনাম এখানে
</h2>
```

### Integration in Home Page

```tsx
// src/pages/Home.tsx
import SocialMediaCTA from '../components/SocialMediaCTA';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      {/* ... other sections */}
      <SocialMediaCTA />  {/* Add before footer */}
      <Footer />
    </div>
  );
};
```

### Button Colors

Platform colors are authentic to each social media brand:
- **Facebook**: `#1877F2` (official Facebook blue)
- **YouTube**: `#FF0000` (YouTube red)
- **Twitter/X**: `#000000` (new X branding black)

### Accessibility
- ✅ `rel="noopener noreferrer"` for security
- ✅ `target="_blank"` for new tab opening
- ✅ External link icon appears on hover
- ✅ Proper contrast ratios
- ✅ Touch-friendly button sizes (min 44px)

---

## 🚀 Complete Integration Example

Here's how to add all three components to your homepage:

```tsx
// src/pages/Home.tsx
import HeroSection from '../components/HeroSection';
import BNPIdentityStrip from '../components/BNPIdentityStrip';
import GallerySection from '../sections/GallerySection';      // NEW
import VideoCarouselSection from '../sections/VideoCarouselSection';
import NewsSection from '../sections/NewsSection';            // NEW
import CandidatesSection from '../sections/CandidatesSection';
import CallToActionSection from '../sections/CallToActionSection';
import SocialMediaCTA from '../components/SocialMediaCTA';    // NEW
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BNPIdentityStrip />
      <GallerySection />           {/* 1. Gallery at top */}
      <VideoCarouselSection />
      <NewsSection />              {/* 2. News carousel */}
      <CandidatesSection />
      <CallToActionSection />
      <SocialMediaCTA />           {/* 3. Social CTA before footer */}
      <Footer />
    </div>
  );
};

export default Home;
```

---

## 🎨 Styling & Theming

All components use your existing Tailwind configuration and BNP green color palette:

```javascript
// tailwind.config.js
colors: {
  'bnp-green': {
    DEFAULT: '#006747',
    50: '#e6f4f0',
    100: '#cce9e0',
    // ... etc
  },
}
```

Components automatically adapt to:
- ✅ Your color scheme
- ✅ Bengali fonts
- ✅ Responsive breakpoints
- ✅ Shadow and spacing conventions

---

## 📱 Responsive Behavior

### Mobile (< 768px)
- Featured News Carousel: Shows only center card
- Gallery Carousel: Smaller card sizes (w-64)
- Social CTA: Stacked buttons (1 column)

### Tablet (768px - 1024px)
- Featured News Carousel: Shows center card + hint of side cards
- Gallery Carousel: Medium card sizes (w-80)
- Social CTA: 2 columns

### Desktop (> 1024px)
- Featured News Carousel: Shows all 3 cards with parallax effect
- Gallery Carousel: Large card sizes (w-96)
- Social CTA: 4 columns

---

## ⚡ Performance Optimization

All components are optimized for performance:

1. **Framer Motion**: Hardware-accelerated animations
2. **Lazy Loading**: Images load as needed
3. **RequestAnimationFrame**: Smooth 60fps scrolling
4. **Optimized Re-renders**: React.memo and proper state management
5. **Fallback Images**: Graceful error handling

---

## 🧪 Testing Checklist

- [ ] Test on mobile devices (iOS & Android)
- [ ] Test on tablets
- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify Bengali text renders correctly
- [ ] Check animations are smooth (60fps)
- [ ] Test hover states
- [ ] Verify external links open in new tabs
- [ ] Test with slow network (image loading)
- [ ] Check keyboard navigation
- [ ] Verify touch gestures on mobile

---

## 🔧 Troubleshooting

### Issue: Images not loading
**Solution**: Check image URLs in data files, ensure CORS is enabled

### Issue: Animations are choppy
**Solution**: Reduce number of gallery images, optimize image sizes

### Issue: Bengali text displays incorrectly
**Solution**: Ensure proper UTF-8 encoding in files, check font loading

### Issue: Carousel not responding to clicks
**Solution**: Check z-index values, ensure no overlapping elements

---

## 📚 Additional Resources

- **Framer Motion Docs**: https://www.framer.com/motion/
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **React TypeScript Docs**: https://react-typescript-cheatsheet.netlify.app/

---

## 🤝 Need Help?

If you encounter issues or need customization:
1. Check this guide thoroughly
2. Review component source code comments
3. Test with example data first
4. Verify all imports are correct

---

**Last Updated**: January 2026
**Components Version**: 1.0.0
**Compatible with**: React 18+, TypeScript 5+, Tailwind CSS 3+
