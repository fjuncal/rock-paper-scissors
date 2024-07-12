import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import logo from "./assets/teste.png";
function App() {
  return (
    <>
      <div className="flex justify-center ">
        <img src={logo} alt="logo" className="h-40" />
      </div>
      <div className="">
        <div className="">
          <Header />
        </div>
        <div className="fixed left-0 bottom-0 w-full mb-8 text-center">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
