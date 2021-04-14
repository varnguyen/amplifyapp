import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

const BlogPost = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    return (
        <div className="blog-posts">
            <div className="container">
                <div className="heading text-center">
                    <h2 className="title">New Blog Posts</h2>
                    <p className="title-desc">Donec nec justo eget felis facilisis fermentum.</p>
                </div>

                <Slider {...settings}>
                    <article className="entry">
                        <figure className="entry-media">
                            <Link to="/blog-detail">
                                <img src="assets/images/demos/demo-17/blog/post-1.jpg" alt="image desc" />
                            </Link>
                        </figure>

                        <div className="entry-body">
                            <div className="entry-meta">
                                <a href="#">Nov 22, 2018</a>, 0 Comments
                            </div>

                            <h3 className="entry-title">
                                <Link to="/blog-detail">Sed adipiscing ornare.</Link>
                            </h3>

                            <div className="entry-content">
                                <Link to="/blog-detail" className="read-more">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media">
                            <Link to="/blog-detail">
                                <img src="assets/images/demos/demo-17/blog/post-2.jpg" alt="image desc" />
                            </Link>
                        </figure>

                        <div className="entry-body">
                            <div className="entry-meta">
                                {/* <a href="#">Nov 22, 2018<a>, 0 Comments */}
                                Nov 22, 2018, 0 Comments
                            </div>

                            <h3 className="entry-title">
                                <Link to="/blog-detail">Aenean dignissim pellentesque felis.</Link>
                            </h3>

                            <div className="entry-content">
                                <Link to="/blog-detail" className="read-more">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media">
                            <Link to="/blog-detail">
                                <img src="assets/images/demos/demo-17/blog/post-3.jpg" alt="image desc" />
                            </Link>
                        </figure>

                        <div className="entry-body">
                            <div className="entry-meta">
                                <a href="#">Nov 22, 2018</a>, 0 Comments
                            </div>

                            <h3 className="entry-title">
                                <Link to="/blog-detail">Quisque volutpat mattis eros.</Link>
                            </h3>

                            <div className="entry-content">
                                <Link to="/blog-detail" className="read-more">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media">
                            <Link to="/blog-detail">
                                <img src="assets/images/demos/demo-17/blog/post-2.jpg" alt="image desc" />
                            </Link>
                        </figure>

                        <div className="entry-body">
                            <div className="entry-meta">
                                <a href="#">Nov 22, 2018</a>, 0 Comments
                            </div>

                            <h3 className="entry-title">
                                <Link to="/blog-detail">Aenean dignissim pellentesque felis.</Link>
                            </h3>

                            <div className="entry-content">
                                <Link to="/blog-detail" className="read-more">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </article>
                </Slider>

                <div className="more-container text-center">
                    <Link to="/blog-list" className="btn btn-outline-darker btn-more">
                        <span>View more articles</span>
                        <i className="icon-long-arrow-right"></i>
                    </Link>
                </div>

                {/* <hr className="mb-5"> */}
            </div>
        </div>
    )
}

export default BlogPost
