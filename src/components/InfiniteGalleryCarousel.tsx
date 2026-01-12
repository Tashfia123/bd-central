import { useEffect, useRef } from 'react';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface InfiniteGalleryCarouselProps {
  images: GalleryImage[];
  speed?: number; // pixels per second
}

const InfiniteGalleryCarousel = ({ images, speed = 30 }: InfiniteGalleryCarouselProps) => {
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="w-full bg-gray-50 py-8 md:py-12 overflow-hidden">
      <div className="space-y-6">
        {/* First Row - Scroll Left to Right */}
        <InfiniteRow images={duplicatedImages} direction="left" speed={speed} />

        {/* Second Row - Scroll Right to Left */}
        <InfiniteRow images={duplicatedImages} direction="right" speed={speed} />
      </div>
    </div>
  );
};

interface InfiniteRowProps {
  images: GalleryImage[];
  direction: 'left' | 'right';
  speed: number;
}

const InfiniteRow = ({ images, direction, speed }: InfiniteRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const positionRef = useRef(0);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    let lastTimestamp = 0;
    const pixelsPerMs = speed / 1000;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Calculate movement
      const movement = pixelsPerMs * deltaTime;

      if (direction === 'left') {
        positionRef.current += movement;
      } else {
        positionRef.current -= movement;
      }

      // Reset position when one set of images has scrolled
      const singleSetWidth = row.scrollWidth / 3; // Since we have 3 copies

      if (direction === 'left' && positionRef.current >= singleSetWidth) {
        positionRef.current -= singleSetWidth;
      } else if (direction === 'right' && positionRef.current <= -singleSetWidth) {
        positionRef.current += singleSetWidth;
      }

      row.style.transform = `translateX(${-positionRef.current}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [direction, speed]);

  // Pause on hover
  const handleMouseEnter = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseLeave = () => {
    let lastTimestamp = 0;
    const pixelsPerMs = speed / 1000;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      const movement = pixelsPerMs * deltaTime;

      if (direction === 'left') {
        positionRef.current += movement;
      } else {
        positionRef.current -= movement;
      }

      const row = rowRef.current;
      if (!row) return;

      const singleSetWidth = row.scrollWidth / 3;

      if (direction === 'left' && positionRef.current >= singleSetWidth) {
        positionRef.current -= singleSetWidth;
      } else if (direction === 'right' && positionRef.current <= -singleSetWidth) {
        positionRef.current += singleSetWidth;
      }

      row.style.transform = `translateX(${-positionRef.current}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={rowRef} className="flex gap-4 md:gap-6">
        {images.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="flex-shrink-0 w-64 h-40 md:w-80 md:h-48 lg:w-96 lg:h-56 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              draggable={false}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/400x250/006747/ffffff?text=BNP';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteGalleryCarousel;
