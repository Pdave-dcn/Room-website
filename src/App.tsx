import HomePage from "./components/homepage/HomePage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="font-league-spartan min-h-screen lg:h-screen lg:flex lg:flex-col">
      <NavBar />
      <div className="lg:flex-1">
        <HomePage />
      </div>
    </div>
  );
};

export default App;
