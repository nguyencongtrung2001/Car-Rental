import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt, FaCar, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialIcons = [
    { id: 1, icon: <FaFacebook /> },
    { id: 2, icon: <FaInstagram /> },
    { id: 3, icon: <FaSquareXTwitter /> },
    { id: 4, icon: <FaYoutube /> },
  ];

  const contactInfo = [
    {
      id: 1,
      icon: <IoLocation />,
      title: "Address",
      detail: "Oxford Ave. Cary, NC 27511",
    },
    {
      id: 2,
      icon: <MdOutlineMail />,
      title: "Email",
      detail: "nwiger@yahoo.com",
    },
    {
      id: 3,
      icon: <FaPhoneAlt />,
      title: "Phone",
      detail: "+537 547-6401",
    },
  ];

  const usefulLinks = ["About us", "Contact us", "Gallery", "Blog", "F.A.Q"];
  const vehicles = ["Sedan", "Cabriolet", "Pickup", "Minivan", "SUV"];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo và mô tả */}
        <div className="footer-top">
          <div className="footer-logo">
            <FaCar className="footer-logo-icon" />
            <span className="footer-logo-text">Car Rental</span>
          </div>
          <p className="footer-description">
            Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis
            massa a id iaculis lorem turpis euismod.
          </p>
          <div className="footer-socials">
            {socialIcons.map((item) => (
              <div key={item.id} className="social-icon">
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Thông tin liên hệ */}
        <div className="footer-contact">
          {contactInfo.map((item) => (
            <div key={item.id} className="contact-item">
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-text">
                <p className="contact-title">{item.title}</p>
                <p className="contact-detail">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Liên kết và danh mục */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Useful links</h4>
            <ul>
              {usefulLinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Vehicles</h4>
            <ul>
              {vehicles.map((vehicle, index) => (
                <li key={index}>{vehicle}</li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Download App</h4>
            <div className="app-buttons">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_o-G9mMFogqWSeYzzRALpqqr8E-pvKn39w&s"
                alt="App Store"
                className="download-btn"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                className="download-btn"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright Car Rental 2024. Design by Figma.com</p>
      </div>
    </footer>
  );
};

export default Footer;
