const AboutSection = () => {
  return (
    <div className="lg:flex">
      <img src="images/image-about-dark.jpg" alt="Image of furniture" />
      <div className="py-14 px-7">
        <h2 className="font-semibold tracking-[5px] mb-4">
          ABOUT OUR FURNITURE
        </h2>
        <p className="text-dark-gray">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img src="images/image-about-light.jpg" alt="Image of furniture" />
    </div>
  );
};

export default AboutSection;
