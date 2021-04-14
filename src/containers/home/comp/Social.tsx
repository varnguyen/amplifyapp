import React from 'react'

const Social = () => {
    return (
        <div className="container-fluid">
            <div className="heading text-center">
                <h2 className="title">Follow us on instagram</h2>
                <p className="title-desc">Donec nec justo eget felis facilisis fermentum.</p>
            </div>

            <div
                className="owl-carousel owl-simple"
                data-toggle="owl"
                data-owl-options={{
                    nav: false,
                    dots: false,
                    items: 5,
                    margin: 20,
                    loop: false,
                    responsive: {
                        '0': {
                            items: 2
                        },
                        '360': {
                            items: 2
                        },
                        '600': {
                            items: 3
                        },
                        '992': {
                            items: 4
                        },
                        '1200': {
                            items: 5
                        }
                    }
                }}>
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
            </div>
        </div>
    )
}

export default Social
