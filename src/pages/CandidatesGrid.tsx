import { motion } from 'framer-motion';
import { candidates } from '../data/candidates';
import { useNavigate } from 'react-router-dom';

const CandidatesGrid = () => {
  const navigate = useNavigate();

  const handleCandidateClick = (candidateId: string) => {
    navigate(`/candidate/${candidateId}`);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  // Ensure Tarique Rahman is first
  const sortedCandidates = [
    candidates.find((c) => c.id === 'tarique-rahman')!,
    ...candidates.filter((c) => c.id !== 'tarique-rahman'),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-bnp-green-50">
      {/* Header */}
      <div className="bg-bnp-green text-white py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBackToHome}
            className="text-white hover:text-bnp-green-100 mb-4 flex items-center gap-2 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            ফিরে যান
          </button>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">আমাদের নেতৃত্ব</h1>
          <p className="text-bnp-green-100 mt-2">বাংলাদেশ জাতীয়তাবাদী দল</p>
        </div>
      </div>

      {/* Candidates Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {sortedCandidates.map((candidate, index) => (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -8 }}
              onClick={() => handleCandidateClick(candidate.id)}
              className="cursor-pointer group"
            >
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all">
                {/* Special Badge for Tarique Rahman */}
                {candidate.id === 'tarique-rahman' && (
                  <div className="absolute top-4 left-4 z-10 bg-bnp-green text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ভারপ্রাপ্ত চেয়ারম্যান
                  </div>
                )}

                {/* Candidate Image */}
                <div className="relative aspect-square bg-gray-200 overflow-hidden">
                  <img
                    src={candidate.image}
                    alt={candidate.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x400/006747/ffffff?text=BNP';
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-semibold">আরও দেখুন →</p>
                    </div>
                  </div>
                </div>

                {/* Candidate Info */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{candidate.nameBangla}</h3>
                  <p className="text-sm text-bnp-green font-semibold">{candidate.positionBangla}</p>
                  <p className="text-xs text-gray-500 mb-2">{candidate.seatBangla}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidatesGrid;
