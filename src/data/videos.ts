export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  youtubeId: string;
  date: string;
  duration?: string;
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'তারেক রহমানের ঐতিহাসিক ভাষণ',
    description: 'বাংলাদেশের গণতন্ত্র পুনরুদ্ধারের লক্ষ্যে তারেক রহমানের ঐতিহাসিক ভাষণ',
    thumbnail: `https://img.youtube.com/vi/8ghOfa7a1V0/maxresdefault.jpg`,
    videoUrl: 'https://www.youtube.com/embed/8ghOfa7a1V0',
    youtubeId: '8ghOfa7a1V0',
    date: '১২ জানুয়ারি, ২০২৬',
    duration: '১২:৪৫',
  },
  {
    id: '2',
    title: 'বেগম খালেদা জিয়া: স্মরণে',
    description: 'দেশের প্রথম নারী প্রধানমন্ত্রী বেগম খালেদা জিয়ার স্মরণে বিশেষ অনুষ্ঠান',
    thumbnail: `https://img.youtube.com/vi/cGXyhBnjYiE/maxresdefault.jpg`,
    videoUrl: 'https://www.youtube.com/embed/cGXyhBnjYiE',
    youtubeId: 'cGXyhBnjYiE',
    date: '১০ জানুয়ারি, ২০২৬',
    duration: '১৫:৩০',
  },
  {
    id: '3',
    title: 'বিএনপির ইশতেহার ঘোষণা',
    description: 'বাংলাদেশ জাতীয়তাবাদী দলের নির্বাচনী ইশতেহার ঘোষণা',
    thumbnail: `https://img.youtube.com/vi/BvmwXqA8yaA/maxresdefault.jpg`,
    videoUrl: 'https://www.youtube.com/embed/BvmwXqA8yaA',
    youtubeId: 'BvmwXqA8yaA',
    date: '০৮ জানুয়ারি, ২০২৬',
    duration: '২০:১৫',
  },
  {
    id: '4',
    title: 'জনগণের প্রত্যাশা',
    description: 'বিএনপির নির্বাচনী প্রতিশ্রুতি এবং জনগণের প্রত্যাশা',
    thumbnail: `https://img.youtube.com/vi/VfJ3lxMAflI/maxresdefault.jpg`,
    videoUrl: 'https://www.youtube.com/embed/VfJ3lxMAflI',
    youtubeId: 'VfJ3lxMAflI',
    date: '০৫ জানুয়ারি, ২০২৬',
    duration: '১৮:৩০',
  },
  {
    id: '5',
    title: 'উন্নয়নের রূপরেখা',
    description: 'বাংলাদেশের উন্নয়নে বিএনপির পরিকল্পনা ও রূপরেখা',
    thumbnail: `https://img.youtube.com/vi/ICxaLfKQyWw/maxresdefault.jpg`,
    videoUrl: 'https://www.youtube.com/embed/ICxaLfKQyWw',
    youtubeId: 'ICxaLfKQyWw',
    date: '০৩ জানুয়ারি, ২০২৬',
    duration: '২২:০০',
  },
  {
    id: '6',
    title: 'গণতন্ত্র ও সুশাসন',
    description: 'গণতন্ত্র প্রতিষ্ঠা এবং সুশাসন নিশ্চিতকরণে বিএনপির অঙ্গীকার',
    thumbnail: `https://img.youtube.com/vi/wP_Rob9dDQQ/maxresdefault.jpg`,
    videoUrl: 'https://www.youtube.com/embed/wP_Rob9dDQQ',
    youtubeId: 'wP_Rob9dDQQ',
    date: '০১ জানুয়ারি, ২০২৬',
    duration: '১৬:৪৫',
  },
];
