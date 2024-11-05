import Benefits from "./components/benefitssecttion/Benefits";
import ExploreServices from "./components/exploreservices/ExploreServices";
import Hero from "./components/herosection/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/servicessection/Services";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Benefits/>
   <Services/>
   <Testimonials/>
   <ExploreServices/>
   </>
  );
}

export default App;
