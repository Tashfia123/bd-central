import { useState } from 'react';
import { motion } from 'framer-motion';

export interface NewsArticle {
  id: string;
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
}

interface FeaturedNewsCarouselProps {
  articles: NewsArticle[];
}

const FeaturedNewsCarousel = ({ articles }: FeaturedNewsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  // Get visible cards (left, center, right)
  const getVisibleCards = () => {
    const totalArticles = articles.length;
    if (totalArticles === 0) return { left: null, center: null, right: null };
    if (totalArticles === 1) return { left: null, center: articles[0], right: null };
    if (totalArticles === 2) {
      const prevIndex = currentIndex === 0 ? 1 : 0;
      const nextIndex = currentIndex === 0 ? 1 : 0;
      return {
        left: articles[prevIndex],
        center: articles[currentIndex],
        right: articles[nextIndex],
      };
    }

    const prevIndex = currentIndex === 0 ? totalArticles - 1 : currentIndex - 1;
    const nextIndex = currentIndex === totalArticles - 1 ? 0 : currentIndex + 1;

    return {
      left: articles[prevIndex],
      center: articles[currentIndex],
      right: articles[nextIndex],
    };
  };

  const visibleCards = getVisibleCards();

  if (articles.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        কোনো সংবাদ পাওয়া যায়নি
      </div>
    );
  }

  return (
    <div className="w-full py-12">
      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-30 bg-white hover:bg-bnp-green hover:text-white text-bnp-green rounded-full p-3 shadow-xl transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous article"
          disabled={articles.length <= 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-30 bg-white hover:bg-bnp-green hover:text-white text-bnp-green rounded-full p-3 shadow-xl transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next article"
          disabled={articles.length <= 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Cards - 3 Card View with Center Focus */}
        <div className="relative flex items-center justify-center gap-4 md:gap-6 min-h-[450px] md:min-h-[500px]">
          {/* Left Card */}
          {visibleCards.left && articles.length > 2 && (
            <motion.div
              key={`left-${visibleCards.left.id}`}
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 0.5, x: 0, scale: 0.85 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block w-1/4 flex-shrink-0"
            >
              <NewsCard article={visibleCards.left} isFocused={false} />
            </motion.div>
          )}

          {/* Center Card (Active/Focused) */}
          {visibleCards.center && (
            <motion.div
              key={`center-${visibleCards.center.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 flex-shrink-0 z-20"
            >
              <NewsCard article={visibleCards.center} isFocused={true} />
            </motion.div>
          )}

          {/* Right Card */}
          {visibleCards.right && articles.length > 2 && (
            <motion.div
              key={`right-${visibleCards.right.id}`}
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 0.5, x: 0, scale: 0.85 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block w-1/4 flex-shrink-0"
            >
              <NewsCard article={visibleCards.right} isFocused={false} />
            </motion.div>
          )}
        </div>

        {/* Carousel Indicators */}
        {articles.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-bnp-green' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to article ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// News Card Component
interface NewsCardProps {
  article: NewsArticle;
  isFocused: boolean;
}

const NewsCard = ({ article, isFocused }: NewsCardProps) => {
  return (
    <div
      className={`relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all ${
        isFocused ? 'transform scale-105 cursor-pointer hover:scale-110' : 'opacity-60 hover:opacity-80'
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] bg-gray-200 overflow-hidden group">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/800x500/006747/ffffff?text=BNP+News';
          }}
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-bnp-green text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
          {article.category}
        </div>

        {/* Gradient Overlay (only on focused card) */}
        {isFocused && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>

      {/* Content */}
      <div className={`p-5 ${isFocused ? 'md:p-6' : 'md:p-4'}`}>
        {/* Date */}
        <div className="flex items-center gap-2 text-bnp-green text-sm font-semibold mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {article.date}
        </div>

        {/* Title */}
        <h3 className={`font-bold text-gray-900 mb-3 ${isFocused ? 'text-xl md:text-2xl' : 'text-base md:text-lg'} line-clamp-2`}>
          {article.title}
        </h3>

        {/* Description */}
        <p className={`text-gray-600 ${isFocused ? 'text-base line-clamp-3' : 'text-sm line-clamp-2'}`}>
          {article.description}
        </p>

        {/* Read More Link (only on focused card) */}
        {isFocused && (
          <div className="mt-4">
            <span className="inline-flex items-center gap-2 text-bnp-green font-semibold hover:gap-3 transition-all">
              বিস্তারিত পড়ুন
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedNewsCarousel;
