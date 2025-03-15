import { motion } from "motion/react";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[70vh] bg-gradient-to-b from-dark-gray to-[#DECBA4]"
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-17"
        >
          <h1 className="text-4xl lg:text-6xl text-white font-bold mb-4">
            GET IN TOUCH
          </h1>
        </motion.div>
      </motion.div>

      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="p-4 sm:p-6 md:p-8 lg:p-15"
      >
        <h2 className="text-3xl lg:text-4xl mb-8 relative">
          VISIT OUR SHOWROOMS
          <div className="absolute -bottom-2 left-0 w-16 h-1 bg-dark-gray" />
        </h2>
        <div className="space-y-10">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">MAIN SHOWROOM</h3>
            <p className="text-very-dark-gray hover:text-dark-gray transition-colors duration-300">
              123 Furniture Avenue
              <br />
              Design District
              <br />
              New York, NY 10001
              <br />
              <span className="inline-flex items-center gap-2 mt-2 font-medium">
                Tel: (555) 123-4567
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-dark-gray"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </span>
            </p>
          </motion.div>
          {/* Similar pattern for West Coast Gallery */}
        </div>
      </motion.div>

      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="p-4 sm:p-6 md:p-8 lg:p-15 bg-neutral-100"
      >
        <h2 className="text-3xl lg:text-4xl mb-8 relative">
          CONNECT WITH US
          <div className="absolute -bottom-2 left-0 w-16 h-1 bg-dark-gray" />
        </h2>
        <div className="space-y-6 text-very-dark-gray">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <p className="lg:text-lg">
              For customer service inquiries:
              <br />
              <span className="font-semibold hover:text-dark-gray transition-colors duration-300">
                support@roomfurniture.com
              </span>
            </p>
          </motion.div>
          {/* Similar pattern for business partnerships */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-lg bg-white"
          >
            <p className="lg:text-lg">
              Opening Hours:
              <br />
              <span className="font-medium">Monday - Saturday:</span> 10:00 AM -
              7:00 PM
              <br />
              <span className="font-medium">Sunday:</span> 11:00 AM - 6:00 PM
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
