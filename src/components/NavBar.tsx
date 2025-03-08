import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="relative z-50 flex justify-between bg-white py-11 px-7">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setIsOpen(false)}
          >
            <img src="images/icon-close.svg" alt="Close icon" />
          </button>
          <div className="flex gap-7 font-semibold">
            <a href="#home">home</a>
            <a href="#shop">shop</a>
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
      <div className="hidden lg:flex gap-13 py-11 px-15">
        <img src="images/logo.svg" alt="Logo" className="object-contain" />
        <div className="flex gap-8 text-white">
          <a href="#home">home</a>
          <a href="#shop">shop</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
