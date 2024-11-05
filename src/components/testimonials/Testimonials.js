import "./Testimonials.css";
import { testimonials } from "../../lov/data";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-section__content grid">
        <h1 className="testimonials-section__heading">
          What people are saying about us
        </h1>
        <p className="testimonials-section__text">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <section className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <article className="testimonials__card" key={index}>
            <img
              src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730722374/quotes_ekzixn.png"
              width={50}
            />
            <p className="testimonials__card__text">{testimonial.text}</p>
            <div className="testimonials__content">
              <img src={testimonial.userImage} width={50} height={50} />
              <div className="testimonials__info">
                <p className="testimonials__info__name">
                  {testimonial.userName}
                </p>
                <p className="testimonials__info__designation">
                  {testimonial.userDesignation}
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
