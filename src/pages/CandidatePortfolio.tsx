import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { candidates } from '../data/candidates';

const CandidatePortfolio = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const candidate = candidates.find((c) => c.id === id);

  const handleBackToGrid = () => {
    navigate('/candidates');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (!candidate) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-bnp-green-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Candidate Not Found</h1>
          <button
            onClick={handleBackToHome}
            className="bg-bnp-green hover:bg-bnp-green-600 text-white px-6 py-3 rounded-full transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-bnp-green-50 to-white">
      {/* Header */}
      <div className="bg-bnp-green text-white py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 mb-4">
            <button
              onClick={handleBackToGrid}
              className="text-white hover:text-bnp-green-100 flex items-center gap-2 transition-colors"
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
              সকল নেতৃত্ব
            </button>
            <button
              onClick={handleBackToHome}
              className="text-white hover:text-bnp-green-100 flex items-center gap-2 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              হোম
            </button>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{candidate.nameBangla}</h1>
          <p className="text-bnp-green-100 mt-2 text-lg">{candidate.positionBangla}</p>
          <p className="text-bnp-green-200 text-md">{candidate.seatBangla}</p>
        </div>
      </div>

      {/* Placeholder Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Candidate Image */}
          <div className="mb-12">
            <div className="relative aspect-video md:aspect-[21/9] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={candidate.image}
                alt={candidate.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/1200x600/006747/ffffff?text=BNP';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{candidate.nameBangla}</h2>
                <p className="text-xl">{candidate.positionBangla}</p>
                <p className="text-lg text-gray-200">{candidate.seatBangla}</p>
              </div>
            </div>
          </div>

          {/* Placeholder Notice */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border-4 border-bnp-green-100">
            <div className="inline-block p-4 bg-bnp-green-50 rounded-full mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-bnp-green"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Portfolio Website Coming Soon
            </h3>
            <p className="text-lg text-gray-600 mb-2">এখানে একটি পোর্টফলিও ওয়েবসাইট থাকবে।</p>
            <p className="text-base text-gray-500 mb-8">
              There will be a portfolio website here.
            </p>

            {/* Candidate Details */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="text-sm font-semibold text-bnp-green uppercase mb-2">নাম</h4>
                  <p className="text-gray-900 font-medium">{candidate.nameBangla}</p>
                  <p className="text-gray-600 text-sm">{candidate.name}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-bnp-green uppercase mb-2">পদবী</h4>
                  <p className="text-gray-900 font-medium">{candidate.positionBangla}</p>
                  <p className="text-gray-600 text-sm">{candidate.position}</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-sm font-semibold text-bnp-green uppercase mb-2">বিবরণ</h4>
                  <p className="text-gray-900">{candidate.descriptionBangla}</p>
                  <p className="text-gray-600 text-sm mt-1">{candidate.description}</p>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8">
              <button
                onClick={handleBackToGrid}
                className="bg-bnp-green hover:bg-bnp-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
              >
                সকল নেতৃত্ব দেখুন
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CandidatePortfolio;
