import { categories } from "../../lov/data";
import { useTranslation } from "react-i18next";
import "./ExploreServices.css";

const ExploreServices = ({ handleForm, setFormOpen }) => {
  const { t } = useTranslation();
  return (
    <section className="explore-section">
      <div className="explore-section__categories">
        {categories.map((category, index) => (
          <img
            className="explore-section__categories__image"
            src={category}
            key={index}
            width={200}
            alt={category}
          />
        ))}
      </div>
      <div className="explore-section__content grid">
        <section className="explore-section__content__container">
          <h1 className="explore-section__content__heading">
            {/* Let’s try our service now! */}
            {t("exploreHeading")}
          </h1>
          <p className="explore-section__content__text">
            {/* Everything you need to accept card payments and grow your business
            anywhere on the planet. */}
            {t("exploreText")}
          </p>
        </section>
        <section className="explore-section__content__button-container">
          <button
            className="btn btn--explore"
            onClick={() => {
              handleForm(true);
              setFormOpen(true);
            }}
          >
            {/* Get Started */}
            {t("getStarted")}
          </button>
        </section>
      </div>
    </section>
  );
};

export default ExploreServices;
