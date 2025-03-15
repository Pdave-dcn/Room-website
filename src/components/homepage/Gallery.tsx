import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

type GalleryType = {
  currentImage: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
};

const Gallery = ({ currentImage, setCurrentImage }: GalleryType) => {
  const mobileFurnitureImages: string[] = [
    "images/desktop-image-hero-1.jpg",
    "images/desktop-image-hero-2.jpg",
    "images/desktop-image-hero-3.jpg",
  ];

  const desktopFurnitureImages: string[] = [
    "images/desktop-image-hero-1.jpg",
    "images/desktop-image-hero-2.jpg",
    "images/desktop-image-hero-3.jpg",
  ];

  useEffect(() => {
    // Using just one interval to avoid conflicts
    const interval = setInterval(
      () =>
        setCurrentImage((prev) =>
          prev === mobileFurnitureImages.length - 1 ? 0 : prev + 1
        ),
      5000
    );

    return () => {
      clearInterval(interval);
    };
  }, [mobileFurnitureImages.length, setCurrentImage]);

  const handleNextImage = () => {
    setCurrentImage((prev) =>
      prev === mobileFurnitureImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? mobileFurnitureImages.length - 1 : prev - 1
    );
  };

  const imageVariant = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="relative h-full">
      {/* Mobile image */}
      <div className="lg:hidden h-[300px] sm:h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`mobile-image-${currentImage}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={imageVariant}
            className="h-full w-full"
          >
            <img
              src={`${mobileFurnitureImages[currentImage]}`}
              alt="Furniture showcase"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop image */}
      <div className="hidden lg:block h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={`desktop-image-${currentImage}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={imageVariant}
            className="h-full w-full"
          >
            <img
              src={`${desktopFurnitureImages[currentImage]}`}
              alt="Furniture showcase"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="absolute right-0 bottom-0 lg:right-[-136px] z-20">
        <button
          type="button"
          onClick={handlePreviousImage}
          className="bg-black px-5 py-4 lg:px-[27px] hover:bg-very-dark-gray cursor-pointer transition duration-150"
        >
          <img src="images/icon-angle-left.svg" alt="Left arrow" />
        </button>
        <button
          type="button"
          onClick={handleNextImage}
          className="bg-black px-5 py-4 lg:px-[27px] hover:bg-very-dark-gray cursor-pointer transition duration-150"
        >
          <img src="images/icon-angle-right.svg" alt="Right arrow" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
