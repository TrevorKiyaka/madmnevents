// import react from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
    <Navbar/>
    <Hero/>
    <Venue/>
    <Events/>
    <Gallery/>
    <Footer/>
    </div>
  );
}

export default App;
