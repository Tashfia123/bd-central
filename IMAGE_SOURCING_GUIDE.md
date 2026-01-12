# Image Sourcing Guide for BNP Central Website

## 🎯 Quick Summary

Due to copyright restrictions, I cannot directly download images from news agencies or stock photo services. However, I've compiled all the resources you need to manually add the images.

---

## 📸 Where to Find BNP Leader Photos

### Official BNP Sources

1. **BNP Official Website**: https://www.bnpbd.org/
   - Navigate to "Our Leaders" section
   - Right-click on leader photos and save

2. **BNP Social Media**:
   - Instagram: https://www.instagram.com/bnpbd/
   - Twitter/X: https://x.com/bdbnp78
   - Facebook: Search "Bangladesh Nationalist Party Official"

### News & Stock Photo Sites (Require Purchase/License)

1. **Getty Images** (Premium):
   - [Tarique Rahman Photos](https://www.gettyimages.com/search/2/image?phrase=tarique%20rahman)
   - [Khaleda Zia Photos](https://www.gettyimages.com/photos/khaleda-zia) (2,400+ photos)
   - [Mirza Fakhrul Photos](https://www.gettyimages.com/photos/mirza-fakhrul-islam-alamgir) (82+ photos)

2. **Wikipedia Commons** (Free):
   - [Tarique Rahman Wikipedia](https://en.wikipedia.org/wiki/Tarique_Rahman)
   - [Khaleda Zia Wikipedia](https://en.wikipedia.org/wiki/Khaleda_Zia)
   - [Mirza Fakhrul Wikipedia](https://en.wikipedia.org/wiki/Mirza_Fakhrul_Islam_Alamgir)
   - Look for "Wikimedia Commons" links on these pages

3. **News Outlets**:
   - The Daily Star Bangladesh
   - Dhaka Tribune
   - The Business Standard
   - (Note: May require attribution)

---

## 🎬 Where to Find BNP Video Content

### Official BNP YouTube Channel

**BNP Communication**: https://www.youtube.com/c/BNPCommunication

Recent videos to use:
1. Search for "Tarique Rahman speech 2024"
2. Search for "BNP rally 2024"
3. Search for "Khaleda Zia tribute"
4. Search for "BNP election campaign"
5. Search for "Mirza Fakhrul press conference"

### How to Get Video Thumbnails:

**Method 1: YouTube Thumbnail URL**
```
https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
```
Replace `VIDEO_ID` with the actual YouTube video ID

**Method 2: Screenshot**
1. Play video on YouTube
2. Pause at a good frame
3. Take screenshot
4. Crop to 16:9 aspect ratio

---

## 📋 Image Requirements Checklist

### Candidate Photos (Square 1:1)

| File Name | Leader Name | Priority | Size |
|-----------|-------------|----------|------|
| `tarique-rahman.jpg` | Tarique Rahman | HIGH | 500x500px+ |
| `khaleda-zia.jpg` | Begum Khaleda Zia | HIGH | 500x500px+ |
| `fakhrul.jpg` | Mirza Fakhrul Islam Alamgir | HIGH | 500x500px+ |
| `candidate3.jpg` | Dr. Abdul Matin | MEDIUM | 500x500px+ |
| `candidate5.jpg` | Amir Khasru Mahmud | MEDIUM | 500x500px+ |
| `candidate6.jpg` | Salahuddin Ahmed | MEDIUM | 500x500px+ |
| `candidate7.jpg` | Nazrul Islam Khan | MEDIUM | 500x500px+ |
| `candidate8.jpg` | Gayeshwar Chandra Roy | MEDIUM | 500x500px+ |
| `candidate9.jpg` | Jamiruddin Sircar | MEDIUM | 500x500px+ |
| `candidate10.jpg` | Selima Rahman | MEDIUM | 500x500px+ |

**Specs:**
- Format: JPG
- Aspect Ratio: 1:1 (square)
- Minimum Size: 500x500px
- Recommended: 800x800px
- Max File Size: 300KB each

### Video Thumbnails (16:9)

| File Name | Video Topic | Priority | Size |
|-----------|-------------|----------|------|
| `video1.jpg` | Recent BNP rally or speech | HIGH | 640x360px+ |
| `video2.jpg` | Tarique Rahman address | HIGH | 640x360px+ |
| `video3.jpg` | BNP political event | MEDIUM | 640x360px+ |
| `video4.jpg` | Press conference | MEDIUM | 640x360px+ |
| `video5.jpg` | Party gathering | MEDIUM | 640x360px+ |

**Specs:**
- Format: JPG
- Aspect Ratio: 16:9
- Minimum Size: 640x360px
- Recommended: 1280x720px
- Max File Size: 200KB each

---

## 🛠️ Step-by-Step Instructions

### For Candidate Photos

1. **Visit BNP Website**:
   ```
   https://www.bnpbd.org/
   ```

2. **Navigate to Leaders Section**:
   - Look for "Our Leaders" or "Leadership"
   - Find each leader's profile page

3. **Download Photos**:
   - Right-click on photo
   - Select "Save Image As..."
   - Save to: `/public/candidates/`
   - Rename according to checklist above

4. **Crop to Square**:
   - Use any photo editor (Photoshop, GIMP, Paint.NET, or online tools)
   - Crop to 1:1 aspect ratio
   - Focus on face/head area
   - Resize to 800x800px

5. **Optimize**:
   - Use https://tinypng.com/ to compress
   - Ensure file is under 300KB

### For Video Thumbnails

1. **Visit BNP YouTube Channel**:
   ```
   https://www.youtube.com/c/BNPCommunication
   ```

2. **Find Relevant Videos**:
   - Look for recent speeches, rallies, press conferences
   - Note the video ID from URL (e.g., `youtube.com/watch?v=XXXXX`)

3. **Download Thumbnail**:

   **Option A - Direct URL**:
   ```
   https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
   ```

   **Option B - Screenshot**:
   - Play video
   - Pause at good frame
   - Screenshot
   - Crop to 16:9

4. **Save Thumbnails**:
   - Save to: `/public/video-thumbnails/`
   - Name as: `video1.jpg`, `video2.jpg`, etc.

5. **Optimize**:
   - Resize to 1280x720px
   - Compress to under 200KB
   - Use https://tinypng.com/

---

## ⚡ Quick Alternative: Use Placeholder Service

If you want to test the site immediately, you can use placeholder images:

### For Candidates (Square):
```
https://ui-avatars.com/api/?name=Tarique+Rahman&size=800&background=006747&color=fff
```

### For Videos (16:9):
```
https://placehold.co/1280x720/006747/white?text=BNP+Video
```

These will show BNP green backgrounds with text overlay until you add real photos.

---

## 📝 After Adding Images

1. **Verify Images Load**:
   ```bash
   npm run dev
   ```
   Visit http://localhost:5173

2. **Check All Sections**:
   - Hero section (slogan)
   - Video carousel (5 thumbnails)
   - Candidates carousels (10 photos)
   - Candidates grid page
   - Individual portfolio pages

3. **Test Responsiveness**:
   - Resize browser window
   - Check mobile view (DevTools)
   - Ensure images look good at all sizes

---

## 🎨 Image Editing Tools

### Free Online Tools:
- **Crop/Resize**: https://www.iloveimg.com/crop-image
- **Compress**: https://tinypng.com/
- **Background Removal**: https://www.remove.bg/
- **Batch Processing**: https://bulkresizephotos.com/

### Desktop Software:
- **Windows**: Paint.NET, GIMP
- **Mac**: Preview, GIMP
- **Cross-platform**: GIMP, Photopea (web-based)

---

## 📚 Sources for Information

All my searches found these resources:

**BNP Leader Information**:
- [Tarique Rahman Wikipedia](https://en.wikipedia.org/wiki/Tarique_Rahman)
- [Khaleda Zia Wikipedia](https://en.wikipedia.org/wiki/Khaleda_Zia)
- [Mirza Fakhrul Wikipedia](https://en.wikipedia.org/wiki/Mirza_Fakhrul_Islam_Alamgir)
- [BNP Official Website](https://www.bnpbd.org/)

**Photo Resources**:
- [Getty Images - Khaleda Zia](https://www.gettyimages.com/photos/khaleda-zia)
- [Getty Images - Mirza Fakhrul](https://www.gettyimages.com/photos/mirza-fakhrul-islam-alamgir)

**Video Resources**:
- [BNP YouTube Channel](https://www.youtube.com/c/BNPCommunication)

**News Sources**:
- [Dhaka Tribune](https://www.dhakatribune.com/)
- [The Business Standard](https://www.tbsnews.net/)
- [Al Jazeera Bangladesh Coverage](https://www.aljazeera.com/)

---

## ❓ FAQ

**Q: Can I use photos from Google Images?**
A: Only if they're Creative Commons licensed or from official BNP sources. Check image rights.

**Q: Do I need to credit photographers?**
A: If using from news sites or Creative Commons, yes. Official BNP website images generally don't require attribution for BNP's own website.

**Q: What if I can't find a photo for a specific leader?**
A: Use a placeholder or skip that leader for now. The site will show a green BNP placeholder automatically.

**Q: Can I use lower quality images?**
A: Yes, but they may look pixelated. Aim for at least the minimum sizes listed above.

**Q: How do I know if a YouTube video is official BNP content?**
A: Look for the verified checkmark on the BNP Communication channel.

---

## ✅ Final Checklist

Before deploying:

- [ ] All 10 candidate photos added to `/public/candidates/`
- [ ] All photos cropped to 1:1 square
- [ ] All photos under 300KB each
- [ ] All 5 video thumbnails added to `/public/video-thumbnails/`
- [ ] All thumbnails in 16:9 aspect ratio
- [ ] All thumbnails under 200KB each
- [ ] Slogan image already added ✅
- [ ] Run `npm run dev` and verify all images load
- [ ] Check mobile responsiveness
- [ ] Update video URLs in `/src/data/videos.ts` (optional)

---

**Need Help?** If you have specific questions or can't find certain images, let me know!
