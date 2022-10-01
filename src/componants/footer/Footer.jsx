import React from "react";
import "./footer.css";
import { pageLinks } from "../data/Pages";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "../../functions/Context";
import { FaEnvelope } from "react-icons/fa";
import { AiFillPhone, AiOutlineWhatsApp, AiFillMessage } from "react-icons/ai";
function Footer() {
  const { changeActiveLink, activeLink } = useGlobalContext();
  useEffect(() => {
    if (window.location.pathname == "/") {
      changeActiveLink("home");
    } else {
      changeActiveLink(window.location.pathname.slice(1));
    }
  }, [window.location.pathname]);
  return (
    <footer>
      <div className="container footer-container">
        <div className="info">
          <h2 className="logo">Bonik</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            consequatur, atque quis quam quo quasi vel error corporis fugiat
            inventore eius sint ipsa sed ea ducimus vero explicabo iusto at!
          </p>
        </div>
        <div className="quickLinksContainer">
          <div className="quickLinks">
            <h3>Quick Links</h3>
            <div>
              {pageLinks.map((pageLink) => {
                const { pageID, pageName, pageUrl, pageIcon } = pageLink;
                return (
                  <p
                    key={pageID}
                    className={
                      activeLink == pageName.toLocaleLowerCase()
                        ? "active footer-link"
                        : "footer-link"
                    }
                  >
                    <Link
                      to={pageUrl}
                      onClick={() =>
                        changeActiveLink(pageName.toLocaleLowerCase())
                      }
                    >
                      {pageIcon} <span>{pageName}</span>
                    </Link>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="quickLinks">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <p>70 Spiko Square, Elsalam City, Cairo, Egypt</p>
              <p>abdogoda0a@gmail.com</p>
              <p>+02011 4236 716</p>
            </div>
            <div className="contact-links">
              <a href="mailto:abdogoda0a@gmail.com" target="_blank">
                <FaEnvelope />
              </a>
              <a href="sms:+2001142366716" target="_blank">
                <AiFillMessage />
              </a>
              <a href="http://wa.me/+2001142366716" target="_blank">
                <AiOutlineWhatsApp />
              </a>
              <a href="tel:+2001142366716" target="_blank">
                <AiFillPhone />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
