import { useState } from "react";
import { navList } from "../../lov/data";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = ({ setLanguage }) => {
  const { t } = useTranslation();
  const [isMenuOppen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <section className="nav">
      <a href="/" className="nav__brand">
        <img
          className="nav__brand__image"
          src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730360086/logo_ksjh1h.png"
          alt="logo"
        />
      </a>
      <img
        className="icon nav__toggler"
        src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730364202/menu_p5zagd.png"
        alt="menu"
        onClick={toggleMenu}
      />
      <ul className={`list nav__list ${isMenuOppen ? "show" : ""}`}>
        {navList.map((navItem, index) => (
          <li className="nav__item" key={index}>
            <a href={navItem.href}>{t(navItem.name)}</a>
          </li>
        ))}
        <select
          className="select-input"
          required
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="ur">Urdu</option>
          <option value="it">Italian</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
          <option value="tr">Turkish</option>
          <option value="ar">Arabic</option>
        </select>
      </ul>
    </section>
  );
};

export default Navbar;
