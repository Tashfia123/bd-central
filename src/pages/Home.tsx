import HeroSection from '../components/HeroSection';
import BNPIdentityStrip from '../components/BNPIdentityStrip';
import NewsAndUpdatesSection from '../sections/NewsAndUpdatesSection';
import CandidatesSection from '../sections/CandidatesSection';
import CallToActionSection from '../sections/CallToActionSection';
import SocialMediaCTA from '../components/SocialMediaCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* 1. HeroSection */}
      <HeroSection />

      {/* 2. BNPIdentityStrip (Empty) */}
      <BNPIdentityStrip />

      {/* 3. NewsAndUpdatesSection - Static stacked cards (NOT a carousel) */}
      <div className="pt-16 md:pt-24 lg:pt-32">
        <NewsAndUpdatesSection />
      </div>

      {/* 4. CandidatesSection - Auto-scrolling 2-row gallery with candidate cards */}
      <CandidatesSection />

      {/* 5. HowToVoteSection (কিভাবে ভোট দেবেন) */}
      <CallToActionSection />

      {/* 6. SocialMediaSection */}
      <SocialMediaCTA />

      {/* 7. Footer */}
      <Footer />
    </div>
  );
};

export default Home;
