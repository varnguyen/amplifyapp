import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import MobileMenuContainer from '../../components/mobile-menu-container/MobileMenuContainer'

const Contact = () => {
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
                                    Contact us
                                </li>
                            </ol>
                        </div>
                    </nav>

                    <div className="container">
                        <div
                            className="page-header page-header-big text-center"
                            style={{
                                backgroundImage: `url('assets/images/contact-header-bg.jpg')`
                            }}>
                            <h1 className="page-title text-white">
                                Contact us
                                <span className="text-white">keep in touch with us</span>
                            </h1>
                        </div>
                    </div>

                    <div className="page-content pb-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 mb-2 mb-lg-0">
                                    <h2 className="title mb-1">Contact Information</h2>

                                    <p className="mb-3">
                                        Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare
                                        nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                                    </p>
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <div className="contact-info">
                                                <h3>The Office</h3>

                                                <ul className="contact-list">
                                                    <li>
                                                        <i className="icon-map-marker"></i> Số 6 đường 295B, Bãi Lán, Lộ Bao, Nội Duệ, Tiên
                                                        Du, Bắc Ninh
                                                    </li>
                                                    <li>
                                                        <i className="icon-phone"></i>
                                                        <a href="tel:#">+0123 456 789</a>
                                                    </li>
                                                    <li>
                                                        <i className="icon-envelope"></i>
                                                        <a href="mailto:#">info@gmail.com</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-sm-5">
                                            <div className="contact-info">
                                                <h3>The Office</h3>

                                                <ul className="contact-list">
                                                    <li>
                                                        <i className="icon-clock-o"></i>
                                                        <span className="text-dark">Thứ 2 - Thứ 7</span> 11am-7pm
                                                    </li>
                                                    <li>
                                                        <i className="icon-calendar"></i>
                                                        <span className="text-dark">Chủ nhật</span> 11am-6pm
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <h2 className="title mb-1">Got Any Questions?</h2>

                                    <p className="mb-2">Use the form below to get in touch with the sales team</p>

                                    <form action="#" className="contact-form mb-3">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label htmlFor="cname" className="sr-only">
                                                    Name
                                                </label>
                                                <input type="text" className="form-control" id="cname" placeholder="Name *" required />
                                            </div>

                                            <div className="col-sm-6">
                                                <label htmlFor="cemail" className="sr-only">
                                                    Email
                                                </label>
                                                <input type="email" className="form-control" id="cemail" placeholder="Email *" required />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label htmlFor="cphone" className="sr-only">
                                                    Phone
                                                </label>
                                                <input type="tel" className="form-control" id="cphone" placeholder="Phone" />
                                            </div>

                                            <div className="col-sm-6">
                                                <label htmlFor="csubject" className="sr-only">
                                                    Subject
                                                </label>
                                                <input type="text" className="form-control" id="csubject" placeholder="Subject" />
                                            </div>
                                        </div>

                                        <label htmlFor="cmessage" className="sr-only">
                                            Message
                                        </label>
                                        <textarea
                                            className="form-control"
                                            cols={30}
                                            rows={4}
                                            id="cmessage"
                                            required
                                            placeholder="Message *"></textarea>

                                        <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
                                            <span>SUBMIT</span>
                                            <i className="icon-long-arrow-right"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <hr className="mt-4 mb-5" />

                            <div className="stores mb-4 mb-lg-5">
                                <h2 className="title text-center mb-3">Our Stores</h2>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="store">
                                            <div className="row">
                                                <div className="col-sm-5 col-xl-6">
                                                    <figure className="store-media mb-2 mb-lg-0">
                                                        <img src="assets/images/stores/img-1.jpg" alt="Our Stores" />
                                                    </figure>
                                                </div>

                                                <div className="col-sm-7 col-xl-6">
                                                    <div className="store-content">
                                                        <h3 className="store-title">Wall Street Plaza</h3>

                                                        <address>88 Pine St, New York, NY 10005, USA</address>
                                                        <div>
                                                            <a href="tel:#">+1 987-876-6543</a>
                                                        </div>

                                                        <h4 className="store-subtitle">Store Hours:</h4>

                                                        <div>Monday - Saturday 11am to 7pm</div>
                                                        <div>Sunday 11am to 6pm</div>

                                                        <a href="#" className="btn btn-link" target="_blank">
                                                            <span>View Map</span>
                                                            <i className="icon-long-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="store">
                                            <div className="row">
                                                <div className="col-sm-5 col-xl-6">
                                                    <figure className="store-media mb-2 mb-lg-0">
                                                        <img src="assets/images/stores/img-2.jpg" alt="Our Stores" />
                                                    </figure>
                                                </div>

                                                <div className="col-sm-7 col-xl-6">
                                                    <div className="store-content">
                                                        <h3 className="store-title">One New York Plaza</h3>

                                                        <address>88 Pine St, New York, NY 10005, USA</address>
                                                        <div>
                                                            <a href="tel:#">+1 987-876-6543</a>
                                                        </div>

                                                        <h4 className="store-subtitle">Store Hours:</h4>

                                                        <div>Monday - Friday 9am to 8pm</div>
                                                        <div>Saturday - 9am to 2pm</div>
                                                        <div>Sunday - Closed</div>

                                                        <a href="#" className="btn btn-link" target="_blank">
                                                            <span>View Map</span>
                                                            <i className="icon-long-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="map"></div>
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

export default Contact
