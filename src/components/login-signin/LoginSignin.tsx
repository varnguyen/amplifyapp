import React from 'react'

const LoginSignin = () => {
    return (
        <div className="form-box">
            <div className="form-tab">
                <ul className="nav nav-pills nav-fill" role="tablist">
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            id="signin-tab"
                            data-toggle="tab"
                            href="#signin"
                            role="tab"
                            aria-controls="signin"
                            aria-selected="true">
                            Sign In
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            id="register-tab"
                            data-toggle="tab"
                            href="#register"
                            role="tab"
                            aria-controls="register"
                            aria-selected="false">
                            Register
                        </a>
                    </li>
                </ul>
                <div className="tab-content" id="tab-content-5">
                    <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor="singin-email">Username or email address *</label>
                                <input type="text" className="form-control" id="singin-email" name="singin-email" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="singin-password">Password *</label>
                                <input type="password" className="form-control" id="singin-password" name="singin-password" required />
                            </div>

                            <div className="form-footer">
                                <button type="submit" className="btn btn-outline-primary-2">
                                    <span>LOG IN</span>
                                    <i className="icon-long-arrow-right"></i>
                                </button>

                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="signin-remember" />
                                    <label className="custom-control-label" htmlFor="signin-remember">
                                        Remember Me
                                    </label>
                                </div>

                                <a href="#" className="forgot-link">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </form>
                        <div className="form-choice">
                            <p className="text-center">or sign in with</p>
                            <div className="row">
                                <div className="col-sm-6">
                                    <a href="#" className="btn btn-login btn-g">
                                        <i className="icon-google"></i>
                                        Login With Google
                                    </a>
                                </div>

                                <div className="col-sm-6">
                                    <a href="#" className="btn btn-login btn-f">
                                        <i className="icon-facebook-f"></i>
                                        Login With Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor="register-email">Your email address *</label>
                                <input type="email" className="form-control" id="register-email" name="register-email" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="register-password">Password *</label>
                                <input type="password" className="form-control" id="register-password" name="register-password" required />
                            </div>

                            <div className="form-footer">
                                <button type="submit" className="btn btn-outline-primary-2">
                                    <span>SIGN UP</span>
                                    <i className="icon-long-arrow-right"></i>
                                </button>

                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="register-policy" required />
                                    <label className="custom-control-label" htmlFor="register-policy">
                                        I agree to the <a href="#">privacy policy</a> *
                                    </label>
                                </div>
                            </div>
                        </form>
                        <div className="form-choice">
                            <p className="text-center">or sign in with</p>
                            <div className="row">
                                <div className="col-sm-6">
                                    <a href="#" className="btn btn-login btn-g">
                                        <i className="icon-google"></i>
                                        Login With Google
                                    </a>
                                </div>

                                <div className="col-sm-6">
                                    <a href="#" className="btn btn-login  btn-f">
                                        <i className="icon-facebook-f"></i>
                                        Login With Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignin
