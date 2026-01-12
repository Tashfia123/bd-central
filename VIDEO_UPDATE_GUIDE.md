# Quick Guide: Update Video URLs

## 📹 How to Add Real BNP YouTube Videos

### Step 1: Find Videos on BNP YouTube Channel

Visit: https://www.youtube.com/c/BNPCommunication

Look for videos matching these themes:
1. Tarique Rahman speeches
2. BNP rallies and conferences
3. Mirza Fakhrul press conferences
4. Khaleda Zia tributes
5. BNP 19-point program videos

### Step 2: Extract Video ID

From a YouTube URL like:
```
https://www.youtube.com/watch?v=ABC123XYZ
```

The video ID is: `ABC123XYZ` (the part after `v=`)

### Step 3: Update the Code

Open: `/src/data/videos.ts`

Replace the placeholder video IDs:

**Current (placeholder):**
```typescript
videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
```

**Updated (with real video):**
```typescript
videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE'
```

### Example:

If you find a Tarique Rahman speech at:
```
https://www.youtube.com/watch?v=XYZ789ABC
```

Update video 1 to:
```typescript
{
  id: '1',
  title: 'তারেক রহমানের ঐতিহাসিক ভাষণ - গণতন্ত্র পুনরুদ্ধারের আহ্বান',
  thumbnail: '/video-thumbnails/video1.jpg',
  videoUrl: 'https://www.youtube.com/embed/XYZ789ABC', // ← Changed here
  date: '২০২৫-১২-২৫',
}
```

## 🎯 Current Video Placeholders

Edit these 5 videos in `/src/data/videos.ts`:

| # | Title | Current ID | Replace With |
|---|-------|-----------|--------------|
| 1 | তারেক রহমানের ঐতিহাসিক ভাষণ | `dQw4w9WgXcQ` | Real Tarique speech |
| 2 | বিএনপির জাতীয় সম্মেলন | `dQw4w9WgXcQ` | Real BNP rally |
| 3 | মির্জা ফখরুল সংবাদ সম্মেলন | `dQw4w9WgXcQ` | Real press conference |
| 4 | বেগম খালেদা জিয়া স্মরণে | `dQw4w9WgXcQ` | Khaleda Zia tribute |
| 5 | বিএনপির ১৯ দফা দাবি | `dQw4w9WgXcQ` | 19-point program |

## ⚡ Quick Tips

1. **Test Videos**: After updating, run `npm run dev` and click videos to ensure they play

2. **Embed Format**: Always use `/embed/` format, not `/watch?v=`
   - ✅ Correct: `https://www.youtube.com/embed/ABC123`
   - ❌ Wrong: `https://www.youtube.com/watch?v=ABC123`

3. **Update Thumbnails Too**: Download matching thumbnails using:
   ```
   https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
   ```

4. **Update Dates**: Change dates to match actual video upload dates (in Bengali numerals)

## 📝 Example: Complete Update

**Before:**
```typescript
{
  id: '1',
  title: 'তারেক রহমানের ঐতিহাসিক ভাষণ - গণতন্ত্র পুনরুদ্ধারের আহ্বান',
  thumbnail: '/video-thumbnails/video1.jpg',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  date: '২০২৫-১২-২৫',
}
```

**After** (with real video):
```typescript
{
  id: '1',
  title: 'তারেক রহমানের ২৫ ডিসেম্বরের ভাষণ - বাংলাদেশের নতুন ভোর',
  thumbnail: '/video-thumbnails/video1.jpg',
  videoUrl: 'https://www.youtube.com/embed/REAL_VIDEO_ID', // ← Your real ID
  date: '২০২৫-১২-২৫',
}
```

## 🔍 Where to Find BNP Videos

### Official Sources:
- **BNP YouTube**: https://www.youtube.com/c/BNPCommunication
- **BNP Facebook**: Official BNP page videos
- **BNP Instagram**: @bnpbd

### News Channels:
Search YouTube for:
- "BNP Tarique Rahman speech"
- "BNP rally 2025"
- "Mirza Fakhrul press conference"
- "BNP 19 point"
- "Khaleda Zia"

## ✅ Verification

After updating all videos:

```bash
# Run development server
npm run dev

# Test each video:
# 1. Click on video thumbnail
# 2. Modal should open
# 3. Video should start playing
# 4. Press ESC to close
```

## 💡 Note

The placeholder ID `dQw4w9WgXcQ` is just for demonstration. Replace ALL of them with real BNP video IDs for the website to show actual content!

---

**Quick Edit Location**: [src/data/videos.ts](src/data/videos.ts)
