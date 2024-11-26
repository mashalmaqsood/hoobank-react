import "./Footer.css";
import { useTranslation } from "react-i18next";
import { listItemsOne, listItemsTwo, listItemsThree } from "../../lov/data";
import { links } from "../../lov/data";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <section className="footer">
      <section className="footer-sections">
        <section className="footer-section--header">
          <img
            src="https://res.cloudinary.com/dp7hicpjt/image/upload/v1730360086/logo_ksjh1h.png"
            width={200}
            alt="logo"
          />
          <p className="footer-section--header__text">
            {t("footerHeading")}
          </p>
        </section>
        <ul className="footer-section">
          <li>{t("footer.Useful Links")}</li>
          <div className="footer-section__list">
            {listItemsOne.map((listItem, index) => (
              <li key={index} className="footer-section__listItem">
                {t(`footer.listItemsOne.${listItem}`)}
              </li>
            ))}
          </div>
        </ul>
        <ul className="footer-section">
          <li>{t("footer.community")}</li>
          <div className="footer-section__list">
            {listItemsTwo.map((listItem, index) => (
              <li key={index} className="footer-section__listItem">
                {t(`footer.listItemsTwo.${listItem}`)}
              </li>
            ))}
          </div>
        </ul>
        <ul className="footer-section">
          <li>{t("footer.partner")}</li>
          <div className="footer-section__list">
          {listItemsThree.map((listItem, index) => (
            <li key={index} className="footer-section__listItem">
              {t(`footer.listItemsThree.${listItem}`)}
            </li>
          ))}
          </div>
        </ul>
      </section>
      <section className="footer__content">
        <p className="footer__copyright-notice">
          {t("footer.copyRight")}
        </p>
        <div className="footer__icons">
          {links.map((link, index) => (
            <a
              href={link.href}
              target="_blank"
              key={index}
              rel="noopener noreferrer"
            >
              <img
                className="footer__icon"
                src={link.src}
                width="20px"
                alt="footer icon"
              />
            </a>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Footer;
