import { motion } from 'framer-motion';
import FeaturedNewsCarousel from '../components/FeaturedNewsCarousel';
import { newsArticles } from '../data/news';

const NewsSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-bnp-green-50 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            সংবাদ ও আপডেট
          </h2>
          <div className="w-24 h-1 bg-bnp-green mx-auto rounded-full mb-4" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            সর্বশেষ সংবাদ এবং আপডেট সম্পর্কে জানুন
          </p>
        </motion.div>

        {/* Featured News Carousel */}
        <FeaturedNewsCarousel articles={newsArticles} />

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/news"
            className="inline-flex items-center gap-2 bg-bnp-green hover:bg-bnp-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            সব খবর দেখুন
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
