import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";

const footer = () => {
  return (
    <>
      <footer>
        <div className="foot-panel1">
          <div className="footer-icons">
            <GrFacebookOption />
          </div>
          <div className="footer-icons">
            <FaTwitter />
          </div>
          <div className="footer-icons" id="GOOGLE">
            <FaGooglePlusG />
          </div>
          <div className="footer-icons">
            <TfiYoutube />
          </div>
          <div className="footer-icons">
            <IoLogoInstagram />
          </div>
        </div>
        <div className="foot-panel2">
          <ul>
            <p>Get to Know Us</p>
            <a>About Us</a>
            <a>Careers</a>
            <a>Press Releases</a>
            <a>Amazon Science</a>
          </ul>
          <ul>
            <p>Get to Know Us</p>
            <a>About Us</a>
            <a>Careers</a>
            <a>Press Releases</a>
            <a>Amazon Science</a>
          </ul>
          <ul>
            <p>Get to Know Us</p>
            <a>About Us</a>
            <a>Careers</a>
            <a>Press Releases</a>
            <a>Amazon Science</a>
          </ul>
          <ul>
            <p>Get to Know Us</p>
            <a>About Us</a>
            <a>Careers</a>
            <a>Press Releases</a>
            <a>Amazon Science</a>
          </ul>
        </div>
        <div className="foot-panel3">
          <div className="logo">
            copyright© 2024 KP GARMENTS. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};
export default footer;
