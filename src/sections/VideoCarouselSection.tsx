import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { videos } from '../data/videos';

interface VideoModalProps {
  videoUrl: string;
  title: string;
  onClose: () => void;
}

const VideoModal = ({ videoUrl, title, onClose }: VideoModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            aria-label="Close video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Video Container */}
          <div className="relative pt-[56.25%]">
            <iframe
              src={videoUrl}
              title={title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video Title */}
          <div className="p-4 bg-white">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const VideoCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const handleVideoClick = (videoUrl: string, title: string) => {
    setSelectedVideo({ url: videoUrl, title });
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  // Circular carousel logic - get visible cards (left, center, right)
  const getVisibleCards = () => {
    const totalVideos = videos.length;
    const prevIndex = currentIndex === 0 ? totalVideos - 1 : currentIndex - 1;
    const nextIndex = currentIndex === totalVideos - 1 ? 0 : currentIndex + 1;

    return {
      left: { video: videos[prevIndex], index: prevIndex },
      center: { video: videos[currentIndex], index: currentIndex },
      right: { video: videos[nextIndex], index: nextIndex },
    };
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="w-full bg-gradient-to-b from-bnp-green-50 to-white py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            সংবাদ ও আপডেট
          </h2>
          <div className="w-24 h-1 bg-bnp-green mx-auto rounded-full" />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 bg-white hover:bg-bnp-green hover:text-white text-bnp-green rounded-full p-4 shadow-xl transition-all hover:scale-110"
            aria-label="Previous video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 bg-white hover:bg-bnp-green hover:text-white text-bnp-green rounded-full p-4 shadow-xl transition-all hover:scale-110"
            aria-label="Next video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Cards - Stacked 3 Card View */}
          <div className="relative flex items-stretch justify-center min-h-[500px] md:min-h-[550px]">
            {/* Left Card - Positioned behind and to the left */}
            <motion.div
              key={`left-${visibleCards.left.video.id}`}
              initial={{ opacity: 0, x: -100, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 0.85 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[280px] z-0"
              style={{ transform: 'translateY(-50%) translateX(20px)' }}
            >
              <div
                onClick={() => handleVideoClick(visibleCards.left.video.videoUrl, visibleCards.left.video.title)}
                className="cursor-pointer opacity-70 hover:opacity-90 transition-opacity"
              >
                <VideoCard video={visibleCards.left.video} size="small" />
              </div>
            </motion.div>

            {/* Center Card (Active) - Main focus */}
            <motion.div
              key={`center-${visibleCards.center.video.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-3xl mx-auto px-4 lg:px-20 z-20 relative"
            >
              <div
                onClick={() => handleVideoClick(visibleCards.center.video.videoUrl, visibleCards.center.video.title)}
                className="cursor-pointer"
              >
                <VideoCard video={visibleCards.center.video} size="large" />
              </div>
            </motion.div>

            {/* Right Card - Positioned behind and to the right */}
            <motion.div
              key={`right-${visibleCards.right.video.id}`}
              initial={{ opacity: 0, x: 100, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 0.85 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[280px] z-0"
              style={{ transform: 'translateY(-50%) translateX(-20px)' }}
            >
              <div
                onClick={() => handleVideoClick(visibleCards.right.video.videoUrl, visibleCards.right.video.title)}
                className="cursor-pointer opacity-70 hover:opacity-90 transition-opacity"
              >
                <VideoCard video={visibleCards.right.video} size="small" />
              </div>
            </motion.div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-bnp-green' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal videoUrl={selectedVideo.url} title={selectedVideo.title} onClose={closeModal} />
      )}
    </section>
  );
};

// Video Card Component
interface VideoCardProps {
  video: typeof videos[0];
  size: 'small' | 'large';
}

const VideoCard = ({ video, size }: VideoCardProps) => {
  const isLarge = size === 'large';

  return (
    <div
      className={`relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105 ${isLarge ? 'transform scale-105' : ''
        }`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gray-200 group overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/640x360/006747/ffffff?text=BNP+Video';
          }}
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
          <div className="bg-bnp-green rounded-full p-4 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>

        {/* Badge */}
        <div className="absolute top-3 left-3 bg-bnp-green text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
          </svg>
          ভিডিও দেখুন
        </div>
      </div>

      {/* Content */}
      <div className={`p-4 ${isLarge ? 'md:p-6' : 'md:p-4'}`}>
        {/* Date */}
        <div className="flex items-center gap-2 text-bnp-green text-sm font-semibold mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {video.date}
        </div>

        {/* Title */}
        <h3 className={`font-bold text-gray-900 mb-3 ${isLarge ? 'text-xl md:text-2xl' : 'text-base md:text-lg'} line-clamp-2`}>
          {video.title}
        </h3>

        {/* Description */}
        <p className={`text-gray-600 ${isLarge ? 'text-base line-clamp-3' : 'text-sm line-clamp-2'}`}>
          {video.description}
        </p>
      </div>
    </div>
  );
};

export default VideoCarouselSection;
