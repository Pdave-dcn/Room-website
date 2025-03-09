const IntroSection = () => {
  return (
    <div className="py-14 px-7 lg:h-full lg:flex lg:flex-col lg:justify-center lg:px-20">
      <h1 className="text-4xl font-bold mb-3.5">
        Discover innovative ways to decorate
      </h1>
      <p className="text-dark-gray mb-8">
        We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.
      </p>
      <a href="#" className="flex gap-5 shop__link">
        <span className="text-md font-medium tracking-[11px]">SHOP NOW</span>
        <img src="images/icon-arrow.svg" alt="Arrow icon" />
      </a>
    </div>
  );
};

export default IntroSection;
