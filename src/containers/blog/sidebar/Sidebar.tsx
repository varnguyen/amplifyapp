import React from 'react'
import { Link } from 'react-router-dom'

import { mockPopularPosts, mockPBrowseTags, mockCategories } from '../../../constants/data'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="widget widget-search">
                <h3 className="widget-title">Search</h3>
                <form action="#">
                    <label htmlFor="ws" className="sr-only">
                        Search in blog
                    </label>
                    <input type="search" className="form-control" name="ws" id="ws" placeholder="Search in blog" required />
                    <button type="submit" className="btn">
                        <i className="icon-search"></i>
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            </div>

            <div className="widget widget-cats">
                <h3 className="widget-title">Categories</h3>
                <ul>
                    {mockCategories.map((e) => (
                        <li key={e.name}>
                            <Link to="/">
                                {e.name}
                                <span>{e.total}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="widget">
                <h3 className="widget-title">Popular Posts</h3>
                <ul className="posts-list">
                    {mockPopularPosts.map((e) => (
                        <li key={e.title}>
                            <figure>
                                <Link to="/blog-detail">
                                    <img src={e.img} alt="post" />
                                </Link>
                            </figure>
                            <div>
                                <span>{e.created_at}</span>
                                <h4>
                                    <Link to="/blog-detail">{e.title}</Link>
                                </h4>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="widget widget-banner-sidebar">
                <div className="banner-sidebar-title">ad box 280 x 280</div>
                <div className="banner-sidebar banner-overlay">
                    <a href="#">
                        <img src="assets/images/blog/sidebar/banner.jpg" alt="banner" />
                    </a>
                </div>
            </div>

            <div className="widget">
                <h3 className="widget-title">Browse Tags</h3>
                <div className="tagcloud">
                    {mockPBrowseTags.map((e) => (
                        <a href="#" key={e}>
                            {e}
                        </a>
                    ))}
                </div>
            </div>

            <div className="widget widget-text">
                <h3 className="widget-title">About Blog</h3>

                <div className="widget-text-content">
                    <p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, pulvinar nunc sapien ornare nisl.</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
