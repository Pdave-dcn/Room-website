const Gallery = () => {
  return (
    <div className="relative h-full z-10">
      <img
        src="images/mobile-image-hero-1.jpg"
        alt="Image of furniture"
        className="lg:hidden"
      />
      <img
        src="images/desktop-image-hero-1.jpg"
        alt="Image of furniture"
        className="hidden lg:block lg:h-full lg:w-full lg:object-cover"
      />
      <div className="absolute right-0 bottom-0 lg:right-[-140px]">
        <button type="button" className="bg-black px-5 py-4 lg:px-7">
          <img src="images/icon-angle-left.svg" alt="Left arrow" />
        </button>
        <button type="button" className="bg-black px-5 py-4 lg:px-7">
          <img src="images/icon-angle-right.svg" alt="Right arrow" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
