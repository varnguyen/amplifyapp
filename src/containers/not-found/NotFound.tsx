import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import MobileMenuContainer from '../../components/mobile-menu-container/MobileMenuContainer'

const NotFound = () => {
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
                                    404
                                </li>
                            </ol>
                        </div>
                    </nav>

                    <div
                        className="error-content text-center"
                        style={{
                            backgroundImage: `url('assets/images/backgrounds/error-bg.jpg')`
                        }}>
                        <div className="container">
                            <h1 className="error-title">Error 404</h1>
                            <p>We are sorry, the page you've requested is not available.</p>
                            <a href="index.html" className="btn btn-outline-primary-2 btn-minwidth-lg">
                                <span>BACK TO HOMEPAGE</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
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

export default NotFound
