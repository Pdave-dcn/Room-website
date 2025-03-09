import { useEffect } from "react";

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
    const intervalOne = setInterval(
      () =>
        setCurrentImage((prev) =>
          prev === mobileFurnitureImages.length - 1 ? 0 : prev + 1
        ),
      5000
    );

    const intervalTwo = setInterval(
      () =>
        setCurrentImage((prev) =>
          prev === desktopFurnitureImages.length - 1 ? 0 : prev + 1
        ),
      5000
    );

    return () => {
      clearInterval(intervalOne);
      clearInterval(intervalTwo);
    };
  }, [mobileFurnitureImages, desktopFurnitureImages]);

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

  return (
    <div className="relative h-full z-10">
      {/**Mobile image*/}
      <img
        src={`${mobileFurnitureImages[currentImage]}`}
        alt="Image of furniture"
        className="lg:hidden"
      />

      <img
        src={`${desktopFurnitureImages[currentImage]}`}
        alt="Image of furniture"
        className="hidden lg:block lg:h-full lg:w-full lg:object-cover"
      />

      <div className="absolute right-0 bottom-0 lg:right-[-136px]">
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
