import React from 'react'
import { Link } from 'react-router-dom'

import { mockBlogLists } from '../../../constants/data'

import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import PageHeader from '../../../components/page-header/PageHeader'
import MobileMenuContainer from '../../../components/mobile-menu-container/MobileMenuContainer'
import Sidebar from '../sidebar/Sidebar'

const BlogListing = () => {
    return (
        <>
            <div className="page-wrapper">
                <Header />

                <main className="main">
                    <PageHeader title="BlogListing" subTitle="Blog" />

                    <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Blog</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Listing
                                </li>
                            </ol>
                        </div>
                    </nav>

                    <div className="page-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9">
                                    {mockBlogLists.map((item) => (
                                        <article className="entry entry-list" key={item.title}>
                                            <div className="row align-items-center">
                                                <div className="col-md-5">
                                                    <figure className="entry-media">
                                                        <Link to="/blog-detail">
                                                            <img src={item.img} alt="image desc" />
                                                        </Link>
                                                    </figure>
                                                </div>

                                                <div className="col-md-7">
                                                    <div className="entry-body">
                                                        <div className="entry-meta">
                                                            <span className="entry-author">
                                                                by <a href="#">{item.author}</a>
                                                            </span>
                                                            <span className="meta-separator">|</span>
                                                            <a href="#">{item.created_at}</a>
                                                            <span className="meta-separator">|</span>
                                                            <a href="#">{item.total_comment} Comments</a>
                                                        </div>

                                                        <h2 className="entry-title">
                                                            <Link to="/blog-detail">{item.title}</Link>
                                                        </h2>

                                                        <div className="entry-cats">
                                                            in{' '}
                                                            {item.tag.map((tag, index) => (
                                                                <a href="#" key={index}>
                                                                    {tag}{' '}
                                                                </a>
                                                            ))}
                                                        </div>

                                                        <div className="entry-content">
                                                            <p>{item.description}</p>
                                                            <Link to="/blog-detail">Continue Reading</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    ))}

                                    <nav aria-label="Page navigation">
                                        <ul className="pagination">
                                            <li className="page-item disabled">
                                                <a className="page-link page-link-prev" href="#" aria-label="Previous" aria-disabled="true">
                                                    <span aria-hidden="true">
                                                        <i className="icon-long-arrow-left"></i>
                                                    </span>
                                                    Prev
                                                </a>
                                            </li>
                                            <li className="page-item active" aria-current="page">
                                                <a className="page-link" href="#">
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    2
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link page-link-next" href="#" aria-label="Next">
                                                    Next{' '}
                                                    <span aria-hidden="true">
                                                        <i className="icon-long-arrow-right"></i>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
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

export default BlogListing
