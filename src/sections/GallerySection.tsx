import InfiniteGalleryCarousel from '../components/InfiniteGalleryCarousel';
import { galleryImages } from '../data/gallery';

const GallerySection = () => {
  return (
    <section className="w-full overflow-hidden">
      <InfiniteGalleryCarousel images={galleryImages} speed={40} />
    </section>
  );
};

export default GallerySection;
