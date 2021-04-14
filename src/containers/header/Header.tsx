import React from 'react'
import { Link } from 'react-router-dom'

import ModalLoginSingin from '../../components/modal-login-signin/ModalLoginSingin'
import { mockCategoryList, mockProductList } from '../../constants/data'

const Header = () => {
    const pathname = window.location.pathname

    return (
        <div className="page-wrapper">
            <header className="header header-6">
                <div className="header-top sticky-header">
                    <div className="container">
                        <div className="header-left">
                            <div className="header-dropdown">
                                <Link to="/">VN</Link>
                                <div className="header-menu">
                                    <ul>
                                        <li>
                                            <Link to="/">Việt Nam</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="header-right">
                            <div className="social-icons social-icons-color">
                                <Link className="social-icon social-facebook" title="Facebook" target="_blank" to="/">
                                    <i className="icon-facebook-f"></i>
                                </Link>
                                <Link to="/" className="social-icon social-twitter" title="Twitter" target="_blank">
                                    <i className="icon-twitter"></i>
                                </Link>
                                <Link to="/" className="social-icon social-instagram" title="Pinterest" target="_blank">
                                    <i className="icon-instagram"></i>
                                </Link>
                                <Link to="/" className="social-icon social-pinterest" title="Instagram" target="_blank">
                                    <i className="icon-pinterest-p"></i>
                                </Link>
                            </div>

                            <ul className="top-menu">
                                <li>
                                    <Link to="/">Links</Link>
                                    <ul>
                                        <li>
                                            <a href="tel:#">
                                                <i className="icon-phone"></i>
                                                Call: +0123 456 789
                                            </a>
                                        </li>
                                        {/* <li>
                                            <Link to="/wishlist">
                                                <i className="icon-heart-o"></i>
                                                Wishlist <span>(3)</span>
                                            </Link>
                                        </li> */}
                                        <li>
                                            <Link to="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact Us</Link>
                                        </li>
                                        <li>
                                            <a href="#signin-modal" data-toggle="modal">
                                                <i className="icon-user"></i>
                                                Login
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* <div className="header-dropdown">
                                <a href="#">USD</a>
                                <div className="header-menu">
                                    <ul>
                                        <li>
                                            <a href="#">Eur</a>
                                        </li>
                                        <li>
                                            <a href="#">Usd</a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}

                            {/* <div className="header-dropdown">
                                <a href="#">Eng</a>
                                <div className="header-menu">
                                    <ul>
                                        <li>
                                            <a href="#">English</a>
                                        </li>
                                        <li>
                                            <a href="#">French</a>
                                        </li>
                                        <li>
                                            <a href="#">Spanish</a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="header-middle">
                    <div className="container">
                        <div className="header-left">
                            <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                                <Link to="/" className="search-toggle" role="button">
                                    <i className="icon-search"></i>
                                </Link>
                                <form action="#" method="get">
                                    <div className="header-search-wrapper search-wrapper-wide">
                                        <label htmlFor="q" className="sr-only">
                                            Search
                                        </label>
                                        <button className="btn btn-primary" type="submit">
                                            <i className="icon-search"></i>
                                        </button>
                                        <input
                                            type="search"
                                            className="form-control"
                                            name="q"
                                            id="q"
                                            placeholder="Search product ..."
                                            required
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="header-center">
                            <Link to="/" className="logo">
                                <img src="assets/images/demos/demo-6/logo.png" alt="Molla Logo" width="82" height="20" />
                            </Link>
                        </div>

                        <div className="header-right">
                            {/* <a href="wishlist.html" className="wishlist-link">
                                <i className="icon-heart-o"></i>
                                <span className="wishlist-count">3</span>
                                <span className="wishlist-txt">My Wishlist</span>
                            </a> */}

                            <div className="dropdown cart-dropdown">
                                <Link
                                    className="dropdown-toggle"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-display="static"
                                    to="/cart">
                                    <i className="icon-shopping-cart"></i>
                                    <span className="cart-count">2</span>
                                    <span className="cart-txt">$ 164,00</span>
                                </Link>

                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-cart-products">
                                        {mockProductList.map((e) => (
                                            <div className="product" key={e.name}>
                                                <div className="product-cart-details">
                                                    <h4 className="product-title">
                                                        <Link to="/product">{e.name}</Link>
                                                    </h4>
                                                    <span className="cart-product-info">
                                                        <span className="cart-product-qty">{e.quantity}</span> x {e.gia_tien}
                                                    </span>
                                                </div>

                                                <figure className="product-image-container">
                                                    <Link to="/product" className="product-image">
                                                        <img src={e.img} alt={e.alt} />
                                                    </Link>
                                                </figure>
                                                <Link to="/" className="btn-remove" title="Remove Product">
                                                    <i className="icon-close"></i>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="dropdown-cart-total">
                                        <span>Tổng tiền hàng</span>

                                        <span className="cart-total-price">$160.00</span>
                                    </div>

                                    <div className="dropdown-cart-action">
                                        <Link className="btn btn-outline-primary-2" to="/cart">
                                            Xem giỏ hàng
                                        </Link>
                                        <Link className="btn btn-outline-primary-2" to="/checkout">
                                            <span>Checkout</span>
                                            <i className="icon-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-bottom sticky-header">
                    <div className="container">
                        <div className="header-left">
                            <nav className="main-nav">
                                <ul className="menu sf-arrows">
                                    <li className={`megamenu-container ${pathname === '/' ? 'active' : ''}`}>
                                        <Link to="/">Trang chủ</Link>
                                    </li>

                                    <li className={`${['/category-list', '/category'].includes(pathname) ? 'active' : ''}`}>
                                        <Link className="sf-with-ul" to="/category">
                                            Danh mục
                                        </Link>
                                        <div className="megamenu megamenu-sm">
                                            <div className="row no-gutters">
                                                <div className="col-md-6">
                                                    <div className="menu-col">
                                                        <div className="menu-title">Tất cả</div>
                                                        <ul>
                                                            <li>
                                                                <Link to="/category">
                                                                    <span>
                                                                        Category
                                                                        <span className="tip tip-new">New</span>
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <div className="menu-title">Danh mục</div>
                                                        <ul>
                                                            {mockCategoryList.map((e) => (
                                                                <li key={e.key}>
                                                                    <Link to="/category-list">
                                                                        <span>
                                                                            {e.title}
                                                                            {e.status === 1 && <span className="tip tip-new">New</span>}
                                                                            {e.status === 2 && <span className="tip tip-hot">Hot</span>}
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="banner banner-overlay">
                                                        <Link to="/category" className="banner banner-menu">
                                                            <img src="assets/images/menu/banner-1.jpg" alt="Banner" />

                                                            <div className="banner-content banner-content-top">
                                                                <div className="banner-title text-white">
                                                                    Last Chance
                                                                    <span>
                                                                        <strong>Sale</strong>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={`${pathname === '/product' ? 'active' : ''}`}>
                                        <Link to="/product" className="sf-with-ul">
                                            Product
                                        </Link>

                                        <div className="megamenu megamenu-sm">
                                            <div className="row no-gutters">
                                                <div className="col-md-6">
                                                    <div className="menu-col">
                                                        <div className="menu-title">Product Details</div>
                                                        <ul>
                                                            <li>
                                                                <a href="product.html">Default</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-centered.html">Centered</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-extended.html">
                                                                    <span>
                                                                        Extended Info
                                                                        <span className="tip tip-new">New</span>
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="product-gallery.html">Gallery</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-sticky.html">Sticky Info</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-sidebar.html">Boxed With Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-fullwidth.html">Full Width</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-masonry.html">Masonry Sticky Info</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="banner banner-overlay">
                                                        <a href="category.html">
                                                            <img src="assets/images/menu/banner-2.jpg" alt="Banner" />

                                                            <div className="banner-content banner-content-bottom">
                                                                <div className="banner-title text-white">
                                                                    New Trends
                                                                    <span>
                                                                        <strong>spring 2019</strong>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* <li>
                                        <a href="#" className="sf-with-ul">
                                            Pages
                                        </a>
                                        <ul>
                                            <li>
                                                <a
                                                    href="about.html"
                                                    className="sf-with-ul">
                                                    About
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="about.html">
                                                            About 01
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="login.html">Login</a>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li className={`${['/blog-list', '/blog-detail'].includes(pathname) ? 'active' : ''}`}>
                                        <Link to="/blog-list">Blog</Link>
                                        {/* <ul>
                                            <li>
                                                <a href="blog.html">
                                                    classNameic
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">Grid</a>
                                                <ul>
                                                    <li>
                                                        <a href="blog-grid-2cols.html">
                                                            Grid 2 columns
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul> */}
                                    </li>
                                </ul>
                            </nav>

                            <button className="mobile-menu-toggler">
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>
                        </div>

                        <div className="header-right">
                            <i className="icon-star-o"></i>
                            <p>
                                <span>Clearance Up to 30% Off</span>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <ModalLoginSingin />
        </div>
    )
}

export default Header
