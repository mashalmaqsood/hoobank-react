import "./Services.css";

const Services = () => {
  return (
    <>
      <section className="services-section--one grid">
        <article className="services-section__image-container">
          <img
            className="services-section__image-container__image"
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730471280/services_gzepmp.png"
            alt="services"
          />
        </article>
        <article>
          <h1 className="services-section__heading">
            Easily control your billing & invoicing.
          </h1>
          <p className="services-section__text">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="services-section__images-container">
            <img src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730543537/applestore_al3htn.png" alt="app store"/>
            <img src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730543542/googleplay_isrhjv.png" alt="play store"/>
          </div>
        </article>
      </section>
      <section className="services-section--two grid">
        <article>
          <h1 className="services-section__heading">
          Find a better card deal in few easy steps.
          </h1>
          <p className="services-section__text">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <button className="btn">Get Started</button>
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
