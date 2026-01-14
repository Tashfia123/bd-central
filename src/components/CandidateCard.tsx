import { motion } from 'framer-motion';

export interface CandidateCardProps {
  candidate: {
    id: string;
    name: string;
    nameBangla: string;
    positionBangla: string;
    seatBangla: string;
    image: string;
    portfolioUrl?: string;
  };
  onClick?: (candidateId: string) => void;
  showBadge?: boolean;
  badgeText?: string;
  variant?: 'default' | 'grid';
}

const CandidateCard = ({
  candidate,
  onClick,
  showBadge = false,
  badgeText = 'ভারপ্রাপ্ত চেয়ারম্যান',
  variant = 'default',
}: CandidateCardProps) => {
  const isExternalPortfolio = candidate.portfolioUrl?.startsWith('http');

  const handleInteraction = (e: React.MouseEvent) => {
    // If it's an external link, redirect directly
    if (isExternalPortfolio && candidate.portfolioUrl) {
      e.preventDefault();
      e.stopPropagation();
      window.top!.location.href = candidate.portfolioUrl;
      return;
    }

    // Otherwise use the provided onClick handler for internal navigation
    if (onClick) {
      onClick(candidate.id);
    }
  };
  // Generate initials for fallback image
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    if (!target.src.includes('data:image')) {
      const initials = getInitials(candidate.name);
      target.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="240" height="240"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23006747;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23004d33;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="240" height="240" fill="url(%23grad)"/%3E%3Ctext x="50%25" y="50%25" fill="white" font-size="60" font-family="Arial, sans-serif" font-weight="600" text-anchor="middle" dy=".35em"%3E${initials}%3C/text%3E%3C/svg%3E`;
    }
  };

  const isGridVariant = variant === 'grid';

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -8,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={handleInteraction}
      className={`
        cursor-pointer group
        ${isGridVariant ? 'w-full' : 'flex-shrink-0 w-48 sm:w-52 md:w-56 lg:w-60'}
      `}
    >
      <div
        className={`
          relative bg-white overflow-hidden
          transition-all duration-300 ease-out
          rounded-xl
          shadow-[0_4px_20px_rgba(0,0,0,0.08)]
          group-hover:shadow-[0_12px_40px_rgba(0,103,71,0.15)]
          transform-gpu
        `}
        style={{
          transform: 'translateZ(0)',
        }}
      >
        {/* Special Badge */}
        {showBadge && (
          <div className="absolute top-3 left-3 z-10 bg-bnp-green text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold shadow-lg">
            {badgeText}
          </div>
        )}

        {/* Candidate Image - 1:1 Square aspect ratio */}
        <div className="relative w-full bg-gray-100 overflow-hidden" style={{ aspectRatio: '1/1' }}>
          <img
            src={candidate.image}
            alt={candidate.nameBangla}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
            onError={handleImageError}
          />

          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <p className="text-xs font-medium">আরও দেখুন →</p>
            </div>
          </div>
        </div>

        {/* Candidate Info */}
        <div className={`bg-white ${isGridVariant ? 'p-4 md:p-5' : 'px-3 py-3 md:px-4 md:py-3.5'}`}>
          <h3 className={`font-bold text-gray-900 leading-tight mb-1.5 ${isGridVariant ? 'text-base md:text-lg' : 'text-xs md:text-sm'}`}>
            {candidate.nameBangla}
          </h3>
          <p className={`text-gray-600 leading-tight ${isGridVariant ? 'text-sm' : 'text-[10px] md:text-xs'}`}>
            <span className="text-bnp-green font-medium">{candidate.positionBangla}</span>
            <span className="mx-1 text-gray-400">/</span>
            <span className="text-gray-500">{candidate.seatBangla}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CandidateCard;
