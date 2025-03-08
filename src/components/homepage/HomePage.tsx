import Gallery from "./Gallery";
import IntroSection from "./IntroSection";
import AboutSection from "./AboutSection";

const HomePage = () => {
  return (
    <div className="lg:h-full lg:flex lg:flex-col">
      <div className="lg:flex lg:flex-1">
        <div className="lg:flex-[1.5] lg:h-full">
          <Gallery />
        </div>
        <div className="lg:flex-1 lg:h-full">
          <IntroSection />
        </div>
      </div>
      <div>
        <AboutSection />
      </div>
    </div>
  );
};

export default HomePage;
