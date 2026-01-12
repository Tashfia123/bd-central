import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { candidates } from '../data/candidates';
import { useNavigate } from 'react-router-dom';

const CandidatesSection = () => {
  const navigate = useNavigate();
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Split candidates into two groups (15 each)
  const topCandidates = candidates.slice(0, 15);
  const bottomCandidates = candidates.slice(15, 30);

  // Quadruple for seamless infinite scroll (ensures no gaps)
  const duplicatedTopCandidates = [...topCandidates, ...topCandidates, ...topCandidates, ...topCandidates];
  const duplicatedBottomCandidates = [...bottomCandidates, ...bottomCandidates, ...bottomCandidates, ...bottomCandidates];

  // Seamless infinite scroll for top row (left to right)
  useEffect(() => {
    const topRow = topRowRef.current;
    if (!topRow || isMobile) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.6;
    let animationId: number;
    let isPaused = false;

    const animate = () => {
      if (!isPaused && topRow) {
        scrollPosition += scrollSpeed;
        const singleSetWidth = topRow.scrollWidth / 4;

        // Seamless reset when reaching the second set
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0;
          topRow.scrollLeft = 0;
        } else {
          topRow.scrollLeft = scrollPosition;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    topRow.addEventListener('mouseenter', handleMouseEnter);
    topRow.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      topRow.removeEventListener('mouseenter', handleMouseEnter);
      topRow.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  // Seamless infinite scroll for bottom row (right to left)
  useEffect(() => {
    const bottomRow = bottomRowRef.current;
    if (!bottomRow || isMobile) return;

    const scrollSpeed = 0.4;
    let animationId: number;
    let isPaused = false;
    let scrollPosition = 0;

    // Initialize scroll position
    const initScroll = () => {
      if (bottomRow.scrollWidth > 0) {
        scrollPosition = bottomRow.scrollWidth / 4;
        bottomRow.scrollLeft = scrollPosition;
      }
    };

    setTimeout(initScroll, 50);

    const animate = () => {
      if (!isPaused && bottomRow) {
        scrollPosition -= scrollSpeed;
        const singleSetWidth = bottomRow.scrollWidth / 4;

        // Seamless reset when reaching the start
        if (scrollPosition <= 0) {
          scrollPosition = singleSetWidth;
          bottomRow.scrollLeft = singleSetWidth;
        } else {
          bottomRow.scrollLeft = scrollPosition;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    bottomRow.addEventListener('mouseenter', handleMouseEnter);
    bottomRow.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      bottomRow.removeEventListener('mouseenter', handleMouseEnter);
      bottomRow.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  // Mobile touch handling for swipe
  const handleTouchScroll = useCallback((ref: React.RefObject<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleStart = (e: TouchEvent) => {
      isDown = true;
      startX = e.touches[0].pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const handleEnd = () => { isDown = false; };

    const handleMove = (e: TouchEvent) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener('touchstart', handleStart, { passive: true });
    el.addEventListener('touchend', handleEnd);
    el.addEventListener('touchmove', handleMove, { passive: true });

    return () => {
      el.removeEventListener('touchstart', handleStart);
      el.removeEventListener('touchend', handleEnd);
      el.removeEventListener('touchmove', handleMove);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      const cleanupTop = handleTouchScroll(topRowRef);
      return cleanupTop;
    }
  }, [isMobile, handleTouchScroll]);

  const handleCandidateClick = (candidateId: string) => {
    navigate(`/candidate/${candidateId}`);
  };

  const handleSeeAllClick = () => {
    navigate('/candidates');
  };

  // Square Card Component - Wide enough for longest name
  const CandidateCard = ({ candidate, index, prefix }: { candidate: typeof candidates[0]; index: number; prefix: string }) => (
    <motion.div
      key={`${prefix}-${candidate.id}-${index}`}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.2 }}
      onClick={() => handleCandidateClick(candidate.id)}
      className="flex-shrink-0 w-48 sm:w-52 md:w-56 lg:w-60 cursor-pointer group"
    >
      <div className="relative bg-white rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 aspect-square flex flex-col">
        {/* Candidate Image - Square aspect ratio with rounded corners */}
        <div className="relative flex-1 bg-gray-100 overflow-hidden rounded-t-lg">
          <img
            src={candidate.image}
            alt={candidate.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('data:image')) {
                // Create personalized placeholder with candidate initials
                const initials = candidate.name
                  .split(' ')
                  .map(word => word[0])
                  .join('')
                  .substring(0, 2)
                  .toUpperCase();
                target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="240" height="240"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23006747;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23004d33;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="240" height="240" fill="url(%23grad)"/%3E%3Ctext x="50%25" y="50%25" fill="white" font-size="60" font-family="Arial, sans-serif" font-weight="600" text-anchor="middle" dy=".35em"%3E${initials}%3C/text%3E%3C/svg%3E`;
              }
            }}
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>

        {/* Candidate Info - Positioned at bottom with fixed height */}
        <div className="absolute bottom-0 left-0 right-0 px-3 py-3 md:px-4 md:py-3.5 bg-white/95 backdrop-blur-sm min-h-[4rem] md:min-h-[4.5rem] flex flex-col justify-center">
          <h3 className="text-sm md:text-base font-bold text-gray-900 leading-tight mb-1 whitespace-nowrap overflow-hidden text-ellipsis">{candidate.nameBangla}</h3>
          <p className="text-xs md:text-sm text-bnp-green font-medium whitespace-nowrap overflow-hidden text-ellipsis">{candidate.positionBangla}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50/50 to-white py-6 md:py-8 lg:py-10 overflow-hidden">
      {/* Section Header - Compact */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center mb-8 md:mb-12 lg:mb-16 px-4"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
          মনোনীত প্রার্থীগণ
        </h2>
        <div className="w-16 md:w-20 h-0.5 md:h-1 bg-bnp-green mx-auto rounded-full" />
      </motion.div>

      {/* Top Row - Full Width Edge-to-Edge */}
      <div className="mb-6 md:mb-10 lg:mb-14 overflow-hidden">
        <div
          ref={topRowRef}
          className="flex gap-3 md:gap-4 lg:gap-5 overflow-x-auto md:overflow-x-hidden scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {(isMobile ? topCandidates : duplicatedTopCandidates).map((candidate, index) => (
            <CandidateCard key={`top-${candidate.id}-${index}`} candidate={candidate} index={index} prefix="top" />
          ))}
        </div>
      </div>

      {/* Bottom Row - Full Width Edge-to-Edge (Hidden on Mobile) */}
      <div className={`overflow-hidden ${isMobile ? 'hidden' : 'block'}`}>
        <div
          ref={bottomRowRef}
          className="flex gap-3 md:gap-4 lg:gap-5 overflow-x-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedBottomCandidates.map((candidate, index) => (
            <CandidateCard key={`bottom-${candidate.id}-${index}`} candidate={candidate} index={index} prefix="bottom" />
          ))}
        </div>
      </div>

      {/* See All Button - Professional Spacing */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex justify-center md:justify-end mt-8 md:mt-12 lg:mt-16 px-4 md:px-8"
      >
        <button
          onClick={handleSeeAllClick}
          className="bg-bnp-green hover:bg-bnp-green-600 text-white text-sm md:text-base font-semibold px-6 md:px-8 py-2.5 md:py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2"
        >
          সব প্রার্থী দেখুন
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </motion.div>
    </section>
  );
};

export default CandidatesSection;
