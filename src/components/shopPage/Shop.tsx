import React from "react";
import CategorySection from "./CategorySection";
import { motion } from "motion/react";

const Shop: React.FC = () => {
  const basePath = import.meta.env.BASE_URL || "/Room-website/";

  const getImagePath = (path: string) => {
    const pathWithoutLeadingSlash = path.startsWith("/") ? path.slice(1) : path;
    return `${basePath}${pathWithoutLeadingSlash}`;
  };

  return (
    <div>
      <div className="lg:flex">
        <div className="lg:flex-1">
          <div className="relative bg-[url('/images/shop-page/mobile-hero.webp')] bg-no-repeat w-full h-[550px] lg:bg-linear-to-b lg:from-dark-gray lg:to-[#DECBA4]">
            <div className="absolute inset-0 bg-black/50 lg:hidden"></div>
            <div className="relative flex flex-col gap-4 lg:gap-6.5 pt-30 lg:pt-50 text-white z-10 px-7 lg:px-15">
              <h1 className="text-3xl font-bold lg:text-4xl">
                SHOP OUR EXCLUSIVE COLLECTIONS
              </h1>
              <p className="lg:text-lg">
                Discover premium furniture designed to enhance your space with
                elegance and functionality. Whether you're looking for a modern
                touch or timeless classics, we have something for every style.
              </p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1 }}
                type="button"
                className="bg-white text-black self-start px-5 py-2"
              >
                SHOP NOW
              </motion.button>
            </div>
          </div>
          <div className="hidden lg:flex w-90">
            <img
              src={getImagePath("images/shop-page/desktop-hero-3.webp")}
              alt="Furniture image"
            />
            <img
              src={getImagePath("images/shop-page/desktop-hero-2.webp")}
              alt="Furniture image"
            />
          </div>
        </div>

        <div className="flex-1 hidden lg:flex">
          <img
            src={getImagePath("images/shop-page/desktop-hero-1.webp")}
            alt="furniture image"
            className="mt-[-300px]"
          />
        </div>
      </div>

      {/* Main content section with fixed grid layout for desktop */}
      <div className="lg:grid lg:grid-cols-2">
        {/* Left content column with fixed width */}
        <div className="lg:max-w-full">
          <div>
            <div className="px-7 py-14 lg:px-15">
              <div className="relative">
                <h1 className="text-3xl mb-4 font-bold lg:text-4xl">
                  OUR <br className="hidden lg:block" /> CATEGORIES
                </h1>
                <img
                  src={getImagePath("images/icon-arrow.svg")}
                  alt="Arrow icon"
                  className="absolute top-0 left-30 w-30 hidden lg:block"
                />
              </div>
              <p className="text-very-dark-gray lg:text-lg">
                Explore a curated selection of furniture, crafted with the
                finest materials and built to last.
              </p>
            </div>

            <div className="lg:hidden">
              <CategorySection />
            </div>
          </div>

          <div className="px-7 py-14 lg:px-15 lg:py-7">
            <h1 className="text-3xl font-bold mb-4 lg:text-4xl">
              WHY SHOP WITH US?
            </h1>
            <p className="text-very-dark-gray lg:text-lg">
              <span className="font-semibold">Unmatched Quality & Comfort</span>{" "}
              – We ensure every piece meets the highest standards. <br /> <br />
              <span className="font-semibold">Global Availability</span> – Find
              our furniture in stores across the world or shop online with
              delivery options. <br /> <br />
              <span className="font-semibold">Expert Assistance</span> – Need
              help? Our specialists are here to guide you in creating your dream
              space.
            </p>
          </div>

          <div className="hidden px-7 py-14 lg:flex flex-col gap-4 lg:px-15 lg:py-7">
            <h1 className="text-3xl font-bold lg:text-4xl">
              FIND YOUR PERFECT PIECE
            </h1>
            <p className="text-very-dark-gray lg:text-lg">
              Browse our collection and transform your home with furniture that
              reflects your unique style.
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
              type="button"
              className="self-start bg-black text-white px-5 py-2"
            >
              SHOP NOW
            </motion.button>
          </div>
        </div>

        {/* Right column with CategorySection that maintains its width */}
        <div className="hidden lg:block">
          <CategorySection />
        </div>
      </div>

      <div className="lg:hidden">
        <div>
          <img
            src={getImagePath("images/shop-page/mobile-image-1.webp")}
            alt="Furniture image"
          />
        </div>

        <div className="px-7 py-14 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">FIND YOUR PERFECT PIECE</h1>
          <p className="text-very-dark-gray">
            Browse our collection and transform your home with furniture that
            reflects your unique style.
          </p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="button"
            className="self-start bg-black text-white px-5 py-2"
          >
            SHOP NOW
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
