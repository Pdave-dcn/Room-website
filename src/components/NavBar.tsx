import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const basePath = import.meta.env.BASE_URL;

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
        <div className="relative z-50 flex gap-15 bg-white py-11 px-7">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setIsOpen(false)}
          >
            <img src="images/icon-close.svg" alt="Close icon" />
          </button>
          <div className="flex gap-7 font-semibold">
            <Link to={`${basePath}`}>home</Link>
            <Link to={`${basePath}shop`}>shop</Link>
            <a href="#about">about</a>
            <a href="#contact">contact</a>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

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
            <a href="#about">about</a>
            <div className="w-5 h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col gap-1 items-center group">
            <a href="#contact">contact</a>
            <div className="w-5 h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
