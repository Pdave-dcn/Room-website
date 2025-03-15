import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  fadeInVariants,
  slideUpVariants,
  staggerContainerVariants,
} from "./animations";

const MotionLink = motion(Link);

const About = () => {
  const basePath = import.meta.env.BASE_URL || "/Room-website/";
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-4">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="relative lg:h-[60vh] lg:col-span-2"
      >
        <img
          src="images/about-page/mobile-hero.webp"
          alt="Furniture image"
          className="w-full lg:hidden"
        />
        <img
          src="images/about-page/desktop-hero.webp"
          alt="furniture image"
          className="hidden lg:block w-full h-full object-cover"
        />
        <img
          src="images/logo.svg"
          alt="Logo"
          className="object-cover absolute bottom-13 right-15 z-50 hidden lg:block"
        />
        <div className="absolute inset-0 bg-black/30 //lg:hidden" />
      </motion.div>

      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:col-span-2 lg:grid grid-cols-2"
      >
        <motion.div variants={slideUpVariants} className="px-7 py-14 lg:px-15">
          <h1 className="text-3xl mb-3.5 lg:text-5xl">ABOUT US</h1>
          <p className="text-very-dark-gray lg:text-2xl">
            At room, we believe that furniture is more than just décor, it’s an
            expression of who you are. With a commitment to quality, comfort,
            and design, we create pieces that bring beauty and functionality
            into every home and office.
          </p>
        </motion.div>
        <motion.div variants={fadeInVariants}>
          <img
            src="images/about-page/mobile-image-1.webp"
            alt="Furniture image"
            className="w-full lg:hidden"
          />
          <img
            src="images/about-page/desktop-image-1.webp"
            alt="Furniture image"
            className="hidden  lg:block"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:col-span-2 lg:flex"
      >
        <motion.div
          variants={slideUpVariants}
          className="px-7 py-14 lg:flex-1 lg:order-2 lg:px-15"
        >
          <h1 className="text-3xl mb-3.5 lg:text-5xl">OUR STORY</h1>
          <p className="text-very-dark-gray lg:text-2xl">
            Founded with a passion for blending innovation and craftsmanship, we
            have been helping homeowners and businesses create spaces that
            inspire for over 11 years. From traditional aesthetics to modern
            minimalism, our collections cater to every style and vision.
          </p>
        </motion.div>
        <motion.div variants={fadeInVariants} className="lg:flex-1 lg:order-1">
          <img
            src="images/about-page/mobile-image-2.webp"
            alt="Furniture image"
            className="w-full lg:hidden"
          />
          <img
            src="images/about-page/desktop-image-2.webp"
            alt="Furniture image"
            className="hidden lg:block w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:col-span-2 lg:flex"
      >
        <div className="px-7 py-14 lg:flex-1 lg:px-0 lg:pl-15 lg:py-0 lg:pt-14">
          <h1 className="text-3xl mb-3.5 lg:text-5xl">OUR DESIGN PHILOSOPHY</h1>
          <p className="text-very-dark-gray lg:text-2xl">
            We combine functionality and aesthetics to create furniture that
            enhances everyday living. Whether it’s a cozy living room, a stylish
            workspace, or a serene bedroom, our designs are made to complement
            your lifestyle.
          </p>
        </div>

        {/**Mobile footer */}
        <div className="relative bg-[url('/images/about-page/mobile-footer.webp')] bg-cover h-64 text-white lg:hidden">
          <div className="relative z-10 px-7 pt-7 flex flex-col items-center">
            <h2 className="text-3xl mb-3">VISIT US</h2>
            <p className="text-center mb-1.5">
              Experience our collections firsthand at one of our global
              showrooms or explore online from the comfort of your home.
            </p>
            <MotionLink
              to={`${basePath}shop`}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 font-medium border-2 border-white"
            >
              EXPLORE OUR COLLECTION
            </MotionLink>
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/**Desktop element */}
        <div className="hidden px-7 py-14 lg:block flex-1 lg:px-15 lg:py-0 lg:pt-14">
          <h2 className="text-3xl mb-3 lg:text-5xl">VISIT US</h2>
          <p className="lg:text-2xl text-very-dark-gray">
            Experience our collections firsthand at one of our global showrooms
            or explore online from the comfort of your home.
          </p>
        </div>
      </motion.div>

      {/**Desktop footer element */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="hidden lg:flex flex-col items-center justify-center h-[45vh] col-span-2 relative -mt-30"
      >
        <img
          src="images/about-page/desktop-footer.webp"
          alt="Furniture Image"
          className="object-cover w-full h-full absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <MotionLink
          to={`${basePath}shop`}
          whileTap={{ scale: 0.95 }}
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            transition: { duration: 0.1 },
          }}
          className="px-5 py-2 border-2 text-2xl text-white relative z-10 transition-colors duration-300 inline-block"
        >
          EXPLORE OUR COLLECTION
        </MotionLink>
      </motion.div>
    </div>
  );
};

export default About;
