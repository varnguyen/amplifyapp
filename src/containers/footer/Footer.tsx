import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="page-wrapper">
            <footer className="footer">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="widget widget-about">
                                    <img src="assets/images/logo.png" className="footer-logo" alt="Footer Logo" width="105" height="25" />
                                    <p>
                                        Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu
                                        erat.{' '}
                                    </p>
                                    <div className="social-icons">
                                        <Link to="/" className="social-icon" target="_blank" title="Facebook">
                                            <i className="icon-facebook-f"></i>
                                        </Link>
                                        <Link to="/" className="social-icon" target="_blank" title="Twitter">
                                            <i className="icon-twitter"></i>
                                        </Link>
                                        <Link to="/" className="social-icon" target="_blank" title="Instagram">
                                            <i className="icon-instagram"></i>
                                        </Link>
                                        <Link to="/" className="social-icon" target="_blank" title="Youtube">
                                            <i className="icon-youtube"></i>
                                        </Link>
                                        <Link to="/" className="social-icon" target="_blank" title="Pinterest">
                                            <i className="icon-pinterest"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="widget">
                                    <h4 className="widget-title">Useful Links</h4>
                                    <ul className="widget-list">
                                        <li>
                                            <Link to="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/">How to shop on Molla</Link>
                                        </li>
                                        <li>
                                            <Link to="/faq">FAQ</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact us</Link>
                                        </li>
                                        <li>
                                            <Link to="/login">Log in</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="widget">
                                    <h4 className="widget-title">Customer Service</h4>
                                    <ul className="widget-list">
                                        <li>
                                            <Link to="/">Payment Methods</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Money-back guarantee!</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Returns</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Shipping</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Terms and conditions</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="widget">
                                    <h4 className="widget-title">My Account</h4>
                                    <ul className="widget-list">
                                        <li>
                                            <Link to="/login">Sign In</Link>
                                        </li>
                                        <li>
                                            <Link to="/cart">View Cart</Link>
                                        </li>
                                        <li>
                                            <Link to="/wishlist">My Wishlist</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Track My Order</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Help</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <p className="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p>

                        <figure className="footer-payments">
                            <img src="assets/images/payments.png" alt="Payment methods" width="272" height="20" />
                        </figure>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
