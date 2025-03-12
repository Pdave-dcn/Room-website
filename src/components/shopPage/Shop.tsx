import CategorySection from "./CategorySection";

const Shop = () => {
  return (
    <div>
      <div className="relative bg-[url('/images/shop-page/mobile-hero.webp')] w-full h-[550px] //-mt-40">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative flex flex-col gap-4 pt-30 text-white z-10 px-7">
          <h1 className="text-3xl font-bold">SHOP OUR EXCLUSIVE COLLECTIONS</h1>
          <p className="">
            Discover premium furniture designed to enhance your space with
            elegance and functionality. Whether you're looking for a modern
            touch or timeless classics, we have something for every style.
          </p>
          <button
            type="button"
            className="bg-white text-black self-start px-5 py-2"
          >
            SHOP NOW
          </button>
        </div>
      </div>

      <div>
        <div className="px-7 py-14">
          <h1 className="text-3xl mb-4 font-bold">OUR CATEGORIES</h1>
          <p>
            Explore a curated selection of furniture, crafted with the finest
            materials and built to last.
          </p>
        </div>

        <CategorySection />
      </div>
    </div>
  );
};

export default Shop;
