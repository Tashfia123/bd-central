import { motion } from 'framer-motion';
import { useState } from 'react';

interface CTACardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
  isHovered: boolean;
  onHover: (hover: boolean) => void;
}

const CTACard = ({ icon, title, description, stepNumber, isHovered, onHover }: CTACardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: stepNumber * 0.15, duration: 0.5 }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="relative group"
    >
      {/* Step Number Badge */}
      <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 z-10">
        <motion.div 
          className={`
            w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center
            font-bold text-sm md:text-base shadow-lg
            transition-all duration-300
            ${isHovered 
              ? 'bg-bnp-green text-white scale-110' 
              : 'bg-white text-bnp-green border-2 border-bnp-green'
            }
          `}
          animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          {stepNumber}
        </motion.div>
      </div>

      <div className={`
        bg-white rounded-xl md:rounded-2xl p-5 md:p-6 h-full
        shadow-md hover:shadow-xl transition-all duration-300
        border border-gray-100 hover:border-bnp-green/30
        transform hover:-translate-y-1
        ${isHovered ? 'ring-2 ring-bnp-green/20' : ''}
      `}>
        {/* Icon */}
        <div className="flex justify-center mb-3 md:mb-4">
          <motion.div 
            className={`
              p-3 md:p-4 rounded-xl transition-all duration-300
              ${isHovered 
                ? 'bg-bnp-green text-white shadow-lg shadow-bnp-green/30' 
                : 'bg-bnp-green-50 text-bnp-green'
              }
            `}
            animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 text-center mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-center text-xs md:text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ConnectorArrow = ({ index }: { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
      className="hidden lg:flex items-center justify-center px-2"
    >
      <div className="relative">
        {/* Animated dashed line */}
        <div className="w-10 h-0.5 bg-gradient-to-r from-bnp-green-200 via-bnp-green to-bnp-green-200 rounded-full" />
        {/* Arrow head */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-bnp-green absolute -right-2 top-1/2 -translate-y-1/2"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        {/* Animated pulse dot */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-bnp-green"
          animate={{ 
            x: [-12, 12, -12],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

const CallToActionSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "ভোট কেন্দ্রে যান",
      description: "১২ই ফেব্রুয়ারি, সকাল ৮টা - বিকাল ৪টা পর্যন্ত আপনার নির্ধারিত ভোট কেন্দ্রে যান।"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "দুটি ব্যালট নিন",
      description: "একটি এমপির জন্য, অন্যটি সংরক্ষিত মহিলা আসনের জন্য।"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "ধানের শীষে সিল দিন",
      description: "গোপন বুথে গিয়ে ধানের শীষ প্রতীকে সিল দিন।"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white via-bnp-green-50/30 to-white py-10 md:py-12 lg:py-14 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            কিভাবে ভোট দেবেন
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-bnp-green to-bnp-green-600 mx-auto rounded-full" />
        </motion.div>

        {/* Steps Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 md:gap-3">
            {steps.map((step, index) => (
              <div key={index} className="contents">
                <div className="flex-1 max-w-xs mx-auto lg:mx-0">
                  <CTACard
                    stepNumber={index + 1}
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                    isHovered={hoveredCard === index}
                    onHover={(hover) => setHoveredCard(hover ? index : null)}
                  />
                </div>
                {index < steps.length - 1 && <ConnectorArrow index={index} />}
              </div>
            ))}
          </div>
        </div>

        {/* Important Info Card - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 md:mt-10"
        >
          <div className="bg-gradient-to-r from-bnp-green-50 via-white to-bnp-green-50 rounded-xl md:rounded-2xl p-4 md:p-6 max-w-3xl mx-auto border border-bnp-green/10 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 p-3 bg-bnp-green/10 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bnp-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-bold text-bnp-green mb-1">গুরুত্বপূর্ণ তথ্য</h3>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                  ভোট দেওয়ার সময় আপনার <span className="font-semibold text-bnp-green">জাতীয় পরিচয়পত্র</span> অবশ্যই সাথে রাখুন। 
                  ভোটকেন্দ্রে গিয়ে নাম যাচাই করুন এবং গোপন বুথে গিয়ে সিল দিন।
                </p>
              </div>
              
              {/* NID Icon */}
              <div className="hidden md:flex flex-shrink-0 items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
                <span className="text-xs text-gray-600 font-medium">NID</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
