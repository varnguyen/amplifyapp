import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-bottom">
                <div className="container">
                    <p className="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p>
                    <ul className="footer-menu">
                        <li>
                            <Link to="/">Terms Of Use</Link>
                        </li>
                        <li>
                            <Link to="/">Privacy Policy</Link>
                        </li>
                    </ul>

                    <div className="social-icons social-icons-color">
                        <Link to="/" className="social-icon social-facebook" title="Facebook" target="_blank">
                            <i className="icon-facebook-f"></i>
                        </Link>
                        <Link to="/" className="social-icon social-twitter" title="Twitter" target="_blank">
                            <i className="icon-twitter"></i>
                        </Link>
                        <Link to="/" className="social-icon social-instagram" title="Instagram" target="_blank">
                            <i className="icon-instagram"></i>
                        </Link>
                        <Link to="/" className="social-icon social-youtube" title="Youtube" target="_blank">
                            <i className="icon-youtube"></i>
                        </Link>
                        <Link to="/" className="social-icon social-pinterest" title="Pinterest" target="_blank">
                            <i className="icon-pinterest"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
