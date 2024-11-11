import { useState } from "react";
import Benefits from "./components/benefitssecttion/Benefits";
import ExploreServices from "./components/exploreservices/ExploreServices";
import Footer from "./components/footer/Footer";
import Hero from "./components/herosection/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/servicessection/Services";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  // const [isFormVisible, setIsFormVisible] = useState(false);

  // const handleForm = (value) => {
  //   setIsFormVisible(value);
  // };
  const handleForm = (value) => {
    if (value) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    //  <div className={`wrapper ${isFormVisible ? "no-scroll" : ""}`}>
    <>
      <Navbar />
      <Hero handleForm={handleForm} />
      <Benefits handleForm={handleForm} />
      <Services handleForm={handleForm} />
      <Testimonials />
      <ExploreServices handleForm={handleForm} />
      <Footer />
      {/* </div> */}
    </>
  );
}

export default App;
