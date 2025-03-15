import { motion, AnimatePresence } from "motion/react";

const IntroSection = ({ currentImage }: { currentImage: number }) => {
  const intros = [
    {
      title: "Discover innovative ways to decorate",
      description:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      title: "We are available all across the globe",
      description:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today",
    },
    {
      title: "Manufactured with the best materials",
      description:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ];

  const fadeInContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
    exit: { opacity: 0 },
  };

  const fadeInChild = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <>
      <div className="py-14 px-7 lg:h-full lg:flex lg:flex-col lg:justify-center lg:px-20 overflow-hidden">
        {/* Fixed height container to prevent layout shifts */}
        <div className="min-h-[270px] md:min-h-[230px] lg:min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentImage}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeInContainer}
              className="h-full"
            >
              <motion.h1
                variants={fadeInChild}
                className="text-4xl font-bold mb-3.5"
              >
                {intros[currentImage].title}
              </motion.h1>
              <motion.p variants={fadeInChild} className="text-dark-gray mb-8">
                {intros[currentImage].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Shop now link in a fixed position */}
        <div className="mt-4">
          <a href="#" className="flex gap-5 shop__link">
            <span className="text-md font-medium tracking-[11px]">
              SHOP NOW
            </span>
            <img src="images/icon-arrow.svg" alt="Arrow icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
