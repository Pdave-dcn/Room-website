import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import NavBar from "./components/NavBar";
import Shop from "./components/shopPage/Shop";

const App = () => {
  const basePath = import.meta.env.BASE_URL;
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="lg:flex-1">
        <Routes>
          <Route path={`${basePath}`} element={<HomePage />} />
          <Route path={`${basePath}shop`} element={<Shop />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
