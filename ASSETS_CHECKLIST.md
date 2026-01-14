# Assets Checklist

## Required Assets to Add

### ✅ Already Present
- [x] `/public/bnp-logo.png` - BNP official logo (red/green flag)
- [x] `/public/hero.jpeg` - Hero section background image

### ⚠️ Required for Full Functionality

#### 1. Slogan Image (CRITICAL)
**Path:** `/public/slogan.png`

**Description:** "Shobar Age Bangladesh" (সবার আগে বাংলাদেশ) slogan image

**Used in:** Hero Section

**Recommended specs:**
- Format: PNG with transparency
- Dimensions: 1200x400px (or similar wide aspect ratio)
- Colors: BNP green text on transparent background

---

#### 2. Video Thumbnails (5 images)
**Path:** `/public/video-thumbnails/`

**Files needed:**
- `video1.jpg` - জামায়াত আমিরের স্বাক্ষরে...
- `video2.jpg` - ঢাকা-১৪ আসনে...
- `video3.jpg` - ঢাকা-১৮ আসনে...
- `video4.jpg` - কি প্রধানমন্ত্রী...
- `video5.jpg` - গণতান্ত্রিক কর্মসূচি...

**Used in:** Video Carousel Section (সংবাদ ও আপডেট)

**Recommended specs:**
- Format: JPG or PNG
- Aspect ratio: 16:9 (e.g., 640x360px or 1280x720px)
- Size: < 200KB each for performance

**Fallback:** Currently shows placeholder images with green BNP branding if images are missing.

---

#### 3. Candidate Photos (10 images)
**Path:** `/public/candidates/`

**Files needed:**
1. `tarique-rahman.jpg` - Chairman (চেয়ারম্যান)
2. `khaleda-zia.jpg` - Chairperson (চেয়ারপার্সন)
3. `fakhrul.jpg` - Secretary General (মহাসচিব)
4. `candidate3.jpg` - Dr. Abdul Matin
5. `candidate5.jpg` - Amir Khasru Mahmud Chowdhury
6. `candidate6.jpg` - Salahuddin Ahmed
7. `candidate7.jpg` - Nazrul Islam Khan
8. `candidate8.jpg` - Gayeshwar Chandra Roy
9. `candidate9.jpg` - Jamiruddin Sircar
10. `candidate10.jpg` - Selima Rahman

**Used in:**
- Candidates Section (dual carousels)
- Candidates Grid page
- Individual portfolio pages

**Recommended specs:**
- Format: JPG or PNG
- Aspect ratio: 1:1 (square, e.g., 500x500px or 800x800px)
- Size: < 300KB each
- Professional portrait photos

**Fallback:** Currently shows placeholder images with green BNP branding if images are missing.

---

## How to Add Assets

### Step 1: Place Images in Correct Folders
```bash
BNP-Central/
└── public/
    ├── slogan.png                    ← Add this
    ├── video-thumbnails/
    │   ├── video1.jpg                ← Add these
    │   ├── video2.jpg
    │   ├── video3.jpg
    │   ├── video4.jpg
    │   └── video5.jpg
    └── candidates/
        ├── tarique-rahman.jpg        ← Add these
        ├── khaleda-zia.jpg
        ├── fakhrul.jpg
        ├── candidate3.jpg
        ├── candidate5.jpg
        ├── candidate6.jpg
        ├── candidate7.jpg
        ├── candidate8.jpg
        ├── candidate9.jpg
        └── candidate10.jpg
```

### Step 2: Verify Images Load
After adding images:
1. Run `npm run dev`
2. Open http://localhost:5173
3. Check each section to ensure images load correctly

### Step 3: Update Data (Optional)
If you want to change video URLs or candidate information:
- Edit `/src/data/videos.ts`
- Edit `/src/data/candidates.ts`

---

## Image Optimization Tips

### For Best Performance:
1. **Compress images** before adding (use tools like TinyPNG, ImageOptim)
2. **Use appropriate formats:**
   - PNG for images with transparency (slogan)
   - JPG for photos (candidates, video thumbnails)
3. **Optimize dimensions:**
   - Don't use images larger than needed
   - Match recommended specs above
4. **Consider WebP format** for modern browsers (optional)

### Batch Processing:
Use tools like:
- **ImageMagick** for batch resizing
- **Squoosh** (web-based) for compression
- **Sharp** (Node.js) for automated processing

---

## Testing Checklist

After adding all assets, verify:

- [ ] Hero section shows slogan image clearly
- [ ] Video carousel shows 5 video thumbnails
- [ ] Video thumbnails have good quality
- [ ] Candidates section shows all 10 candidate photos
- [ ] Candidate photos are properly cropped
- [ ] All images load on different screen sizes
- [ ] Images are not pixelated or blurry
- [ ] Page loads quickly (images not too large)

---

## What Happens If Images Are Missing?

The website will still work!

**Fallback behavior:**
- Missing images show placeholder with BNP green background
- Text "BNP" or "BNP Video" appears on placeholder
- No broken image icons
- All functionality remains intact

However, for a professional appearance, **all real images should be added**.

---

## Need Help?

If you don't have access to the images:
1. Check the BNP official website (bnpbd.org) for candidate photos
2. Use Creative Commons licensed images as placeholders
3. Commission a designer to create the slogan image
4. Extract video thumbnails from YouTube using tools like `youtube-dl`

---

**Last Updated:** 2026-01-11
