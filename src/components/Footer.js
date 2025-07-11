import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo-txt.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import linkedin from "../img/social/l-in.svg";

const Footer = () => {
  
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="logo footer"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Hjem
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/staevner2025">
                        Stævner
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li> */}
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Administrer
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/charityrace2025">
                        Mød og støt os
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/partners">
                        Partnere
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="Facebook" href="https://www.facebook.com/ultralandsholdet" target="_blank" rel="noreferrer">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="Instagram" href="https://www.instagram.com/ultralandsholdet_/" target="_blank" rel="noreferrer">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="LinkedIn" href="https://www.linkedin.com/company/ultralandsholdet" target="_blank" rel="noreferrer">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
