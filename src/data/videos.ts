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
    title: 'সবার আগে বাংলাদেশ, করবো কাজ, গড়বো দেশ',
    description: 'বিজয়ের মহান দিনে সবার আগে দেশ গড়ার এক দৃঢ় অঙ্গীকার ও কাজের লক্ষ্য।',
    thumbnail: 'https://img.youtube.com/vi/8ghOfa7a1V0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/8ghOfa7a1V0',
    youtubeId: '8ghOfa7a1V0',
    date: '০৮ জানুয়ারি, ২০২৬',
    duration: '০০:২৮',
  },
  {
    id: '2',
    title: 'আমার আগে আমরা, আমাদের আগে দেশ | ক্ষমতার আগে জনতা, সবার আগে বাংলাদেশ!',
    description: 'ক্ষমতার চেয়ে জনতা এবং ব্যক্তিগত স্বার্থের চেয়ে দেশের কল্যানকে প্রাধান্য দেওয়ার ডাক।',
    thumbnail: 'https://img.youtube.com/vi/AgfH8WTOEE0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/AgfH8WTOEE0',
    youtubeId: 'AgfH8WTOEE0',
    date: '০৫ জানুয়ারি, ২০২৬',
    duration: '০৩:০৩',
  },
  {
    id: '3',
    title: '❝আমার আগে আমরা, আমাদের আগে দেশ | ক্ষমতার আগে জনতা, সবার আগে বাংলাদেশ❞',
    description: 'কণ্ঠশিল্পী ন্যান্সির কন্ঠে দেশাত্মবোধক গান যা জনতা ও দেশকে সবার উপরে রাখার প্রেরণা দেয়।',
    thumbnail: 'https://img.youtube.com/vi/JK14NBR5s5M/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/JK14NBR5s5M',
    youtubeId: 'JK14NBR5s5M',
    date: '০৩ জানুয়ারি, ২০২৬',
    duration: '০৩:২০',
  },
  {
    id: '4',
    title: 'কৃষকের অধিকার ফিরিয়ে আনতে ধানের শীষে ভোট দিন।',
    description: 'কৃষকদের ন্যায্য অধিকার রক্ষা এবং তাদের ভাগ্য পরিবর্তনের লক্ষ্যে ধানের শীষে ভোট দেওয়ার আহ্বান।',
    thumbnail: 'https://img.youtube.com/vi/Zy8_dwcGyi8/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Zy8_dwcGyi8',
    youtubeId: 'Zy8_dwcGyi8',
    date: '০১ জানুয়ারি, ২০২৬',
    duration: '০০:৪৯',
  },
  {
    id: '5',
    title: 'স্বাস্থ্য সেবায় সুস্থ ও সুরক্ষিত জাতী গড়তে ধানের শীষে ভোট দিন।',
    description: 'একটি সুস্থ ও সুরক্ষিত জাতি গঠনে স্বাস্থ্য সেবার মানোন্নয়নের লক্ষে ধানের শীষে ভোট দেওয়ার আহ্বান।',
    thumbnail: 'https://img.youtube.com/vi/LHck-hmfuAc/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/LHck-hmfuAc',
    youtubeId: 'LHck-hmfuAc',
    date: '৩০ ডিসেম্বর, ২০২৫',
    duration: '০০:৪১',
  },
  {
    id: '6',
    title: 'আমাদের স্বপ্ন: মেধাভিত্তিক ও বৈষম্যহীন এক সমৃদ্ধ আগামী',
    description: 'মেধা ও যোগ্যতার ভিত্তিতে কর্মসংস্থান সৃষ্টি এবং বৈষম্যহীন এক উন্নত বাংলাদেশ গড়ার স্বপ্নের কথা।',
    thumbnail: 'https://img.youtube.com/vi/cGXyhBnjYiE/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/cGXyhBnjYiE',
    youtubeId: 'cGXyhBnjYiE',
    date: '২৮ ডিসেম্বর, ২০২৫',
    duration: '০২:২১',
  },
  {
    id: '7',
    title: 'তারেক রহমানের সাথে, উজ্জ্বল ভবিষ্যৎ এখানেই।',
    description: 'তারেক রহমানের দূরদর্শী নেতৃত্বে বাংলাদেশের এক নতুন ও সমৃদ্ধ ভবিষ্যতের রূপকল্প।',
    thumbnail: 'https://img.youtube.com/vi/RsVn6YeR9GQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/RsVn6YeR9GQ',
    youtubeId: 'RsVn6YeR9GQ',
    date: '২৫ ডিসেম্বর, ২০২৫',
    duration: '০৩:১৪',
  },
  {
    id: '8',
    title: 'ফ্যামিলি কার্ড : বাংলাদেশকে সামনে এগিয়ে নিতে বিএনপির যুগান্তকারী পরিকল্পনা।',
    description: 'পরিবারের কল্যাণ ও সামাজিক সুরক্ষার লক্ষ্যে ফ্যামিলি কার্ড প্রকল্পের এক বিশেষ পরিকল্পনা।',
    thumbnail: 'https://img.youtube.com/vi/mMX8k6rDJfo/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/mMX8k6rDJfo',
    youtubeId: 'mMX8k6rDJfo',
    date: '২২ ডিসেম্বর, ২০২৫',
    duration: '০১:৩৭',
  },
];
