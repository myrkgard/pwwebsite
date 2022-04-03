import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaYoutube, FaTwitter, FaRss } from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="main-container">
        <div className="footer-top-container">
          <div className="footer-section">
            <h1>Patrick Wieland</h1>
            <p>Full time nerd</p>
            <ul className="ul-social">
              <li>
                <FaGithub />
              </li>
              <li>
                <FaYoutube />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaRss />
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Contact</h2>
            <ul>
              <li>E-mail</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Sitemap</h2>
            <ul>
              <li>Home</li>
              <li>Articles</li>
              <li>About</li>
              <li>Sitemap.xml</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-container">
          <div>Copyright © 2022 Patrick Wieland - All rights reserved</div>
          <div>
            <NavLink to="/Legal">Impressum / Data protection</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
