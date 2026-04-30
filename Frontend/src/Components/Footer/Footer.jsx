import React, { useState } from 'react';
import './Footer.css';

const FooterSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="footer-section">
      <button
        className="section-title"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3>{title}</h3>
        <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </span>
      </button>
      <div className={`section-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Home Decor Section */}
        <FooterSection title="Home Decor">
          <ul>
            <li><a href="/wall-mirrors">Wall Mirrors</a></li>
            <li><a href="/floor-mirrors">Floor Mirrors</a></li>
            <li><a href="/lamps-lighting">Lamps & Lighting</a></li>
            <li><a href="/wall-decor">Wall Decor</a></li>
            <li><a href="/rugs">Rugs</a></li>
            <li><a href="/clocks">Clocks</a></li>
            <li><a href="/candles">Candles</a></li>
            <li><a href="/candleholders">Candleholders</a></li>
            <li><a href="/runners">Runners</a></li>
          </ul>
        </FooterSection>

        {/* Furniture Section */}
        <FooterSection title="Furniture">
          <ul>
            <li><a href="/sofas-couches">Sofas & Couches</a></li>
            <li><a href="/coffee-tables">Coffee Tables</a></li>
            <li><a href="/chairs">Chairs</a></li>
            <li><a href="/ottomans">Ottomans</a></li>
            <li><a href="/living-room">Living Room</a></li>
            <li><a href="/console-tables">Console Tables</a></li>
            <li><a href="/end-tables">End Tables</a></li>
            <li><a href="/tv-stands">TV Stands</a></li>
            <li><a href="/bedroom-furniture">Bedroom Furniture</a></li>
          </ul>
        </FooterSection>

        {/* Kitchen & Dining Section */}
        <FooterSection title="Kitchen & Dining">
          <ul>
            <li><a href="/dinnerware-sets">Dinnerware Sets</a></li>
            <li><a href="/glassware-drinkware">Glassware & Drinkware</a></li>
            <li><a href="/serveware">Serveware</a></li>
            <li><a href="/flatware">Flatware</a></li>
            <li><a href="/cups-mugs">Cups, Mugs</a></li>
            <li><a href="/plates">Plates</a></li>
            <li><a href="/bowls">Bowls</a></li>
            <li><a href="/knife-sets">Knife Sets</a></li>
            <li><a href="/cutting-boards">Cutting Boards</a></li>
          </ul>
        </FooterSection>

        {/* Bed & Bath Section */}
        <FooterSection title="Bed & Bath">
          <ul>
            <li><a href="/bed-frames">Bed Frames</a></li>
            <li><a href="/headboards">Headboards</a></li>
            <li><a href="/bedroom-armoires">Bedroom Armoires</a></li>
            <li><a href="/dressers">Dressers</a></li>
            <li><a href="/nightstands">Nightstands</a></li>
          </ul>
        </FooterSection>

        {/* Organization Section */}
        <FooterSection title="Organization">
          <ul>
            <li><a href="/baskets">Baskets</a></li>
            <li><a href="/hangers">Hangers</a></li>
            <li><a href="/shoe-organizers">Shoe Organizers</a></li>
          </ul>
        </FooterSection>

        {/* Contact Info Section */}
        <FooterSection title="Contact Info" defaultOpen={true}>
          <address>
            <p>45 Grand Central New York NY 1017 United State USA</p>
          </address>
          <div className="contact-item">
            <strong>Email:</strong>
            <a href="mailto:Contact@domain.com">Contact@domain.com</a>
          </div>
          <div className="contact-item">
            <strong>Phone:</strong>
            <p>01: +00 (9) 123 3456 789</p>
          </div>
          <div className="contact-item">
            <strong>Fax:</strong>
            <p>+00 (9) 643 6543 898</p>
          </div>
          <div className="contact-item hours">
            <p>Mon-Sat 9:00am - 5:00pm</p>
            <p>Sun: Closed</p>
          </div>
        </FooterSection>

        {/* Information Section */}
        <FooterSection title="Information">
          <ul>
            <li><a href="/delivery">Delivery</a></li>
            <li><a href="/legal-notice">Legal Notice</a></li>
            <li><a href="/about-us">About us</a></li>
            <li><a href="/secure-payment">Secure payment</a></li>
            <li><a href="/sitemap">Sitemap</a></li>
            <li><a href="/stores">Stores</a></li>
          </ul>
        </FooterSection>

        {/* My Account Section */}
        <FooterSection title="My Account">
          <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/my-account">My Account</a></li>
            <li><a href="/terms-conditions">Terms And Conditions Of Use</a></li>
          </ul>
        </FooterSection>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2026 E-Commerce Website. All rights reserved.</p>
          <div className="footer-links">
            <a href="/prices-drop">Prices drop</a>
            <a href="/new-products">New products</a>
            <a href="/best-sales">Best sales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
