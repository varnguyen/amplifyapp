import React from 'react'

const SignupEmail = () => {
    return (
        <div
            className="cta bg-image bg-dark pt-4 pb-5"
            style={{
                backgroundImage: `url('assets/images/demos/demo-17/bg-1.jpg')`
            }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-8 col-lg-6">
                        <div className="cta-heading text-center">
                            <h3 className="cta-title text-white">Sign up for email & get 25% off </h3>
                            <p className="cta-desc text-white">Subcribe to get information about products and coupons</p>
                        </div>

                        <form action="#">
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your Email Address"
                                    aria-label="Email Adress"
                                    required
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit">
                                        <span>Subscribe</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupEmail
