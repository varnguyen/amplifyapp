import React from 'react'

const BlogPost = () => {
    return (
        <div className="blog-posts">
            <div className="container">
                <div className="heading text-center">
                    <h2 className="title">New Blog Posts</h2>
                    <p className="title-desc">Donec nec justo eget felis facilisis fermentum.</p>
                </div>

                <div
                    className="owl-carousel owl-simple mb-4"
                    data-toggle="owl"
                    data-owl-options='{
                            "nav": false, 
                            "dots": true,
                            "items": 3,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":1
                                },
                                "600": {
                                    "items":2
                                },
                                "992": {
                                    "items":3
                                },
                                "1200": {
                                    "items":3,
                                    "nav": true,
                                    "dots": false
                                }
                            }
                        }'>
                    <article className="entry">
                        <figure className="entry-media">
                            <a href="single.html">
                                <img src="assets/images/demos/demo-17/blog/post-1.jpg" alt="image desc" />
                            </a>
                        </figure>

                        <div className="entry-body">
                            <div className="entry-meta">
                                <a href="#">Nov 22, 2018</a>, 0 Comments
                            </div>

                            <h3 className="entry-title">
                                <a href="single.html">Sed adipiscing ornare.</a>
                            </h3>

                            <div className="entry-content">
                                <a href="single.html" className="read-more">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media">
                            <a href="single.html">
                                <img src="assets/images/demos/demo-17/blog/post-2.jpg" alt="image desc" />
                            </a>
                        </figure>

                        <div className="entry-body">
                            <div className="entry-meta">
                                {/* <a href="#">Nov 22, 2018<a>, 0 Comments */}
                                Nov 22, 2018, 0 Comments
                            </div>

                            <h3 className="entry-title">
                                <a href="single.html">Aenean dignissim pellentesque felis.</a>
                            </h3>

                            <div className="entry-content">
                                <a href="single.html" className="read-more">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media">
                            <a href="single.html">
                                <img src="assets/images/demos/demo-17/blog/post-3.jpg" alt="image desc" />
                            </a>
                        </figure>

                        <div className="entry-body">
                            <div className="entry-meta">
                                <a href="#">Nov 22, 2018</a>, 0 Comments
                            </div>

                            <h3 className="entry-title">
                                <a href="single.html">Quisque volutpat mattis eros.</a>
                            </h3>

                            <div className="entry-content">
                                <a href="single.html" className="read-more">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </article>

                    <article className="entry">
                        <figure className="entry-media">
                            <a href="single.html">
                                <img src="assets/images/demos/demo-17/blog/post-2.jpg" alt="image desc" />
                            </a>
                        </figure>

                        <div className="entry-body">
                            <div className="entry-meta">
                                <a href="#">Nov 22, 2018</a>, 0 Comments
                            </div>

                            <h3 className="entry-title">
                                <a href="single.html">Aenean dignissim pellentesque felis.</a>
                            </h3>

                            <div className="entry-content">
                                <a href="single.html" className="read-more">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="more-container text-center">
                    <a href="blog.html" className="btn btn-outline-darker btn-more">
                        <span>View more articles</span>
                        <i className="icon-long-arrow-right"></i>
                    </a>
                </div>

                {/* <hr className="mb-5"> */}
            </div>
        </div>
    )
}

export default BlogPost
