import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative w-screen h-screen overflow-visible z-50" style={{ width: '100vw', height: '100vh' }}>
      {/* Background Image - Full screen coverage with object-fit: cover */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero.jpeg"
          alt="BNP Hero"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        />
      </div>

      {/* Dark Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

      {/* Tagline - Bottom Left Corner Overlay */}
      <div className="absolute bottom-6 left-4 sm:left-6 lg:left-10 z-10 md:bottom-8 lg:bottom-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px]"
        >
          {/* Slogan Image */}
          <img
            src="/slogan.png"
            alt="Shobar Age Bangladesh"
            className="w-full drop-shadow-xl opacity-90"
          />
        </motion.div>
      </div>

      {/* Centered BNP Branding Block - 50% visible, pushed down - HIGHEST Z-INDEX */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-[100] w-[calc(100%-2rem)] sm:w-auto max-w-[95vw]">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-white rounded-xl md:rounded-2xl shadow-2xl px-3 py-3 sm:px-4 sm:py-3 md:px-6 md:py-4 border border-gray-100"
          style={{
            boxShadow: '0 20px 50px -12px rgba(0, 0, 0, 0.25), 0 8px 20px -8px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* BNP Logo */}
          <img
            src="/bnp-logo.png"
            alt="BNP Logo"
            className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 object-contain flex-shrink-0"
          />

          {/* Subtle Vertical Divider */}
          <div className="w-px h-6 sm:h-8 md:h-10 lg:h-12 bg-gradient-to-b from-transparent via-bnp-green/40 to-transparent flex-shrink-0" />

          {/* Party Name - Responsive Layout */}
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <h3 className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 leading-tight break-words">
              Bangladesh Nationalist Party
            </h3>
            <p className="text-bnp-green font-semibold text-[9px] xs:text-[10px] sm:text-xs md:text-sm leading-tight break-words">
              বাংলাদেশ জাতীয়তাবাদী দল
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
