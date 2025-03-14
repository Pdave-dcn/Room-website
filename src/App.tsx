import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import NavBar from "./components/NavBar";
import Shop from "./components/shopPage/Shop";
import About from "./components/aboutPage/About";

const App = () => {
  const basePath = import.meta.env.BASE_URL || "Room-website";
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="lg:flex-1">
        <Routes>
          <Route path={`${basePath}`} element={<HomePage />} />
          <Route path={`${basePath}shop`} element={<Shop />} />
          <Route path={`${basePath}about`} element={<About />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
