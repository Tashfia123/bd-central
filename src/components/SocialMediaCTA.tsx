import { motion } from 'framer-motion';

interface SocialLink {
  name: string;
  nameBangla: string;
  icon: JSX.Element;
  url: string;
  gradient: string;
  bgColor: string;
  hoverColor: string;
  followers?: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook Page',
    nameBangla: 'ফেসবুক পেজ',
    icon: (
      <svg className="w-6 h-6 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    url: 'https://www.facebook.com/BNPOfficial',
    gradient: 'from-gray-100 to-gray-200',
    bgColor: '#f3f4f6',
    hoverColor: '#1877F2',
    followers: '২.৫M+',
  },
  {
    name: 'Facebook Group',
    nameBangla: 'ফেসবুক গ্রুপ',
    icon: (
      <svg className="w-6 h-6 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
        <circle cx="17" cy="7" r="2.5" fill="currentColor" opacity="0.9"/>
        <circle cx="19" cy="9" r="1.5" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
    url: 'https://www.facebook.com/groups/BNPSupport',
    gradient: 'from-gray-100 to-gray-200',
    bgColor: '#f3f4f6',
    hoverColor: '#0866FF',
    followers: '৫০০K+',
  },
  {
    name: 'YouTube',
    nameBangla: 'ইউটিউব চ্যানেল',
    icon: (
      <svg className="w-6 h-6 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    url: 'https://www.youtube.com/@BNPOfficial',
    gradient: 'from-gray-100 to-gray-200',
    bgColor: '#f3f4f6',
    hoverColor: '#FF0000',
    followers: '১.২M+',
  },
  {
    name: 'X (Twitter)',
    nameBangla: 'এক্স (টুইটার)',
    icon: (
      <svg className="w-6 h-6 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    url: 'https://twitter.com/BNPOfficial',
    gradient: 'from-gray-100 to-gray-200',
    bgColor: '#f3f4f6',
    hoverColor: '#000000',
    followers: '৮০০K+',
  },
];

const SocialMediaCTA = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-10 md:py-14 lg:py-16 overflow-hidden">
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
            সবগুলো প্ল্যাটফর্মে যুক্ত হন
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-bnp-green to-bnp-green-600 mx-auto rounded-full mb-4" />
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            সর্বশেষ আপডেট এবং খবরের জন্য আমাদের সোশ্যাল মিডিয়া প্ল্যাটফর্মে যুক্ত হন
          </p>
        </motion.div>

        {/* Social Cards Grid - Grayscale with Color Hover */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative group rounded-lg md:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
              style={{ backgroundColor: link.bgColor }}
            >
              {/* Subtle gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-100`} />

              {/* Card Content */}
              <div className="relative z-10 p-4 md:p-5 text-center">
                {/* Icon - Grayscale to Color on hover */}
                <div className="flex justify-center mb-2.5">
                  <motion.div
                    className="grayscale group-hover:grayscale-0 transition-all duration-300"
                    style={{ color: '#4B5563' }}
                    whileHover={{
                      scale: 1.08,
                      // @ts-ignore - Dynamic color from link.hoverColor
                      color: link.hoverColor
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.icon}
                  </motion.div>
                </div>

                {/* Platform Name */}
                <h3 className="text-xs md:text-sm font-semibold text-gray-800 mb-0.5 transition-colors duration-300 group-hover:text-gray-900">
                  {link.nameBangla}
                </h3>

                {/* Followers */}
                {link.followers && (
                  <p className="text-[10px] md:text-xs text-gray-500 mb-2.5 transition-colors duration-300">
                    {link.followers} অনুসরণকারী
                  </p>
                )}

                {/* Follow Button - Subtle */}
                <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300 group-hover:shadow-md">
                  <span>অনুসরণ করুন</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 transform group-hover:translate-x-0.5 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 md:mt-8 text-center"
        >
          <p className="text-xs md:text-sm text-gray-500 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-gray-300" />
            আমাদের অনুসরণ করুন এবং দেশের উন্নয়নে অংশীদার হন
            <span className="w-8 h-px bg-gray-300" />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaCTA;
