import React from "react";
import { Link } from "react-router-dom";
import "../assets/sass/Footer.scss";
import "../assets/sass/Font.scss";

function Footer() {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-content">
                    
                    <div className="footer-section">
                        <h2>Informations</h2>
                        <ul className="footer-links">
                            <li><Link to="/mentions-legales">Mentions légales</Link></li>
                            <li><Link to="/donnees-personnelles">Données Personnelles</Link></li>
                            <li><Link to="/accessibilite">Accessibilité</Link></li>
                            <li><Link to="/cookies">Cookies</Link></li>
                        </ul>
                    </div>

                    
                    <div className="footer-section">
                        <h2>Contact</h2>
                        <address>
                            101 cours Charlemagne<br />
                            CS 20033<br />
                            69269 LYON CEDEX 02<br />
                            France
                        </address>
                        <a href="tel:+33426734000" className="footer-phone">
                            +33 (0)4 26 73 40 00
                        </a>
                    </div>
                </div>

                
                <div className="footer-bottom">
                    <hr />
                    <p>&copy; {new Date().getFullYear()} Trouve Ton Artisan. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;