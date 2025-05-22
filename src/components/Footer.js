import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import the social icons
import "../styles/global.css"; // Import your CSS file for styling
import "../styles/footer.css";


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-column">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Blog</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Resources</h3>
                            <ul>
                                <li><a href="/">Buying Guide</a></li>
                                <li><a href="/">Neighborhood Reviews</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Support</h3>
                            <ul>
                                <li><a href="/">Help Center</a></li>
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">Accessibility</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Connect</h3>
                            <address>
                                Address: Hawassa, Piassa<br />
                                Phone: (+146) 555-1234<br />
                                Email: info@EthioNest.com
                            </address>
                            <div className="social-links">
                                {/* Use FontAwesomeIcon for social media links */}
                                <a href="/" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="/" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="/" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="/" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2025 EthioNest. All rights reserved. | <a href="/">Privacy Policy</a> | <a href="/">Terms of Service</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
