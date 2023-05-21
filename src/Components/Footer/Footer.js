import style from "./Footer.module.css";
import logo from "../../assets/images/MotqnW.png";
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
            <a href="#">
              <img src={facebookLogo} alt="Facebook Link" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={whatsappLogo} alt="Whatsapp Link" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagramLogo} alt="Instagram Link" />
            </a>
          </li>
        </ul>
      </div>
      <div className={style.footerColumn}>
        <h2>Got Questions</h2>
        <ul>
          <li>
            <a href="#">+20 102 530 7327</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
