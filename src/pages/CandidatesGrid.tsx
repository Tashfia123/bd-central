import { motion } from 'framer-motion';
import { candidates } from '../data/candidates';
import { useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import CandidateCard from '../components/CandidateCard';

const CandidatesGrid = () => {
  const navigate = useNavigate();
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  const handleCandidateClick = (candidateId: string) => {
    navigate(`/candidate/${candidateId}`);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  // Extract unique districts dynamically
  const districts = useMemo(() => {
    const uniqueDistricts = Array.from(
      new Set(candidates.map((c) => c.district))
    ).sort();
    return uniqueDistricts;
  }, []);

  // Extract regions based on selected district
  const regions = useMemo(() => {
    if (!selectedDistrict) return [];
    const regionsForDistrict = candidates
      .filter((c) => c.district === selectedDistrict)
      .map((c) => c.region);
    return Array.from(new Set(regionsForDistrict)).sort();
  }, [selectedDistrict]);

  // Filter candidates based on selections
  const filteredCandidates = useMemo(() => {
    let filtered = candidates;

    if (selectedDistrict) {
      filtered = filtered.filter((c) => c.district === selectedDistrict);
    }

    if (selectedRegion) {
      filtered = filtered.filter((c) => c.region === selectedRegion);
    }

    return filtered;
  }, [selectedDistrict, selectedRegion]);

  // Ensure Tarique Rahman is first
  const sortedCandidates = useMemo(() => {
    const tarique = filteredCandidates.find((c) => c.id === 'tarique-rahman');
    const others = filteredCandidates.filter((c) => c.id !== 'tarique-rahman');
    return tarique ? [tarique, ...others] : others;
  }, [filteredCandidates]);

  // Reset filters
  const handleResetFilters = () => {
    setSelectedDistrict('');
    setSelectedRegion('');
  };

  // Handle district change (reset region when district changes)
  const handleDistrictChange = (district: string) => {
    setSelectedDistrict(district);
    setSelectedRegion(''); // Reset region when district changes
  };

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

      {/* Filter Section - 50% width on left */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 py-6 md:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Filter Panel - 50% width on left */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* District Filter */}
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    জেলা
                  </label>
                  <select
                    value={selectedDistrict}
                    onChange={(e) => handleDistrictChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-bnp-green focus:border-transparent transition-all shadow-sm hover:border-gray-300"
                  >
                    <option value="">জেলা নির্বাচন করুন</option>
                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {candidates.find((c) => c.district === district)?.districtBangla || district}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Region Filter - Dependent on District */}
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    আসন
                  </label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    disabled={!selectedDistrict}
                    className={`w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-bnp-green focus:border-transparent transition-all shadow-sm ${!selectedDistrict
                      ? 'bg-gray-50 cursor-not-allowed text-gray-400 border-gray-100'
                      : 'hover:border-gray-300'
                      }`}
                  >
                    <option value="">আসন নির্বাচন করুন</option>
                    {regions.map((region) => (
                      <option key={region} value={region}>
                        {candidates.find((c) => c.region === region)?.regionBangla || region}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Reset Button */}
                {(selectedDistrict || selectedRegion) && (
                  <div className="flex items-end">
                    <button
                      onClick={handleResetFilters}
                      className="px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all font-medium whitespace-nowrap shadow-sm hover:shadow"
                    >
                      রিসেট
                    </button>
                  </div>
                )}
              </div>

              {/* Results Count */}
              <div className="mt-4 text-sm text-gray-500 font-medium">
                মোট <span className="text-bnp-green font-bold">{sortedCandidates.length}</span> জন প্রার্থী পাওয়া গেছে
              </div>
            </div>

            {/* Right side - empty or can be used for additional content */}
            <div className="hidden lg:block lg:w-1/2"></div>
          </div>
        </div>
      </div>

      {/* Candidates Grid - Using same floating card style */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {sortedCandidates.map((candidate, index) => (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
            >
              <CandidateCard
                candidate={candidate}
                onClick={handleCandidateClick}
                showBadge={candidate.id === 'tarique-rahman'}
                variant="grid"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidatesGrid;
