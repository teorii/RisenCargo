import { Link } from 'react-router-dom';
import { EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons"
import RisenCargoLogoES from "../assets/RisenCargoLogoES_3nomargins.png";
import React from 'react';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
            <img 
              src={RisenCargoLogoES} 
              alt="Risen Cargo Logo"
              className="footer-logo"
            />

          <div className="contact-info">
            <div className="contact-item">
              <EnvelopeClosedIcon /><p>sales@risencargo.com</p>
            </div>
            <div className="contact-item">
              <MobileIcon /><p>(619) 762 - 5850</p>
            </div>
            <div className="social-icons">
 
            </div>
          </div>
        </div>

        <div className="footer-right">
          <h3>Ready to elevate your logistics experience?</h3>
          <br/>
          <p>Contact us today to discuss how Risen Logistics can support your transportation needs with precision and professionalism.</p>
          <br/>
          <p>At Risen Logistics, we pride ourselves on delivering top-notch services that meet the unique needs of your business. With our focus on reliability, transparency, and customer satisfaction, we are your trusted partner in logistics.</p>
          <br/>
          <Link to="/contact" className="contact-button" style={{position: "relative", left: "0px", top: "15px"}}>Get a Quote</Link>
        </div>
      </div>
      <div className='footer-llc'>
        <em>Risen was established as a California Limited Liability Company and has a licensing arrangement with Platinum Cargo, who serves as Risen’s third-party logistics provider.</em>  
      </div>
    </footer>
  );
}

export default Footer;