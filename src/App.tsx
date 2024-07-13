import { useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Play from "./components/Play";

function App() {
  const location = useLocation();
  const { scoreState } = location.state;

  return (
    <>
      <div className="bg-red-400 h-screen">
        <div className="">
          <Header score={scoreState} />
        </div>
        <p className=" text-center text-gray-800 dark:text-gray-100 text-3xl font-bold mt-8">
          Escolha uma das opções:
        </p>
        <div className="flex justify-center">
          <Play score={scoreState} />
        </div>
        <div className="fixed left-0 bottom-0 w-full mb-8 text-center">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
