import Gallery from "./Gallery";
import IntroSection from "./IntroSection";
import AboutSection from "./AboutSection";
import { useState } from "react";

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="lg:h-full lg:flex lg:flex-col">
      <div className="lg:flex lg:flex-1">
        <div className="lg:flex-[1.5] lg:h-full">
          <Gallery
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
          />
        </div>
        <div className="lg:flex-1 lg:h-full">
          <IntroSection currentImage={currentImage} />
        </div>
      </div>
      <div>
        <AboutSection />
      </div>
    </div>
  );
};

export default HomePage;
