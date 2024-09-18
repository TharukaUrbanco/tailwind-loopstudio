import Home from "./components/Home";
import SecondComponent from "./components/SecondComponent";

const App = () => {
  return (
    <div
      className="
      flex flex-col min-h-screen"
    >
      <Home />
      <SecondComponent />
    </div>
  );
};

export default App;
