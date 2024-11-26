import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import Benefits from "./components/benefits/Benefits";
import ExploreServices from "./components/explore-services/ExploreServices";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Form from "./components/form/Form";

function App() {
  const { i18n } = useTranslation();
  const [scroll, setScroll] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(language);
    // eslint-disable-next-line
  }, [language]);

  const handleForm = (value) => {
    if (value) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const toggleForm = (formOpen) => {
    setFormOpen(formOpen);
    handleForm(formOpen);
  };

  return (
    <div className={`${scroll ? "no-scroll" : "scroll"}`}>
        <Navbar setLanguage={setLanguage} />
        <Hero
          handleForm={handleForm}
          setFormOpen={setFormOpen}
        />
        <Benefits handleForm={handleForm} setFormOpen={setFormOpen} />
        <Services handleForm={handleForm} setFormOpen={setFormOpen} />
        <Testimonials />
        <ExploreServices handleForm={handleForm} setFormOpen={setFormOpen} />
        <Footer />
        {formOpen && (
          <>
            <div className="overlay"></div>
            <div className="form">
              <button id="close-button" onClick={() => toggleForm(false)}>
                x
              </button>
              <Form setIsFormOpen={setFormOpen} toggleForm={toggleForm} />
            </div>
          </>
        )}
    </div>
  );
}

export default App;
