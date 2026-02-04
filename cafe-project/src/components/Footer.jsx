import "./Footer.css";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>Where to find us</h3>
        <p>Springvale IND EST</p>
        <p>Cwmbran</p>
        <p>NP44 5HW</p>
      </div>
      <div className="footer-center">
        <div className="footer-icons">
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="X">
            <FaXTwitter />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <h3>Opening Hours</h3>
        <p>Mon - Fri &nbsp; 8am - 8pm</p>
        <p>Sat &nbsp; 9am - 6pm</p>
        <p>Sun &nbsp; 10am - 3pm</p>
      </div>
    </footer>
  );
}

export default Footer;
