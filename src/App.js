import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import { I18nextProvider } from "react-i18next";
import Benefits from "./components/benefits-section/Benefits";
import ExploreServices from "./components/explore-services/ExploreServices";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero-section/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/service-section/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Form from "./components/form/Form";

function App() {
  const { t, i18n } = useTranslation();
  const [scroll, setScroll] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [language,setLanguage] = useState("en")
  
  useEffect(() => {
    console.log("language",language)
    i18n.changeLanguage(language);
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
        <I18nextProvider i18n={i18n}>
        <Navbar setLanguage={setLanguage} />
        <Hero handleForm={handleForm} setFormOpen={setFormOpen}  language={language} setLanguage={setLanguage} />
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
    </I18nextProvider>
      </div>
  );
}

export default App;
