import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import styles
import "./Contact.scss";

const Contact = () => (
  <div className="contact">
    <h1 className="contact-header">
      Contact us:
    </h1>
    <p className="contact-email">
      E-mail: <FontAwesomeIcon icon = {[ "fas" , "at" ]} className="contact-icon" / > <a href="mailto:computer-shop@shop.com" className="email-address">computer-shop@shop.com</a>
    </p>
    <p className="contact-phone">
      Mobile: <FontAwesomeIcon icon = {[ "fas" , "mobile-alt" ]} className="contact-icon" / > +48 123 456 789
    </p>
    <h2 className="contact-social-media-header">
      Visit us on social media
    </h2>

    <div className="contact-social-media">
      <div className="contact-social-media-facebook">
        <FontAwesomeIcon icon={[ "fab", "facebook" ]} size="2x" />
      </div>
      <div className="contact-social-media-instagram">
        <FontAwesomeIcon icon={[ "fab", "instagram" ]} size="2x" />
      </div>
      <div className="contact-social-media-twitter">
        <FontAwesomeIcon icon={[ "fab", "twitter" ]} size="2x" />
      </div>
      <div className="contact-social-media-linkedin">
        <FontAwesomeIcon icon={[ "fab", "linkedin-in" ]} size="2x" />
      </div>
      <div className="contact-social-media-github">
        <FontAwesomeIcon icon={[ "fab", "github" ]} size="2x" />
      </div>
    </div>
  </div>
);

export default Contact;
