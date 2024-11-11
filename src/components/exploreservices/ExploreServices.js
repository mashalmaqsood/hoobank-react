
import { categories } from "../../lov/data"
import { useState } from "react";
import Form from "../form/Form";
import './ExploreServices.css' 
const ExploreServices = ({handleForm}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = (formOpen) => {
    setIsFormOpen(formOpen);
    handleForm(formOpen);
  };

  return (
    <section className="explore-section">
      <div className="explore-section__categories">
        {categories.map((category,index)=> (
            <img className="explore-section__categories__image" src={category} key={index} width={200}  />
        ))}
      </div>
      <div className="explore-section__content grid">
        <section className="explore-section__content__container">
            <h1 className="explore-section__content__heading">Let’s try our service now!</h1>
            <p className="explore-section__content__text">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </section>
        <section className="explore-section__content__button-container">
            <button className="btn btn--explore" onClick={()=> toggleForm(true)}>Get Started</button>
        </section>
      </div>
      {isFormOpen && (
        <>
          <div className="overlay"></div>
          <Form setIsFormOpen={setIsFormOpen} toggleForm={toggleForm} />
        </>
      )}
    </section>
  )
}

export default ExploreServices
