
import { categories } from "../../lov/data"
import './ExploreServices.css' 
const ExploreServices = () => {
  return (
    <section className="explore-section">
      <div className="explore-section__categories">
        {categories.map((category,index)=> (
            <img className="explore-section__categories__image" src={category} key={index} width={200}  />
        ))}
      </div>
      <div className="explore-section__content grid">
        <section>
            <h1>Let’s try our service now!</h1>
            <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </section>


      </div>
    </section>
  )
}

export default ExploreServices
