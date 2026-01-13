import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { candidates } from '../data/candidates';
import { useNavigate } from 'react-router-dom';
import CandidateCard from '../components/CandidateCard';

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

  // Position Tariq Rahman first (top-right/rightmost), then other candidates
  const tariqRahman = candidates.find(c => c.id === 'tarique-rahman');
  const otherCandidates = candidates.filter(c => c.id !== 'tarique-rahman');

  // Split candidates: Tariq first, then fill the rows
  const topCandidates = tariqRahman ? [tariqRahman, ...otherCandidates.slice(0, 14)] : candidates.slice(0, 15);
  const bottomCandidates = tariqRahman ? otherCandidates.slice(14, 29) : candidates.slice(15, 30);

  // Quadruple for seamless infinite scroll (ensures no gaps)
  const duplicatedTopCandidates = [...topCandidates, ...topCandidates, ...topCandidates, ...topCandidates];
  const duplicatedBottomCandidates = [...bottomCandidates, ...bottomCandidates, ...bottomCandidates, ...bottomCandidates];

  // Seamless infinite scroll for top row (RIGHT to LEFT - reversed)
  useEffect(() => {
    const topRow = topRowRef.current;
    if (!topRow || isMobile) return;

    const scrollSpeed = 0.6;
    let animationId: number;
    let isPaused = false;
    let scrollPosition = 0;

    // Initialize scroll position
    const initScroll = () => {
      if (topRow.scrollWidth > 0) {
        scrollPosition = topRow.scrollWidth / 4;
        topRow.scrollLeft = scrollPosition;
      }
    };

    setTimeout(initScroll, 50);

    const animate = () => {
      if (!isPaused && topRow) {
        scrollPosition -= scrollSpeed;
        const singleSetWidth = topRow.scrollWidth / 4;

        // Seamless reset when reaching the start
        if (scrollPosition <= 0) {
          scrollPosition = singleSetWidth;
          topRow.scrollLeft = singleSetWidth;
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

  // Seamless infinite scroll for bottom row (LEFT to RIGHT - reversed)
  useEffect(() => {
    const bottomRow = bottomRowRef.current;
    if (!bottomRow || isMobile) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.4;
    let animationId: number;
    let isPaused = false;

    const animate = () => {
      if (!isPaused && bottomRow) {
        scrollPosition += scrollSpeed;
        const singleSetWidth = bottomRow.scrollWidth / 4;

        // Seamless reset when reaching the second set
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0;
          bottomRow.scrollLeft = 0;
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

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-10 md:py-14 lg:py-18 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center mb-10 md:mb-14 lg:mb-18 px-4"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          মনোনীত প্রার্থীগণ
        </h2>
        <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-bnp-green to-bnp-green-600 mx-auto rounded-full" />
      </motion.div>

      {/* Top Row - Floating Cards */}
      <div className="mb-8 md:mb-12 lg:mb-16 overflow-hidden px-2">
        <div
          ref={topRowRef}
          className="flex gap-4 md:gap-5 lg:gap-6 overflow-x-auto md:overflow-x-hidden scrollbar-hide py-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {(isMobile ? topCandidates : duplicatedTopCandidates).map((candidate, index) => (
            <CandidateCard
              key={`top-${candidate.id}-${index}`}
              candidate={candidate}
              onClick={handleCandidateClick}
              showBadge={candidate.id === 'tarique-rahman'}
              variant="default"
            />
          ))}
        </div>
      </div>

      {/* Bottom Row - Floating Cards (Hidden on Mobile) */}
      <div className={`overflow-hidden px-2 ${isMobile ? 'hidden' : 'block'}`}>
        <div
          ref={bottomRowRef}
          className="flex gap-4 md:gap-5 lg:gap-6 overflow-x-hidden py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedBottomCandidates.map((candidate, index) => (
            <CandidateCard
              key={`bottom-${candidate.id}-${index}`}
              candidate={candidate}
              onClick={handleCandidateClick}
              showBadge={candidate.id === 'tarique-rahman'}
              variant="default"
            />
          ))}
        </div>
      </div>

      {/* See All Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex justify-center md:justify-end mt-10 md:mt-14 lg:mt-18 px-4 md:px-8"
      >
        <button
          onClick={handleSeeAllClick}
          className="bg-transparent text-bnp-green hover:text-bnp-green-600 text-sm md:text-base font-medium underline underline-offset-4 hover:underline-offset-2 transition-all flex items-center gap-1.5 group"
        >
          সব প্রার্থী দেখুন
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-4 md:w-4 transition-transform group-hover:translate-x-1"
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
