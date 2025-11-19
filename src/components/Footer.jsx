import { Link } from 'react-router-dom'
import './Footer.css'
import WeatherhavenText from './WeatherhavenText'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3><WeatherhavenText /></h3>
                    <ul className="footer-links">
                        <li><Link to="/company">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/military">Military</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Products</h3>
                    <ul className="footer-links">
                        <li><Link to="/products/soft-shelters">Soft Shelters</Link></li>
                        <li><Link to="/products/expanding-shelters">Expanding Shelters</Link></li>
                        <li><Link to="/products/accessories">Accessories</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <div className="footer-contact-item">info@weatherhaven.com</div>
                    <div className="footer-contact-item">+1 (604) 451-8900</div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} <WeatherhavenText />. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
