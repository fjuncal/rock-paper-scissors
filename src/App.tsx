import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
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
