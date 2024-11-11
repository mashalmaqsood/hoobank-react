import { useState } from "react";
import Form from "../form/Form";
import "./Hero.css";

const Hero = ({handleForm}) => {

  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = (formOpen) => {
    setIsFormOpen(formOpen);
    handleForm(formOpen);
  };


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
            <span className="hero-section__content__tag__text">20% <span className="hero-section__content__tag--highlight">DISCOUNT FOR </span>1 MONTH <span className="hero-section__content__tag--highlight">ACCOUNT</span></span>
          </div>
          <div className="hero-section__content__header">
            <h1 className="hero-section__content__heading">
              The Next{" "}
              <span className="hero-section__content__heading__highlight">
                Generation
              </span>{" "}
              Payment Method.
            </h1>
            <img
              className="hero-section__content__image"
              src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730377110/getstarted_sowqd8.png"
              alt="Get started"
              onClick={()=> toggleForm(true)}
            />
          </div>
          <p className="hero-section__content__text">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. <br />
            We examine annual percentage rates, annual fees.
          </p>
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
        <div className="hero-section__content3__heading">
          <span className="hero-section__content3__heading1">3800+</span>
          <span className="hero-section__content3__tag">User Active</span>
          <span className="hero-section__content3__heading__line">|</span>
        </div>
        <div className="hero-section__content3__heading">
          <span className="hero-section__content3__heading1">230+</span>
          <span className="hero-section__content3__tag">
            TRUSTED BY COMPANY
          </span>
          <span className="hero-section__content3__heading__line">|</span>
        </div>
        <div className="hero-section__content3__heading">
          <span className="hero-section__content3__heading1">$230M+</span>
          <span className="hero-section__content3__tag">TRANSACTION</span>
        </div>
      </section>
      {isFormOpen && (
        <>
          <div className="overlay"></div>
          <Form setIsFormOpen={setIsFormOpen} toggleForm={toggleForm} />
        </>
      )}
    </>
  );
};

export default Hero;
