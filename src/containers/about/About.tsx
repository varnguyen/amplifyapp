import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import MobileMenuContainer from '../../components/mobile-menu-container/MobileMenuContainer'

const About = () => {
    return (
        <>
            <div className="page-wrapper">
                <Header />

                <main className="main">
                    <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Pages</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    About us
                                </li>
                            </ol>
                        </div>
                    </nav>

                    <div className="container">
                        <div
                            className="page-header page-header-big text-center"
                            style={{
                                backgroundImage: `url('assets/images/about-header-bg.jpg')`
                            }}>
                            <h1 className="page-title text-white">
                                About us
                                <span className="text-white">Who we are</span>
                            </h1>
                        </div>
                    </div>

                    <div className="page-content pb-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 mb-3 mb-lg-0">
                                    <h2 className="title">Our Vision</h2>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet
                                        nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
                                        sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.{' '}
                                    </p>
                                </div>

                                <div className="col-lg-6">
                                    <h2 className="title">Our Mission</h2>

                                    <p>
                                        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.
                                        Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
                                        elementum hendrerit tortor. Sed semper lorem at felis.{' '}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-5"></div>
                        </div>

                        <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5 mb-3 mb-lg-0">
                                        <h2 className="title">Who We Are</h2>

                                        <p className="lead text-primary mb-3">
                                            Pellentesque odio nisi, euismod pharetra a ultricies in diam. Sed arcu. Cras consequat
                                        </p>

                                        <p className="mb-2">
                                            Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc
                                            tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero
                                            eu augue.{' '}
                                        </p>

                                        <a href="blog.html" className="btn btn-sm btn-minwidth btn-outline-primary-2">
                                            <span>VIEW OUR NEWS</span>
                                            <i className="icon-long-arrow-right"></i>
                                        </a>
                                    </div>

                                    <div className="col-lg-6 offset-lg-1">
                                        <div className="about-images">
                                            <img src="assets/images/about/img-1.jpg" alt="" className="about-img-front" />
                                            <img src="assets/images/about/img-2.jpg" alt="" className="about-img-back" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="brands-text">
                                        <h2 className="title">The world's premium design brands in one destination.</h2>

                                        <p>
                                            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
                                            mattis vel, nis
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-7">
                                    <div className="brands-display">
                                        <div className="row justify-content-center">
                                            <div className="col-6 col-sm-4">
                                                <a href="#" className="brand">
                                                    <img src="assets/images/brands/1.png" alt="Brand Name" />
                                                </a>
                                            </div>

                                            <div className="col-6 col-sm-4">
                                                <a href="#" className="brand">
                                                    <img src="assets/images/brands/2.png" alt="Brand Name" />
                                                </a>
                                            </div>

                                            <div className="col-6 col-sm-4">
                                                <a href="#" className="brand">
                                                    <img src="assets/images/brands/3.png" alt="Brand Name" />
                                                </a>
                                            </div>

                                            <div className="col-6 col-sm-4">
                                                <a href="#" className="brand">
                                                    <img src="assets/images/brands/4.png" alt="Brand Name" />
                                                </a>
                                            </div>

                                            <div className="col-6 col-sm-4">
                                                <a href="#" className="brand">
                                                    <img src="assets/images/brands/5.png" alt="Brand Name" />
                                                </a>
                                            </div>

                                            <div className="col-6 col-sm-4">
                                                <a href="#" className="brand">
                                                    <img src="assets/images/brands/6.png" alt="Brand Name" />
                                                </a>
                                            </div>

                                            <div className="col-6 col-sm-4">
                                                <a href="#" className="brand">
                                                    <img src="assets/images/brands/7.png" alt="Brand Name" />
                                                </a>
                                            </div>

                                            <div className="col-6 col-sm-4">
                                                <a href="#" className="brand">
                                                    <img src="assets/images/brands/8.png" alt="Brand Name" />
                                                </a>
                                            </div>

                                            <div className="col-6 col-sm-4">
                                                <a href="#" className="brand">
                                                    <img src="assets/images/brands/9.png" alt="Brand Name" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-4 mb-6"></hr>

                            <h2 className="title text-center mb-4">Meet Our Team</h2>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="member member-anim text-center">
                                        <figure className="member-media">
                                            <img src="assets/images/team/member-1.jpg" alt="member photo" />

                                            <figcaption className="member-overlay">
                                                <div className="member-overlay-content">
                                                    <h3 className="member-title">
                                                        Samanta Grey
                                                        <span>Founder & CEO</span>
                                                    </h3>

                                                    <p>
                                                        Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit
                                                        nunc.
                                                    </p>
                                                    <div className="social-icons social-icons-simple">
                                                        <a href="#" className="social-icon" title="Facebook" target="_blank">
                                                            <i className="icon-facebook-f"></i>
                                                        </a>
                                                        <a href="#" className="social-icon" title="Twitter" target="_blank">
                                                            <i className="icon-twitter"></i>
                                                        </a>
                                                        <a href="#" className="social-icon" title="Instagram" target="_blank">
                                                            <i className="icon-instagram"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </figcaption>
                                        </figure>

                                        <div className="member-content">
                                            <h3 className="member-title">
                                                Samanta Grey
                                                <span>Founder & CEO</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="member member-anim text-center">
                                        <figure className="member-media">
                                            <img src="assets/images/team/member-2.jpg" alt="member photo" />

                                            <figcaption className="member-overlay">
                                                <div className="member-overlay-content">
                                                    <h3 className="member-title">
                                                        Bruce Sutton
                                                        <span>Sales & Marketing Manager</span>
                                                    </h3>

                                                    <p>
                                                        Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit
                                                        nunc.
                                                    </p>
                                                    <div className="social-icons social-icons-simple">
                                                        <a href="#" className="social-icon" title="Facebook" target="_blank">
                                                            <i className="icon-facebook-f"></i>
                                                        </a>
                                                        <a href="#" className="social-icon" title="Twitter" target="_blank">
                                                            <i className="icon-twitter"></i>
                                                        </a>
                                                        <a href="#" className="social-icon" title="Instagram" target="_blank">
                                                            <i className="icon-instagram"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </figcaption>
                                        </figure>

                                        <div className="member-content">
                                            <h3 className="member-title">
                                                Bruce Sutton
                                                <span>Sales & Marketing Manager</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="member member-anim text-center">
                                        <figure className="member-media">
                                            <img src="assets/images/team/member-3.jpg" alt="member photo" />

                                            <figcaption className="member-overlay">
                                                <div className="member-overlay-content">
                                                    <h3 className="member-title">
                                                        Janet Joy
                                                        <span>Product Manager</span>
                                                    </h3>

                                                    <p>
                                                        Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit
                                                        nunc.
                                                    </p>
                                                    <div className="social-icons social-icons-simple">
                                                        <a href="#" className="social-icon" title="Facebook" target="_blank">
                                                            <i className="icon-facebook-f"></i>
                                                        </a>
                                                        <a href="#" className="social-icon" title="Twitter" target="_blank">
                                                            <i className="icon-twitter"></i>
                                                        </a>
                                                        <a href="#" className="social-icon" title="Instagram" target="_blank">
                                                            <i className="icon-instagram"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </figcaption>
                                        </figure>

                                        <div className="member-content">
                                            <h3 className="member-title">
                                                Janet Joy
                                                <span>Product Manager</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-2"></div>

                        <div className="about-testimonials bg-light-2 pt-6 pb-6">
                            <div className="container">
                                <h2 className="title text-center mb-3">What Customer Say About Us</h2>

                                <div
                                    className="owl-carousel owl-simple owl-testimonials-photo"
                                    data-toggle="owl"
                                    data-owl-options='{
                                "nav": false, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "1200": {
                                        "nav": true
                                    }
                                }
                            }'>
                                    <blockquote className="testimonial text-center">
                                        <img src="assets/images/testimonials/user-1.jpg" alt="user" />
                                        <p>
                                            “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque aliquet nibh nec urna.
                                            In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
                                            laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
                                            justo. Suspendisse potenti. ”
                                        </p>
                                        <cite>
                                            Jenson Gregory
                                            <span>Customer</span>
                                        </cite>
                                    </blockquote>

                                    <blockquote className="testimonial text-center">
                                        <img src="assets/images/testimonials/user-2.jpg" alt="user" />
                                        <p>
                                            “ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero
                                            perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique
                                            doloribus natus qui ut ipsum.Velit quos ipsa exercitationem, vel unde obcaecati impedit eveniet
                                            non. ”
                                        </p>

                                        <cite>
                                            Victoria Ventura
                                            <span>Customer</span>
                                        </cite>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>

            <button id="scroll-top" title="Back to Top">
                <i className="icon-arrow-up"></i>
            </button>

            <div className="mobile-menu-overlay"></div>

            <MobileMenuContainer />
        </>
    )
}

export default About
