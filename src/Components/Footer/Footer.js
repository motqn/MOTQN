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
            <a href="https://www.facebook.com/m0tqn">
              <img src={facebookLogo} alt="Facebook Link" />
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=%2B201025307327&data=AWD6UUKiqgkwTDKka_rN69z0RHtRw1JK41uXyPTV3YC4gf3hchlExkK8xPB11dAXZinZVNtOI4ooZzYFRAPNtQVJF0g0CufxvRMXeyzriDxUz3OGpUH_dBM4q-H0z-_BbBiXyrJ3C6LZpYRAhoLc46YEW92Ark7gOf8hXo3xRnSTVpEoVtVe9bI_q7b2jTP9vIbP5LxNwCpkbYtgONJ7viT-JBBmNVugQBsh17EkX_YT4t_97zIDxc3gyVUPbaJpCDWY0gcBxWMlirW1GFX-5rxBBxw-dxO5A010TYpD1jI8wyPyMXs&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1RoBLk-lwBgITvpbLOkEGMRSFBaVfgtoT9a3sMPJ2X_mgqQk9UPw95SjU">
              <img src={whatsappLogo} alt="Whatsapp Link" />
            </a>
          </li>
        </ul>
      </div>
      <div className={style.footerColumn}>
        <h2>Got Questions</h2>
        <ul>
          <li>
            <a href="https://api.whatsapp.com/send?phone=%2B201025307327&data=AWD6UUKiqgkwTDKka_rN69z0RHtRw1JK41uXyPTV3YC4gf3hchlExkK8xPB11dAXZinZVNtOI4ooZzYFRAPNtQVJF0g0CufxvRMXeyzriDxUz3OGpUH_dBM4q-H0z-_BbBiXyrJ3C6LZpYRAhoLc46YEW92Ark7gOf8hXo3xRnSTVpEoVtVe9bI_q7b2jTP9vIbP5LxNwCpkbYtgONJ7viT-JBBmNVugQBsh17EkX_YT4t_97zIDxc3gyVUPbaJpCDWY0gcBxWMlirW1GFX-5rxBBxw-dxO5A010TYpD1jI8wyPyMXs&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1RoBLk-lwBgITvpbLOkEGMRSFBaVfgtoT9a3sMPJ2X_mgqQk9UPw95SjU">
              +20 102 530 7327
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
