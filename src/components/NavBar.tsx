import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuVariants = {
  closed: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const linkVariants = {
  closed: {
    x: -20,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
  },
};

const overlayVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  const basePath = import.meta.env.BASE_URL || "/Room-website/";

  return (
    <nav className="fixed w-full z-20">
      {/**Mobile navigation*/}
      {!isOpen ? (
        <div className="flex gap-26.5 mt-12 px-7 lg:hidden">
          <button
            type="button"
            aria-label="Open navigation"
            onClick={() => setIsOpen(true)}
          >
            <img src="images/icon-hamburger.svg" alt="Hamburger icon" />
          </button>
          <img src="images/logo.svg" alt="Logo" />
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            className="relative z-50 flex gap-15 bg-white py-11 px-7"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setIsOpen(false)}
            >
              <img src="images/icon-close.svg" alt="Close icon" />
            </button>
            <div className="flex gap-7 font-semibold">
              <motion.div variants={linkVariants}>
                <Link to={`${basePath}`} onClick={handleLinkClick}>
                  home
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link to={`${basePath}shop`} onClick={handleLinkClick}>
                  shop
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link to={`${basePath}about`} onClick={handleLinkClick}>
                  about
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link to={`${basePath}contact`} onClick={handleLinkClick}>
                  contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
          />
        )}
      </AnimatePresence>

      {/**Desktop navigation*/}
      <div className="hidden lg:flex gap-13 py-11 px-15 items-center">
        <img src="images/logo.svg" alt="Logo" className="object-contain" />
        <div className="flex gap-8 text-white">
          <div className="flex flex-col gap-1 items-center group">
            <Link to={`${basePath}`}>home</Link>
            <div className="w-5 h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col gap-1 items-center group">
            <Link to={`${basePath}shop`}>shop</Link>
            <div className="w-5 h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col gap-1 items-center group">
            <Link to={`${basePath}about`}>about</Link>
            <div className="w-5 h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col gap-1 items-center group">
            <Link to={`${basePath}contact`}>contact</Link>
            <div className="w-5 h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
