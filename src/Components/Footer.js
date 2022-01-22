/* eslint-disable jsx-a11y/anchor-is-valid */
// styles
import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container grid grid--5-cols">
          <div className="logo-col">
              <h2>Cooking Recipe</h2>
            <p className="copyright">Copyright &copy; 3032 E-restaurant</p>
          </div>
          <div className="address-col">
            <p className="footer-heading">Contact Us</p>
            <address className="contacts">
              <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
              <p>
                <a className="footer-link" href="tel:415-201-6370">
                  415-201-6370
                </a>
                <br />
                <a className="footer-link" href="mailto:hello@e-restaurant.com">
                  hello@e-restaurant.com
                </a>
              </p>
            </address>
          </div>
          <nav className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="">
                  Create account
                </a>
              </li>
              <li>
                <a className="footer-link" href="">
                  Sign in
                </a>
              </li>
              <li>
                <a className="footer-link" href="">
                  iOS app
                </a>
              </li>
              <li>
                <a className="footer-link" href="">
                  Android app
                </a>
              </li>
            </ul>
          </nav>
          <nav className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="">
                  For Business
                </a>
              </li>
              <li>
                <a className="footer-link" href="">
                  Cooking partners
                </a>
              </li>
              <li>
                <a className="footer-link" href="">
                  Careers
                </a>
              </li>
            </ul>
          </nav>
          <nav className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="">
                  Recipe directory
                </a>
              </li>
              <li>
                <a className="footer-link" href="">
                  Help center
                </a>
              </li>
              <li>
                <a className="footer-link" href="">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
