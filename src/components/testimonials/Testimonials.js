import { testimonials } from "../../lov/data";
import { useTranslation } from "react-i18next";
import "./Testimonials.css";

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <section id="about-us" className="testimonials-section">
      <div className="testimonials-section__content grid">
        <h1 className="testimonials-section__heading">
          {t("testimonialHeading")}
        </h1>
        <p className="testimonials-section__text">{t("testimonialText")}</p>
      </div>
      <section className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <article className="testimonials__card" key={index}>
            <img
              src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730722374/quotes_ekzixn.png"
              width={50}
              alt="quotes"
            />
            <p className="testimonials__card__text">
              {t(`testimonials.${index}.text`)}
            </p>
            <div className="testimonials__content">
              <img src={testimonial.userImage} width={50} height={50} alt="user" />
              <div className="testimonials__info">
                <p className="testimonials__info__name">
                  {testimonial.userName}
                  {t(`testimonials.${index}.userName`)}
                </p>
                <p className="testimonials__info__designation">
                  {t(`testimonials.${index}.userDesignation`)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Testimonials;
