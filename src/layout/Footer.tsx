import logo from '../img/logo-big.png';
import { ReactComponent as FacebookIcon } from '../img/svg/facebook.svg';
import { ReactComponent as TwitterIcon } from '../img/svg/instagram.svg';
import { ReactComponent as InstagramIcon } from '../img/svg/twitter-square.svg';
import { ReactComponent as PhoneIcon } from '../img/svg/phone.svg';
import { ReactComponent as MailIcon } from '../img/svg/mail.svg';
import '../css/layout/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="Logo" className="footer__img" />
      </div>

      <nav className="footer__nav-socials">
        <ul className="footer__socials-list flex-row-center">
          <li className="footer__socials-item">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="footer__socials-link"
            >
              <FacebookIcon />
            </a>
          </li>
          <li className="footer__socials-item">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="footer__socials-link"
            >
              <InstagramIcon />
            </a>
          </li>
          <li className="footer__socials-item">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="footer__socials-link"
            >
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </nav>

      <div className="footer__contact">
        <div className="footer__phone flex-row-center">
          <PhoneIcon /> +48 555 333 555
        </div>
        <div className="footer__email flex-row-center">
          <MailIcon /> ikonamody@gmail.com
        </div>
      </div>

      <p className="footer__copy">&copy; 2023; Wszelkie prawa zastrzeżone</p>
    </footer>
  );
}

export default Footer;
