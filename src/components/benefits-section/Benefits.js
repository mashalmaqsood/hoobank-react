import { useTranslation } from "react-i18next";
import "./Benefits.css";

const Benefits = ({ handleForm, setFormOpen }) => {
  const {t} = useTranslation();
  return (
    <section id="benefits-section" className="benefits-section grid">
      <article className="benefits-section__container1">
        <h1 className="benefits-section__container1__heading">
          {/* You do the business, we’ll handle the money. */}
          {t("benefitsHeading")}
        </h1>
        <p className="benefits-section__container1__text">
          {/* With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market. */}
          {t("benefitsText")}
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
              {/* The best credit cards offer some tantalizing combinations of
              promotions and prizes */}
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
              {/* We take proactive steps make sure your information and
              transactions are secure. */}
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
              {/* Balance Transfer */}
              {t("balance")}
            </h3>
            <p className="benefits-section__content__text">
              {/* A balance transfer credit card can save you a lot of money in
              interest charges. */}
              {t("balanceText")}
            </p>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Benefits;
