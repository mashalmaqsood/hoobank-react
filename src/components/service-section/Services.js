import { useTranslation } from "react-i18next";
import "./Services.css";
const Services = ({ handleForm, setFormOpen }) => {
  const {t} = useTranslation();
  return (
    <>
      <section id="services-section" className="services-section--one grid">
        <article className="services-section__image-container">
          <img
            className="services-section__image-container__image"
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730471280/services_gzepmp.png"
            alt="services"
          />
        </article>
        <article>
          <h1 className="services-section__heading">
            {/* Easily control your billing & invoicing. */}
            {t("servicesHeading")}
          </h1>
          <p className="services-section__text">
          {/* Take complete control of your billing and invoicing processes with ease and efficiency.
          Simplify your workflow, reduce errors, and ensure everything stays perfectly organized. */}
          {t("servicesText")}
          </p>
          <div className="services-section__images-container">
            <img
              src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730543537/applestore_al3htn.png"
              alt="app store"
            />
            <img
              src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730543542/googleplay_isrhjv.png"
              alt="play store"
            />
          </div>
        </article>
      </section>
      <section className="services-section--two grid">
        <article>
          <h1 className="services-section__heading">
            {/* Find a better card deal in few easy steps. */}
            {t("servicesHeading2")}
          </h1>
          <p className="services-section__text">
            {/* Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau. */}
            {/* Discover the perfect card deal tailored to your needs in just a few simple steps.
            Save time and choose the best fit effortlessly. */}
            {t("servicesText2")}
          </p>
          <button
            className="btn"
            onClick={() => {
              handleForm(true);
              setFormOpen(true);
            }}
          >
            {/* Get Started */}
            {t("getStarted")}
          </button>
        </article>
        <article className="services-section__image-container">
          <img
            className="services-section__image-container__image"
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730704947/services2_t7xvlu.png"
            alt="services"
          />
        </article>
      </section>
    </>
  );
};

export default Services;
