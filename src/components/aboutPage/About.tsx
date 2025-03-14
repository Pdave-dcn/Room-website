import { motion } from "motion/react";

const About = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="relative w-full">
        <img
          src="images/about-page/mobile-hero.webp"
          alt="Furniture image"
          className="w-full lg:hidden"
        />
        <img
          src="images/about-page/desktop-hero.webp"
          alt="furniture image"
          className="hidden lg:block"
        />
        <div className="absolute inset-0 bg-black/30 //lg:hidden" />
      </div>
      <div className="px-7 py-14">
        <h1 className="text-3xl mb-3.5 font-semibold">ABOUT US</h1>
        <p className="text-very-dark-gray">
          At room, we believe that furniture is more than just décor, it’s an
          expression of who you are. With a commitment to quality, comfort, and
          design, we create pieces that bring beauty and functionality into
          every home and office.
        </p>
      </div>
      <div>
        <img
          src="images/about-page/mobile-image-1.webp"
          alt="Furniture image"
          className="w-full"
        />
      </div>
      <div className="px-7 py-14">
        <h1 className="text-3xl mb-3.5">OUR STORY</h1>
        <p className="text-very-dark-gray">
          Founded with a passion for blending innovation and craftsmanship, we
          have been helping homeowners and businesses create spaces that inspire
          for over 11 years. From traditional aesthetics to modern minimalism,
          our collections cater to every style and vision.
        </p>
      </div>
      <div>
        <img
          src="images/about-page/mobile-image-2.webp"
          alt="Furniture image"
          className="w-full"
        />
      </div>
      <div className="px-7 py-14">
        <h1 className="text-3xl mb-3.5">OUR DESIGN PHILOSOPHY</h1>
        <p className="text-very-dark-gray">
          We combine functionality and aesthetics to create furniture that
          enhances everyday living. Whether it’s a cozy living room, a stylish
          workspace, or a serene bedroom, our designs are made to complement
          your lifestyle.
        </p>
      </div>
      <div className="relative bg-[url('/images/about-page/mobile-footer.webp')] bg-cover h-64 text-white">
        <div className="relative z-10 px-7 py-14 flex flex-col items-center -mt-10">
          <h2 className="text-3xl mb-3">VISIT US</h2>
          <p className="text-center mb-1.5">
            Experience our collections firsthand at one of our global showrooms
            or explore online from the comfort of your home.
          </p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 font-medium border-2 border-white"
          >
            EXPLORE OUR COLLECTION
          </motion.button>
        </div>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </div>
  );
};

export default About;
