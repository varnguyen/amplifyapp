import React from 'react'

const Intro = () => {
    return (
        <div className="intro-section bg-lighter pt-3">
            <div className="container">
                <div className="banner-group">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="banner banner-big banner-overlay">
                                <a href="#">
                                    <img src="assets/images/demos/demo-17/banners/banner-1.jpg" alt="Banner" />
                                </a>

                                <div className="banner-content banner-content-bottom">
                                    <h4 className="banner-subtitle text-white">
                                        <a href="#">Trending now</a>
                                    </h4>
                                    <h3 className="banner-title text-white">
                                        <a href="#">The Focus and Accent On Your Spring Wardrobe</a>
                                    </h3>
                                    <a href="#" className="banner-link">
                                        Discover Now <i className="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="banner banner-overlay">
                                <a href="#">
                                    <img src="assets/images/demos/demo-17/banners/banner-2.jpg" alt="Banner" />
                                </a>

                                <div className="banner-content banner-content-right">
                                    <h4 className="banner-subtitle text-white">
                                        <a href="#">clearance</a>
                                    </h4>
                                    <h3 className="banner-title text-white">
                                        <a href="#">Clearance It’s On Up To 50% Off</a>
                                    </h3>
                                    <a href="#" className="banner-link">
                                        Shop Now <i className="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="banner banner-overlay">
                                        <a href="#">
                                            <img src="assets/images/demos/demo-17/banners/banner-3.jpg" alt="Banner" />
                                        </a>

                                        <div className="banner-content banner-content-top ">
                                            <h4 className="banner-subtitle text-white">
                                                <a href="#">you might love</a>
                                            </h4>
                                            <h3 className="banner-title text-white">
                                                <a href="#">This Week's Most Wanted</a>
                                            </h3>
                                            <a href="#" className="banner-link">
                                                Shop Now <i className="icon-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="banner banner-overlay">
                                        <a href="#">
                                            <img src="assets/images/demos/demo-17/banners/banner-4.jpg" alt="Banner" />
                                        </a>

                                        <div className="banner-content  banner-content-top banner-content-reverse">
                                            <h4 className="banner-subtitle text-white">
                                                <a href="#">The new pretty</a>
                                            </h4>
                                            <h3 className="banner-title text-white">
                                                <a href="#">How To DressFor Spring</a>
                                            </h3>
                                            <a href="#" className="banner-link">
                                                Discover Now <i className="icon-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="icon-boxes-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="icon-rocket"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Free Shipping</h3>
                                    <p>Orders $50 or more</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="icon-rotate-left"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Free Returns</h3>
                                    <p>Within 30 days</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="icon-info-circle"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Get 20% Off 1 Item</h3>
                                    <p>When you sign up</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="icon-life-ring"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">We Support</h3>
                                    <p>24/7 amazing services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
