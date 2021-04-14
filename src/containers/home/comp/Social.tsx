import React from 'react'
import Slider from 'react-slick'

const Social = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    return (
        <div className="container-fluid">
            <div className="heading text-center">
                <h2 className="title">Follow us on instagram</h2>
                <p className="title-desc">Donec nec justo eget felis facilisis fermentum.</p>
            </div>

            <Slider {...settings}>
                <div className="instagram-feed">
                    <img src="assets/images/demos/demo-17/instagram/1.jpg" alt="img" />

                    <div className="instagram-feed-content">
                        <a href="#">
                            <i className="icon-heart-o"></i>466
                        </a>
                        <a href="#">
                            <i className="icon-comments"></i>65
                        </a>
                    </div>
                </div>

                <div className="instagram-feed">
                    <img src="assets/images/demos/demo-17/instagram/2.jpg" alt="img" />

                    <div className="instagram-feed-content">
                        <a href="#">
                            <i className="icon-heart-o"></i>39
                        </a>
                        <a href="#">
                            <i className="icon-comments"></i>78
                        </a>
                    </div>
                </div>

                <div className="instagram-feed">
                    <img src="assets/images/demos/demo-17/instagram/3.jpg" alt="img" />

                    <div className="instagram-feed-content">
                        <a href="#">
                            <i className="icon-heart-o"></i>691
                        </a>
                        <a href="#">
                            <i className="icon-comments"></i>87
                        </a>
                    </div>
                </div>

                <div className="instagram-feed">
                    <img src="assets/images/demos/demo-17/instagram/4.jpg" alt="img" />

                    <div className="instagram-feed-content">
                        <a href="#">
                            <i className="icon-heart-o"></i>508
                        </a>
                        <a href="#">
                            <i className="icon-comments"></i>124
                        </a>
                    </div>
                </div>

                <div className="instagram-feed">
                    <img src="assets/images/demos/demo-17/instagram/5.jpg" alt="img" />

                    <div className="instagram-feed-content">
                        <a href="#">
                            <i className="icon-heart-o"></i>433
                        </a>
                        <a href="#">
                            <i className="icon-comments"></i>27
                        </a>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Social
