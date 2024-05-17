import React from "react";
import "./styles/footer.css";
import insta from "./images/icons/instagram.png";
import github from "./images/icons/github.png";
import twitter from "./images/icons/twitter.png";
function Footer() {
  return (
    <div className="footer">
      <footer class="footer-distributed">
        <div class="footer-right">
          <a href="#">
            <img className="footer-img" src={twitter} alt="profile-img" />
          </a>
          <a href="#">
            <img className="footer-img" src={github} alt="profile-img" />
          </a>
          <a href="#">
            <img className="footer-img" src={insta} alt="profile-img" />
          </a>
        </div>

        <div class="footer-left">
          <p class="footer-links">
            <a class="link-1" href="#">
              HOME
            </a>


            <a href="#">ABOUT</a>

            <a href="#">FAQ</a>

            <a href="#">CONTACT</a>
          </p>

          <p>ChargeMate &copy; 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
