/**
 * INTEGRATION EXAMPLE
 *
 * This file shows how to integrate the three new components into your Home page.
 * Copy the relevant imports and component usage into your actual Home.tsx file.
 */

// ============================================
// STEP 1: Add these imports to Home.tsx
// ============================================

import HeroSection from '../components/HeroSection';
import BNPIdentityStrip from '../components/BNPIdentityStrip';
import VideoCarouselSection from '../sections/VideoCarouselSection';
import CandidatesSection from '../sections/CandidatesSection';
import CallToActionSection from '../sections/CallToActionSection';
import Footer from '../components/Footer';

// NEW IMPORTS - Add these three lines
import GallerySection from '../sections/GallerySection';
import NewsSection from '../sections/NewsSection';
import SocialMediaCTA from '../components/SocialMediaCTA';

// ============================================
// STEP 2: Update your Home component like this
// ============================================

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Existing Hero Section */}
      <HeroSection />

      {/* Existing BNP Identity Strip */}
      <BNPIdentityStrip />

      {/* 🆕 NEW: Gallery Carousel (Top of page) */}
      <GallerySection />

      {/* Existing Video Carousel */}
      <VideoCarouselSection />

      {/* 🆕 NEW: News Carousel Section */}
      <NewsSection />

      {/* Existing Candidates Section */}
      <CandidatesSection />

      {/* Existing Call to Action */}
      <CallToActionSection />

      {/* 🆕 NEW: Social Media CTA (Before Footer) */}
      <SocialMediaCTA />

      {/* Existing Footer */}
      <Footer />
    </div>
  );
};

export default Home;

// ============================================
// ALTERNATIVE LAYOUTS
// ============================================

/**
 * Option A: Minimal Integration
 * Only add the News Carousel and Social CTA
 */
const HomeMinimal = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BNPIdentityStrip />
      <VideoCarouselSection />
      <NewsSection />              // Just news
      <CandidatesSection />
      <CallToActionSection />
      <SocialMediaCTA />           // Just social CTA
      <Footer />
    </div>
  );
};

/**
 * Option B: Gallery Only at Top
 * Add gallery as a visual header
 */
const HomeWithGallery = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GallerySection />           // Gallery right after hero
      <BNPIdentityStrip />
      <VideoCarouselSection />
      <CandidatesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

/**
 * Option C: All Components, Custom Order
 * Customize the layout order as needed
 */
const HomeCustom = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BNPIdentityStrip />
      <GallerySection />           // Gallery showcase
      <NewsSection />              // Latest news
      <VideoCarouselSection />     // Video content
      <CandidatesSection />        // Candidates
      <CallToActionSection />      // Main CTA
      <SocialMediaCTA />           // Social media
      <Footer />
    </div>
  );
};

// ============================================
// STANDALONE COMPONENT USAGE EXAMPLES
// ============================================

/**
 * Example 1: Using Featured News Carousel directly
 */
import FeaturedNewsCarousel from '../components/FeaturedNewsCarousel';
import { newsArticles } from '../data/news';

function NewsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">সমস্ত সংবাদ</h1>
      <FeaturedNewsCarousel articles={newsArticles} />
    </div>
  );
}

/**
 * Example 2: Using Gallery Carousel directly
 */
import InfiniteGalleryCarousel from '../components/InfiniteGalleryCarousel';
import { galleryImages } from '../data/gallery';

function GalleryPage() {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold py-12">ফটো গ্যালারি</h1>
      <InfiniteGalleryCarousel images={galleryImages} speed={50} />
    </div>
  );
}

/**
 * Example 3: Using Social Media CTA directly
 */
import SocialMediaCTA from '../components/SocialMediaCTA';

function ContactPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-12">যোগাযোগ করুন</h1>
      <div className="container mx-auto px-4">
        {/* Contact form or other content */}
      </div>
      <SocialMediaCTA />
    </div>
  );
}

// ============================================
// CUSTOM DATA EXAMPLES
// ============================================

/**
 * Example: Using custom news data
 */
import { NewsArticle } from '../components/FeaturedNewsCarousel';

const customNews: NewsArticle[] = [
  {
    id: 'custom-1',
    image: 'https://example.com/my-image.jpg',
    category: 'জরুরি',
    date: '১২ জানুয়ারি ২০২৬',
    title: 'আপনার কাস্টম শিরোনাম',
    description: 'আপনার কাস্টম বিবরণ এখানে লিখুন।',
  },
  // ... more articles
];

function CustomNewsPage() {
  return <FeaturedNewsCarousel articles={customNews} />;
}

/**
 * Example: Using custom gallery images
 */
import { GalleryImage } from '../components/InfiniteGalleryCarousel';

const customGallery: GalleryImage[] = [
  {
    id: 'custom-g1',
    src: '/images/event1.jpg',
    alt: 'আমাদের ইভেন্ট',
  },
  // ... more images
];

function CustomGalleryPage() {
  return (
    <InfiniteGalleryCarousel
      images={customGallery}
      speed={35}  // Custom speed
    />
  );
}

// ============================================
// RESPONSIVE CUSTOMIZATION EXAMPLES
// ============================================

/**
 * Example: Hide gallery on mobile
 */
function ResponsiveHome() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BNPIdentityStrip />

      {/* Show gallery only on desktop */}
      <div className="hidden lg:block">
        <GallerySection />
      </div>

      <VideoCarouselSection />
      <NewsSection />
      <Footer />
    </div>
  );
}

/**
 * Example: Different layouts for mobile vs desktop
 */
function AdaptiveHome() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Mobile: Show news first */}
      <div className="block lg:hidden">
        <NewsSection />
        <VideoCarouselSection />
      </div>

      {/* Desktop: Show gallery and different order */}
      <div className="hidden lg:block">
        <GallerySection />
        <VideoCarouselSection />
        <NewsSection />
      </div>

      <Footer />
    </div>
  );
}

// ============================================
// NOTES FOR IMPLEMENTATION
// ============================================

/*
✅ CHECKLIST BEFORE GOING LIVE:

1. Update social media URLs in SocialMediaCTA.tsx with real links
2. Replace placeholder news data in src/data/news.ts with real content
3. Replace placeholder gallery images in src/data/gallery.ts with real photos
4. Test on mobile devices (iOS and Android)
5. Test on different browsers (Chrome, Firefox, Safari, Edge)
6. Verify all images load correctly
7. Check Bengali text renders properly
8. Test hover animations on desktop
9. Verify touch interactions on mobile
10. Test with slow network connection

🎨 CUSTOMIZATION TIPS:

- Adjust gallery speed prop (20-60 recommended)
- Modify colors in Tailwind classes to match branding
- Add more news categories as needed
- Customize social media button text
- Add more social platforms if needed

🐛 COMMON ISSUES:

- Images not loading? Check CORS and URLs
- Animation choppy? Reduce gallery image count
- Bengali text broken? Verify UTF-8 encoding
- Components overlapping? Check z-index values

📖 For detailed documentation, see COMPONENTS_GUIDE.md
*/
