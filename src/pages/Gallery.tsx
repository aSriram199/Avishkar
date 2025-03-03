import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/gallery/g1.jpg',
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 2,
    src: '/gallery/g2.jpg',
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 3,
    src: '/gallery/g3.jpg',
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 4,
    src: '/gallery/g4.jpg',
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 5,
    src: '/gallery/g5.jpg',
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 6,
    src: '/gallery/g6.jpg',
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 7,
    src: '/gallery/g7.jpg',
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 8,
    src: '/gallery/g8.jpg',
    alt: 'Avishkar 2K24 Event'
  },
  {
    id: 9,
    src: '/gallery/g9.jpg',
    alt: 'Avishkar 2K24 Event'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [loadingImages, setLoadingImages] = useState<{ [key: number]: boolean }>({});

  // Add window resize listener to detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Changed to 640px (sm breakpoint) for true mobile devices
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleImageClick = (imageSrc: string) => {
    if (!isMobile) {  // This will now work for all views above 640px
      setSelectedImage(imageSrc);
    }
  };

  const handleImageLoad = (id: number) => {
    setLoadingImages((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <style>{`
        .loader {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-left-color: #15A6F7;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div className="text-center mb-8 mt-12">
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-6">
          <div className="w-16 sm:w-32 md:w-48 h-[2px] bg-[#15A6F7]"></div>
          <h2 className="text-[36px] sm:text-[48px] font-bold text-[#15A6F7] whitespace-nowrap">Gallery</h2>
          <div className="w-16 sm:w-32 md:w-48 h-[2px] bg-[#15A6F7]"></div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                whileHover={{ scale: isMobile ? 1 : 1.02 }}
                transition={{ duration: 0.2 }}
                className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden ${
                  !isMobile ? 'cursor-pointer' : ''
                } shadow-lg hover:shadow-xl`}
                onClick={() => handleImageClick(image.src)}
              >
                {loadingImages[image.id] !== false && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <div className="loader"></div>
                  </div>
                )}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onLoad={() => handleImageLoad(image.id)}
                  onError={() => handleImageLoad(image.id)}
                />
                <div className={`absolute inset-0 ${
                  !isMobile ? 'bg-black/20 hover:bg-black/10' : 'bg-black/10'
                } transition-colors duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl max-h-[90vh] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Selected gallery image"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;