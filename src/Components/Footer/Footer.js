import style from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";
import facebookLogo from "../../assets/images/facebook.svg";
import whatsappLogo from "../../assets/images/whatsapp.svg";
import instagramLogo from "../../assets/images/instagram.svg";
const Footer = () => {
  return (
    <div className={style.footerBody}>
      <div className={style.footerContacts}>
        <div className={style.footerLogo}>
          <img src={logo} alt="Logo" />
        </div>
        <ul className={style.contactsList}>
          <li>
            <img src={facebookLogo} />
          </li>
          <li>
            <img src={whatsappLogo} />
          </li>
          <li>
            <img src={instagramLogo} />
          </li>
        </ul>
      </div>
      <div className={style.footerColumn}>
        <h2>Got Questions</h2>
        <ul>
          <li>
            <a href="#">01271950277</a>
          </li>
          <li>
            <a href="#">01271950277</a>
          </li>
          <li>
            <a href="#">01271950277</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
