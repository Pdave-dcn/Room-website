const CategorySection = () => {
  return (
    <div className="text-white">
      <div className="relative h-30 bg-[url('/images/shop-page/mobile-category-1.webp')] bg-bottom px-7 flex flex-col justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <h2 className="text-xl mb-3 font-semibold">LIVING ROOM</h2>
          <p className="text-sm">
            Sofas, coffee tables, TV stands, and more to create a cozy yet
            stylish space.
          </p>
        </div>
      </div>

      <div className="relative px-7 h-30 bg-[url('/images/shop-page/mobile-category-2.webp')] bg-center flex flex-col justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <h2 className="text-xl mb-3 font-semibold">BEDROOM</h2>
          <p className="text-sm">
            Beds, dressers, nightstands, and everything you need for restful
            nights.
          </p>
        </div>
      </div>

      <div className="relative px-7 h-30 bg-[url('/images/shop-page/mobile-category-3.webp')] bg-center flex flex-col justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <h2 className="text-xl mb-3 font-semibold">DINING ROOM</h2>
          <p className="text-sm">
            Elegant dining sets, chairs, and storage solutions for memorable
            gatherings.
          </p>
        </div>
      </div>

      <div className="relative px-7 h-30 bg-[url('/images/shop-page/mobile-category-4.webp')] bg-bottom flex flex-col justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <h2 className="text-xl mb-3 font-semibold">OFFICE</h2>
          <p className="text-sm">
            Desks, chairs, and shelves designed for productivity and comfort.
          </p>
        </div>
      </div>

      <div className="relative px-7 h-30 bg-[url('/images/shop-page/mobile-category-5.webp')] bg-center flex flex-col justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <h2 className="text-xl mb-3 font-semibold">OUTDOOR</h2>
          <p className="text-sm">
            Durable, weather-resistant furniture to extend your living space
            outdoors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
