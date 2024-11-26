import { heroSectionList } from "../../lov/data";
import { useTranslation } from "react-i18next";
import "./Hero.css";

const Hero = ({ handleForm, setFormOpen}) => {
  const { t } = useTranslation();
  return (
    <>
      <section className="hero-section grid">
        <article className="hero-section__content">
          <div className="hero-section__content__tag">
            <img
              src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730371377/discount_q87xia.png"
              width={20}
              alt="discount"
            />
            <span className="hero-section__content__tag__text">
              20%{" "}
              <span className="hero-section__content__tag--highlight">
                {t("discount")}
                {t("for")}
              </span>
              {t("oneMonth")}
              <span className="hero-section__content__tag--highlight">
                {t("account")}
              </span>
            </span>
          </div>
          <div className="hero-section__content__header">
            <h1 className="hero-section__content__heading">
              The
              {t("next")}
              <span className="hero-section__content__heading__highlight">
                {t("generation")} 
              </span>{" "}
              {t("paymentMethod")}
            </h1>
            <img
              className="hero-section__content__image"
              src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730377110/getstarted_sowqd8.png"
              alt="Get started"
              onClick={() => {
                handleForm(true);
                setFormOpen(true);
              }}
            />
          </div>
          <p className="hero-section__content__text">{t("heroText")}</p>
        </article>
        <article className="hero-section__content2">
          <img
            className="hero-section__content_image2"
            alt="Empowering customers with secure financial solutions for growth"
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730379469/heroimage_ftkcrq.png"
          />
        </article>
      </section>
      <section className="hero-section__content3">
        {heroSectionList.map((item, index) => (
          <div className="hero-section__content3__heading" key={index}>
            <span className="hero-section__content3__heading1">
              {t(item.heading)}
            </span>
            <span className="hero-section__content3__tag">{t(item.tag)}</span>
            <span className="hero-section__content3__heading__line">
              {t(item.symbol)}
            </span>
          </div>
        ))}
      </section>
    </>
  );
};

export default Hero;
