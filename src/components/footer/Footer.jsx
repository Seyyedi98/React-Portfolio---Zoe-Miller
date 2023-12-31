import "./footer.css";

import { FaBehance, FaDribbble, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="" className="footer__social-link">
            <FaTwitter />
          </a>
          <a href="" className="footer__social-link">
            <FaDribbble />
          </a>
          <a href="" className="footer__social-link">
            <FaBehance />
          </a>
        </div>

        <p className="footer__copyright text-cs">
          &copy; 2023 <span>Luique</span>. All Rights Reserved
        </p>

        <p className="footer__copyright text-cs">
          Developed by <span>Ramtin</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
