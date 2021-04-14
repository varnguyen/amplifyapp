import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import MobileMenuContainer from '../../../components/mobile-menu-container/MobileMenuContainer'
import Sidebar from '../sidebar/Sidebar'
import Comment from '../comment/Comment'

const BlogDetail = () => {
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
                                    <a href="#">Blog</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Blog Detail
                                </li>
                            </ol>
                        </div>
                    </nav>

                    <div className="page-content">
                        <div className="container">
                            <figure className="entry-media">
                                {/* <div
                                    className="owl-carousel owl-simple owl-light owl-nav-inside"
                                    data-toggle="owl"> */}
                                <img src="assets/images/blog/single/fullwidth-sidebar/1.jpg" alt="blog" />
                                {/* <img
                                        src="assets/images/blog/single/fullwidth-sidebar/2.jpg"
                                        alt="image desc"
                                    />
                                    <img
                                        src="assets/images/blog/single/fullwidth-sidebar/3.jpg"
                                        alt="image desc"
                                    />
                                </div> */}
                            </figure>

                            <div className="row">
                                <div className="col-lg-9">
                                    <article className="entry single-entry">
                                        <div className="entry-body">
                                            <div className="entry-meta">
                                                <span className="entry-author">
                                                    by <a href="#">John Doe</a>
                                                </span>
                                                <span className="meta-separator">|</span>
                                                <a href="#">Nov 22, 2018</a>
                                                <span className="meta-separator">|</span>
                                                <a href="#">2 Comments</a>
                                            </div>

                                            <h2 className="entry-title entry-title-big">Sed adipiscing ornare risus.</h2>

                                            <div className="entry-cats">
                                                in <a href="#">Fashion</a>,<a href="#">Shopping</a>
                                            </div>

                                            <div className="entry-content editor-content">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
                                                    Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                                                    nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                                                    blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                                                </p>

                                                <p>
                                                    Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero
                                                    eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
                                                    lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
                                                    volutpat, lacus a <a href="#">ultrices sagittis</a>, mi neque euismod dui, eu pulvinar
                                                    nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed,
                                                    urna.
                                                </p>

                                                <blockquote>
                                                    <p>
                                                        “ Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus
                                                        libero eu augue. ”
                                                    </p>
                                                </blockquote>

                                                <p>
                                                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                                                    dapibus id, mattis vel, nisi. Sed pretium, ligula <a href="#">sollicitudin laoreet</a>{' '}
                                                    viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
                                                    justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper
                                                    est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
                                                    commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed
                                                    semper lorem at felis.{' '}
                                                </p>

                                                <div className="pb-1"></div>

                                                <img src="assets/images/blog/single/fullwidth-sidebar/4.jpg" alt="image" />
                                                <img src="assets/images/blog/single/fullwidth-sidebar/5.jpg" alt="image" />

                                                <div className="pb-1"></div>

                                                <p>
                                                    Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
                                                    Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
                                                    lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                                                    Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum mollis
                                                    sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu
                                                    pulvinar risus, vitae facilisis libero dolor a purus.{' '}
                                                </p>

                                                <div className="pb-1"></div>

                                                <h3>Morbi interdum mollis sapien.</h3>

                                                <p>
                                                    Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                                                    blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas,
                                                    ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.
                                                    Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.{' '}
                                                </p>

                                                <p>
                                                    Praesent <a href="#">elementum hendrerit</a> tortor. Sed semper lorem at felis.
                                                    Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
                                                    sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                                                </p>
                                            </div>

                                            <div className="entry-footer row no-gutters flex-column flex-md-row">
                                                <div className="col-md">
                                                    <div className="entry-tags">
                                                        <span>Tags:</span> <a href="#">photography</a> <a href="#">style</a>
                                                    </div>
                                                </div>

                                                <div className="col-md-auto mt-2 mt-md-0">
                                                    <div className="social-icons social-icons-color">
                                                        <span className="social-label">Share this post:</span>
                                                        <a
                                                            href="#"
                                                            className="social-icon social-facebook"
                                                            title="Facebook"
                                                            target="_blank">
                                                            <i className="icon-facebook-f"></i>
                                                        </a>
                                                        <a href="#" className="social-icon social-twitter" title="Twitter" target="_blank">
                                                            <i className="icon-twitter"></i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="social-icon social-pinterest"
                                                            title="Pinterest"
                                                            target="_blank">
                                                            <i className="icon-pinterest"></i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="social-icon social-linkedin"
                                                            title="Linkedin"
                                                            target="_blank">
                                                            <i className="icon-linkedin"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="entry-author-details">
                                            <figure className="author-media">
                                                <a href="#">
                                                    <img src="assets/images/blog/single/author.jpg" alt="User name" />
                                                </a>
                                            </figure>

                                            <div className="author-body">
                                                <div className="author-header row no-gutters flex-column flex-md-row">
                                                    <div className="col">
                                                        <h4>
                                                            <a href="#">John Doe</a>
                                                        </h4>
                                                    </div>

                                                    <div className="col-auto mt-1 mt-md-0">
                                                        <a href="#" className="author-link">
                                                            View all posts by John Doe <i className="icon-long-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="author-content">
                                                    <p>
                                                        Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu
                                                        vulputate magna eros eu erat. Aliquam erat volutpat.{' '}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <nav className="pager-nav" aria-label="Page navigation">
                                        <a className="pager-link pager-link-prev" href="#" aria-label="Previous">
                                            Previous Post
                                            <span className="pager-link-title">Cras iaculis ultricies nulla</span>
                                        </a>

                                        <a className="pager-link pager-link-next" href="#" aria-label="Next">
                                            Next Post
                                            <span className="pager-link-title">Praesent placerat risus</span>
                                        </a>
                                    </nav>
                                    <div className="related-posts">
                                        <h3 className="title">Related Posts</h3>

                                        <div
                                            className="owl-carousel owl-simple"
                                            data-toggle="owl"
                                            data-owl-options={{
                                                nav: false,
                                                dots: true,
                                                margin: 20,
                                                loop: false,
                                                responsive: {
                                                    '0': {
                                                        items: 1
                                                    },
                                                    '480': {
                                                        items: 2
                                                    },
                                                    '768': {
                                                        items: 3
                                                    }
                                                }
                                            }}>
                                            <article className="entry entry-grid">
                                                <figure className="entry-media">
                                                    <a href="single.html">
                                                        <img src="assets/images/blog/grid/3cols/post-1.jpg" alt="image desc" />
                                                    </a>
                                                </figure>

                                                <div className="entry-body">
                                                    <div className="entry-meta">
                                                        <a href="#">Nov 22, 2018</a>
                                                        <span className="meta-separator">|</span>
                                                        <a href="#">2 Comments</a>
                                                    </div>

                                                    <h2 className="entry-title">
                                                        <a href="single.html">Cras ornare tristique elit.</a>
                                                    </h2>

                                                    <div className="entry-cats">
                                                        in <a href="#">Lifestyle</a>,<a href="#">Shopping</a>
                                                    </div>
                                                </div>
                                            </article>

                                            <article className="entry entry-grid">
                                                <figure className="entry-media">
                                                    <a href="single.html">
                                                        <img src="assets/images/blog/grid/3cols/post-2.jpg" alt="image desc" />
                                                    </a>
                                                </figure>

                                                <div className="entry-body">
                                                    <div className="entry-meta">
                                                        <a href="#">Nov 21, 2018</a>
                                                        <span className="meta-separator">|</span>
                                                        <a href="#">0 Comments</a>
                                                    </div>

                                                    <h2 className="entry-title">
                                                        <a href="single.html">Vivamus ntulla necante.</a>
                                                    </h2>

                                                    <div className="entry-cats">
                                                        in <a href="#">Lifestyle</a>
                                                    </div>
                                                </div>
                                            </article>

                                            <article className="entry entry-grid">
                                                <figure className="entry-media">
                                                    <a href="single.html">
                                                        <img src="assets/images/blog/grid/3cols/post-3.jpg" alt="image desc" />
                                                    </a>
                                                </figure>

                                                <div className="entry-body">
                                                    <div className="entry-meta">
                                                        <a href="#">Nov 18, 2018</a>
                                                        <span className="meta-separator">|</span>
                                                        <a href="#">3 Comments</a>
                                                    </div>

                                                    <h2 className="entry-title">
                                                        <a href="single.html">Utaliquam sollicitudin leo.</a>
                                                    </h2>

                                                    <div className="entry-cats">
                                                        in <a href="#">Fashion</a>,<a href="#">Lifestyle</a>
                                                    </div>
                                                </div>
                                            </article>

                                            <article className="entry entry-grid">
                                                <figure className="entry-media">
                                                    <a href="single.html">
                                                        <img src="assets/images/blog/grid/3cols/post-4.jpg" alt="image desc" />
                                                    </a>
                                                </figure>

                                                <div className="entry-body">
                                                    <div className="entry-meta">
                                                        <a href="#">Nov 15, 2018</a>
                                                        <span className="meta-separator">|</span>
                                                        <a href="#">4 Comments</a>
                                                    </div>

                                                    <h2 className="entry-title">
                                                        <a href="single.html">Fusce pellentesque suscipit.</a>
                                                    </h2>

                                                    <div className="entry-cats">
                                                        in <a href="#">Travel</a>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    <Comment />
                                </div>

                                <aside className="col-lg-3">
                                    <Sidebar />
                                </aside>
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

export default BlogDetail
