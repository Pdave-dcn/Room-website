import { motion } from "motion/react";
import React from "react";

interface Category {
  title: string;
  description: string;
  mobileImage: string;
  desktopImage: string;
  backgroundStyle: string;
}

const CategorySection: React.FC = () => {
  const basePath = import.meta.env.BASE_URL;

  const getImagePath = (path: string) =>
    `${basePath}${path.startsWith("/") ? path.slice(1) : path}`;

  const categories: Category[] = [
    {
      title: "LIVING ROOM",
      description:
        "Sofas, coffee tables, TV stands, and more to create a cozy yet stylish space.",
      mobileImage: "images/shop-page/mobile-category-1.webp",
      desktopImage: "images/shop-page/desktop-category-1.webp",
      backgroundStyle: "bg-bottom",
    },
    {
      title: "BEDROOM",
      description:
        "Beds, dressers, nightstands, and everything you need for restful nights.",
      mobileImage: "images/shop-page/mobile-category-2.webp",
      desktopImage: "images/shop-page/desktop-category-2.webp",
      backgroundStyle: "bg-center",
    },
    {
      title: "DINING ROOM",
      description:
        "Elegant dining sets, chairs, and storage solutions for memorable gatherings.",
      mobileImage: "images/shop-page/mobile-category-3.webp",
      desktopImage: "images/shop-page/desktop-category-3.webp",
      backgroundStyle: "bg-center",
    },
    {
      title: "OFFICE",
      description:
        "Desks, chairs, and shelves designed for productivity and comfort.",
      mobileImage: "images/shop-page/mobile-category-4.webp",
      desktopImage: "images/shop-page/desktop-category-4.webp",
      backgroundStyle: "bg-bottom",
    },
    {
      title: "OUTDOOR",
      description:
        "Durable, weather-resistant furniture to extend your living space outdoors.",
      mobileImage: "images/shop-page/mobile-category-5.webp",
      desktopImage: "images/shop-page/desktop-category-5.webp",
      backgroundStyle: "bg-center",
    },
  ];

  return (
    <div className="text-white">
      {categories.map((category) => {
        // Get full paths for images with base path included
        const mobileImagePath = getImagePath(category.mobileImage);
        const desktopImagePath = getImagePath(category.desktopImage);

        return (
          <motion.div
            whileTap={{ scale: 0.95 }}
            key={category.title}
            className={`relative h-30 lg:h-40 ${category.backgroundStyle} px-7 flex flex-col justify-center bg-no-repeat bg-cover lg:cursor-pointer group`}
            style={{
              backgroundImage: `url(${mobileImagePath})`,
            }}
          >
            {/* Hidden on mobile, visible on desktop */}
            <div
              className="absolute inset-0 hidden lg:block bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${desktopImagePath})`,
                backgroundPosition: "bottom",
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 opacity-100 lg:group-hover:opacity-30 transition-opacity">
              <h2 className="text-xl lg:text-2xl mb-3 font-semibold">
                {category.title}
              </h2>
              <p className="text-sm lg:text-base">{category.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CategorySection;
