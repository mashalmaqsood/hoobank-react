import "./Form.css";
import { useTranslation } from "react-i18next";

const Form = ({ setIsFormOpen, toggleForm }) => {
  const { t } = useTranslation();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully.");
    setIsFormOpen(false);
    toggleForm(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <header className="form__header">
        <img
          className="nav__brand__image"
          src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730360086/logo_ksjh1h.png"
          alt="logo"
        />
        <h1>{t("getStarted")}</h1>
        <p>{t("formTag")}</p>
      </header>
      <section className="form__container">
        <input type="email" placeholder={t("email")} className="input" required autoComplete="email"/>
        <input
          type="password"
          placeholder={t("password")}
          autoComplete="current-password"
          className="input"
          required
        />
      </section>
      <button className="btn form-btn" type="submit">
        {t("SignUp")}
      </button>
    </form>
  );
};

export default Form;
