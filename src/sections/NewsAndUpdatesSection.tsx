import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { videos } from '../data/videos';

// Video Modal Component
interface VideoModalProps {
  video: typeof videos[0];
  onClose: () => void;
}

const VideoModal = ({ video, onClose }: VideoModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-6 lg:p-8"
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl"
        style={{ maxHeight: 'calc(100vh - 120px)' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 md:-right-12 md:-top-2 z-10 bg-white/15 hover:bg-white/25 text-white rounded-full p-2.5 transition-all hover:scale-110 backdrop-blur-sm shadow-lg"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Container - Perfect 16:9 ratio with cinematic feel */}
        <div className="relative w-full aspect-video bg-black rounded-lg md:rounded-xl overflow-hidden shadow-2xl ring-2 ring-white/10">
          <iframe
            src={`${video.videoUrl}?autoplay=1&rel=0`}
            title={video.title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Info Below */}
        <div className="mt-3 md:mt-4 text-white px-1">
          <h3 className="text-base md:text-lg lg:text-xl font-bold mb-1 drop-shadow-lg">{video.title}</h3>
          <p className="text-xs md:text-sm text-white/80">{video.date}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const NewsAndUpdatesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalItems = videos.length;
  const AUTO_PLAY_INTERVAL = 10000; // 10 seconds

  // Auto-rotation logic
  const startTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!isPaused) {
        setActiveIndex((prev) => (prev + 1) % totalItems);
      }
    }, AUTO_PLAY_INTERVAL);
  }, [isPaused, totalItems]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, startTimer]);

  // Pause on modal open
  useEffect(() => {
    setIsPaused(!!selectedVideo);
  }, [selectedVideo]);

  // Handle clicking on cards
  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      // Center card - open modal
      setSelectedVideo(videos[index]);
    } else {
      // Side card - navigate to it and reset timer
      setActiveIndex(index);
    }
  };

  // Drag handler for swipe gestures (works on mobile and desktop)
  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      setActiveIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
    } else if (info.offset.x < -threshold) {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }
  };

  // Calculate slot properties for circular stacking
  const getSlotProps = (slotIndex: number) => {
    let distance = slotIndex - activeIndex;

    // Circular wrapping (shortest path)
    if (distance > totalItems / 2) {
      distance -= totalItems;
    } else if (distance < -totalItems / 2) {
      distance += totalItems;
    }

    const direction = distance === 0 ? 0 : (distance > 0 ? 1 : -1);
    const absDistance = Math.abs(distance);

    // Center card
    if (absDistance === 0) {
      return {
        x: 0,
        scale: 1,
        zIndex: 50,
        opacity: 1,
        rotateY: 0,
      };
    }

    // Adjacent cards
    if (absDistance === 1) {
      return {
        x: direction * 320,
        scale: 0.82,
        zIndex: 40,
        opacity: 1,
        rotateY: direction * -8,
      };
    }

    // Far cards
    if (absDistance === 2) {
      return {
        x: direction * 560,
        scale: 0.68,
        zIndex: 30,
        opacity: 0.85,
        rotateY: direction * -12,
      };
    }

    // Hidden cards
    return {
      x: direction * 700,
      scale: 0.5,
      zIndex: 10,
      opacity: 0,
      rotateY: direction * -15,
    };
  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50/50 to-white pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-10 lg:pb-12 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 md:mb-12 lg:mb-16 px-4"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
            ইশতেহার
          </h2>
          <div className="w-16 md:w-20 h-0.5 md:h-1 bg-bnp-green mx-auto rounded-full" />
        </motion.div>

        {/* Video Carousel */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Cards Container */}
          <div 
            className="relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center px-12 md:px-20" 
            style={{ perspective: '1200px' }}
          >
            {videos.map((video, slotIndex) => {
              const slotProps = getSlotProps(slotIndex);
              const isCenter = slotIndex === activeIndex;

              return (
                <motion.div
                  key={video.id}
                  drag={isCenter ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={isCenter ? handleDragEnd : undefined}
                  animate={{
                    x: slotProps.x,
                    scale: slotProps.scale,
                    zIndex: slotProps.zIndex,
                    opacity: slotProps.opacity,
                    rotateY: slotProps.rotateY,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 26,
                  }}
                  onClick={() => handleCardClick(slotIndex)}
                  whileHover={!isCenter ? { scale: slotProps.scale * 1.03, y: -5 } : {}}
                  className="absolute w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg cursor-pointer"
                  style={{
                    filter: isCenter ? 'none' : 'brightness(0.88)',
                  }}
                >
                  {/* Video Card */}
                  <div className={`bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-xl transition-shadow ${isCenter ? 'shadow-2xl ring-2 ring-bnp-green/20' : 'hover:shadow-2xl'} border border-gray-100`}>
                    {/* Video Thumbnail - 16:9 ratio */}
                    <div className="relative aspect-video bg-gray-900 overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          // Fallback to hqdefault if maxresdefault doesn't exist
                          if (target.src.includes('maxresdefault')) {
                            target.src = target.src.replace('maxresdefault', 'hqdefault');
                          } else {
                            target.src = `https://via.placeholder.com/1280x720/006747/ffffff?text=BNP+Video`;
                          }
                        }}
                      />
                      
                      {/* Play Button Overlay - Subtle and transparent */}
                      <div className={`absolute inset-0 flex items-center justify-center bg-black/10 transition-all ${isCenter ? 'opacity-100' : 'opacity-60'}`}>
                        <motion.div
                          className="bg-white/30 backdrop-blur-sm rounded-full p-3 md:p-4 border border-white/50"
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Duration Badge */}
                      {video.duration && (
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded font-medium">
                          {video.duration}
                        </div>
                      )}

                      {/* Live/New Badge for center card */}
                      {isCenter && (
                        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2.5 py-1 rounded-full font-semibold flex items-center gap-1.5 shadow-lg">
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                          ভিডিও
                        </div>
                      )}
                    </div>

                    {/* Video Info */}
                    <div className="p-3 md:p-4 bg-white">
                      {/* Date */}
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {video.date}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-sm md:text-base font-bold text-gray-900 line-clamp-1 mb-1">
                        {video.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-xs md:text-sm text-gray-600 line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="flex justify-center gap-1.5 mt-4 md:mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="relative h-1.5 rounded-full overflow-hidden bg-gray-200 transition-all"
                style={{ width: index === activeIndex ? '32px' : '8px' }}
                aria-label={`Go to video ${index + 1}`}
              >
                {index === activeIndex && !isPaused && (
                  <motion.div
                    className="absolute inset-0 bg-bnp-green rounded-full"
                    initial={{ scaleX: 0, transformOrigin: 'left' }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: 'linear' }}
                    key={activeIndex}
                  />
                )}
                {index === activeIndex && isPaused && (
                  <div className="absolute inset-0 bg-bnp-green rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default NewsAndUpdatesSection;
