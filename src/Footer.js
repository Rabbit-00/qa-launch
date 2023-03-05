import React from "react";
import "./css/Footer.css";
import instagram from "./img/instagram.svg";
import vk from "./img/vk.svg";

function Footer() {
  return (
    <div className="Footer-wrapper">
      <footer className="Footer">
        <div className="slogan">
          QA Launch - The launchpad for your QA success
        </div>
        <div className="privacy">Privacy Policy</div>
        <div className="terms-of-use">Terms of Use</div>
        <div className="sitemap">Terms of Use</div>
        <div className="copyright">
          © 2023 QA Launch, Inc. All rights reserved.
        </div>
        <div className="links">
          <img className="Vk" src={vk} alt="vk-logo" />
          <img className="Instagram" src={instagram} alt="instagram-logo" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
