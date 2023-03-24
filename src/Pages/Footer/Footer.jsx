import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      {/* <a href="https://ibb.co/Y3LQnGT"><img src="https://i.ibb.co/hym9Qv1/emojione-v1-open-mailbox-with-lowered-flag.png" alt="emojione-v1-open-mailbox-with-lowered-flag" border="0"></a> 
      
      <a href="https://ibb.co/LCS62m5"><img src="https://i.ibb.co/0fqZdTt/Logo.png" alt="Logo" border="0"></a>
      */}
      <section>
        <footer class="mt-5">
          <div>
            <section className="footer-container">
              <div>
                <div className="ms-3">
                  {/* <img src="https://i.ibb.co/0fqZdTt/Logo.png" alt="" /> */}
                  <h1>golobe</h1>
                </div>
                <div className="social-icon-container">
                  <Link to="/">
                    <FaFacebook
                      className="social-icon mt-3 "
                      style={{ width: "28px", height: "28px" }}
                    />
                  </Link>
                  <Link to="/">
                    <FaInstagram
                      className="social-icon mt-3"
                      style={{ width: "28px", height: "28px" }}
                    />
                  </Link>
                  <Link to="/">
                    <FaTwitter
                      className="social-icon mt-3"
                      style={{ width: "28px", height: "28px" }}
                    />
                  </Link>
                  <Link to="/">
                    <FaYoutube
                      className="social-icon mt-3"
                      style={{ width: "28px", height: "28px" }}
                    />
                  </Link>
                </div>
              </div>

              <div>
                <p className="footer-list-title">Our Destination</p>
                <ul className="footer-list">
                  <Link>
                    {" "}
                    <li>Canada</li>
                  </Link>
                  <Link>
                    {" "}
                    <li>Alaska</li>
                  </Link>
                  <Link>
                    {" "}
                    <li>France</li>
                  </Link>
                  <Link>
                    {" "}
                    <li>Iceland</li>
                  </Link>
                </ul>
              </div>
              <div>
                <p className="footer-list-title">Our Activities</p>
                <ul className="footer-list">
                  <Link>
                    {" "}
                    <li>Northern Lights</li>
                  </Link>
                  <Link>
                    {" "}
                    <li>Cruising & sailing</li>
                  </Link>
                  <Link>
                    {" "}
                    <li>Multi-activities</li>
                  </Link>
                  <Link>
                    {" "}
                    <li>Kayaing</li>
                  </Link>
                </ul>
              </div>
              <div>
                <p className="footer-list-title">Travel Blogs</p>
                <ul className="footer-list">
                  <Link>
                    {" "}
                    <li>Bali Travel Guide</li>
                  </Link>
                  <Link>
                    {" "}
                    <li>Turkey Travel Guide</li>
                  </Link>
                  <Link>
                    {" "}
                    <li> France Travel Guide</li>
                  </Link>
                  <Link>
                    {" "}
                    <li>New York Travel Guide</li>
                  </Link>
                </ul>
              </div>
              <div>
                <p className="footer-list-title">About Us</p>
                <ul className="footer-list">
                  <Link>
                    {" "}
                    <li>Our Story</li>
                  </Link>
                  <Link>
                    {" "}
                    <li>Packages</li>
                  </Link>
                  <Link>
                    {" "}
                    <li>Gallery</li>
                  </Link>
                  <Link>
                    {" "}
                    <li>Facilities</li>
                  </Link>
                </ul>
              </div>
              <div>
                <p className="footer-list-title">Contact Us</p>
                <ul className="footer-list">
                  <Link>
                    {" "}
                    <li>See Our Blogs</li>
                  </Link>
                  <Link>
                    {" "}
                    <li>Send us message</li>
                  </Link>
                  <Link>
                    {" "}
                    <li>Work With Us</li>
                  </Link>
                  <Link>
                    {" "}
                    <li>Subscribe Newsletter</li>
                  </Link>
                </ul>
              </div>
            </section>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
