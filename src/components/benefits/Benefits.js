import { useTranslation } from "react-i18next";
import "./Benefits.css";

const Benefits = ({ handleForm, setFormOpen }) => {
  const {t} = useTranslation();
  return (
    <section id="benefits-section" className="benefits-section grid">
      <article className="benefits-section__container1">
        <h1 className="benefits-section__container1__heading">
          {t("benefitsHeading")}
        </h1>
        <p className="benefits-section__container1__text">
          {t("benefitsText")}
        </p>
        <button
          className="btn"
          onClick={() => {
            handleForm(true);
            setFormOpen(true);
          }}
        >
          {t("getStarted")}
        </button>
      </article>
      <article className="benefits-section__container2">
        <section className="benefits-section__container2__section1">
          <img
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730462856/reward_fb9w9s.png"
            width={50}
            alt="rewards"
          />
          <div className="benefits-section__content">
            <h3 className="benefits-section__content__heading">{t("rewards")}</h3>
            <p className="benefits-section__content__text">
              {t("rewardsText")}
            </p>
          </div>
        </section>
        <section className="benefits-section__container2__section2">
          <img
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730462857/verified_p6joep.png"
            width={50}
            alt="verified"
          />
          <div className="benefits-section__content">
            <h3 className="benefits-section__content__heading">{t("secured")}</h3>
            <p className="benefits-section__content__text">
              {t("securedText")}
            </p>
          </div>
        </section>
        <section className="benefits-section__container2__section3">
          <img
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730462856/transfer_xvnxgx.png"
            width={50}
            alt="transfer"
          />
          <div className="benefits-section__content">
            <h3 className="benefits-section__content__heading">
              {t("balance")}
            </h3>
            <p className="benefits-section__content__text">
              {t("balanceText")}
            </p>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Benefits;
