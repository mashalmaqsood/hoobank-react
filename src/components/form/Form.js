import './Form.css';

const Form = ({setIsFormOpen,toggleForm}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created successfully.");
        setIsFormOpen(false)
        toggleForm(false)
      };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <header className="form__header">
      <button id="close-button" onClick={()=> toggleForm(false)}>
              x
        </button>
        <img
          className="nav__brand__image"
          src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730360086/logo_ksjh1h.png"
          alt="logo"
        />
        <h1>Get Started</h1>
        <p>Welcome to Hoobank - Let's create your account</p>
      </header>
      <section className="form__container">
        <input type="email" placeholder="Email" className="input" required />
        <input
          type="password"
          placeholder="Password"
          className="input"
          required
        />
      </section>
      <button
          className="btn form-btn"
          type="submit"
        >
          Sign up
        </button>
    </form>
  );
};

export default Form;
