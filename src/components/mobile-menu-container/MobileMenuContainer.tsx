import React from 'react'

export default function MobileMenuContainer() {
    return (
        <div className="mobile-menu-container">
            <div className="mobile-menu-wrapper">
                <span className="mobile-menu-close">
                    <i className="icon-close"></i>
                </span>

                <form action="#" method="get" className="mobile-search">
                    <label htmlFor="mobile-search" className="sr-only">
                        Search
                    </label>
                    <input
                        type="search"
                        className="form-control"
                        name="mobile-search"
                        id="mobile-search"
                        placeholder="Search in..."
                        required
                    />
                    <button className="btn btn-primary" type="submit">
                        <i className="icon-search"></i>
                    </button>
                </form>

                <nav className="mobile-nav">
                    <ul className="mobile-menu">
                        <li className="active">
                            <a href="index.html">Home</a>

                            <ul>
                                <li>
                                    <a href="index-1.html">01 - furniture store</a>
                                </li>
                                <li>
                                    <a href="index-2.html">02 - furniture store</a>
                                </li>
                                <li>
                                    <a href="index-3.html">03 - electronic store</a>
                                </li>
                                <li>
                                    <a href="index-4.html">04 - electronic store</a>
                                </li>
                                <li>
                                    <a href="index-5.html">05 - fashion store</a>
                                </li>
                                <li>
                                    <a href="index-6.html">06 - fashion store</a>
                                </li>
                                <li>
                                    <a href="index-7.html">07 - fashion store</a>
                                </li>
                                <li>
                                    <a href="index-8.html">08 - fashion store</a>
                                </li>
                                <li>
                                    <a href="index-9.html">09 - fashion store</a>
                                </li>
                                <li>
                                    <a href="index-10.html">10 - shoes store</a>
                                </li>
                                <li>
                                    <a href="index-11.html">11 - furniture simple store</a>
                                </li>
                                <li>
                                    <a href="index-12.html">12 - fashion simple store</a>
                                </li>
                                <li>
                                    <a href="index-13.html">13 - market</a>
                                </li>
                                <li>
                                    <a href="index-14.html">14 - market fullwidth</a>
                                </li>
                                <li>
                                    <a href="index-15.html">15 - lookbook 1</a>
                                </li>
                                <li>
                                    <a href="index-16.html">16 - lookbook 2</a>
                                </li>
                                <li>
                                    <a href="index-17.html">17 - fashion store</a>
                                </li>
                                <li>
                                    <a href="index-18.html">18 - fashion store (with sidebar)</a>
                                </li>
                                <li>
                                    <a href="index-19.html">19 - games store</a>
                                </li>
                                <li>
                                    <a href="index-20.html">20 - book store</a>
                                </li>
                                <li>
                                    <a href="index-21.html">21 - sport store</a>
                                </li>
                                <li>
                                    <a href="index-22.html">22 - tools store</a>
                                </li>
                                <li>
                                    <a href="index-23.html">23 - fashion left navigation store</a>
                                </li>
                                <li>
                                    <a href="index-24.html">24 - extreme sport store</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category.html">Shop</a>
                            <ul>
                                <li>
                                    <a href="category-list.html">Shop List</a>
                                </li>
                                <li>
                                    <a href="category-2cols.html">Shop Grid 2 Columns</a>
                                </li>
                                <li>
                                    <a href="category.html">Shop Grid 3 Columns</a>
                                </li>
                                <li>
                                    <a href="category-4cols.html">Shop Grid 4 Columns</a>
                                </li>
                                <li>
                                    <a href="category-boxed.html">
                                        <span>
                                            Shop Boxed No Sidebar
                                            <span className="tip tip-hot">Hot</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="category-fullwidth.html">Shop Fullwidth No Sidebar</a>
                                </li>
                                <li>
                                    <a href="product-category-boxed.html">Product Category Boxed</a>
                                </li>
                                <li>
                                    <a href="product-category-fullwidth.html">
                                        <span>
                                            Product Category Fullwidth
                                            <span className="tip tip-new">New</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="cart.html">Cart</a>
                                </li>
                                <li>
                                    <a href="checkout.html">Checkout</a>
                                </li>
                                <li>
                                    <a href="wishlist.html">Wishlist</a>
                                </li>
                                <li>
                                    <a href="#">Lookbook</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="product.html" className="sf-with-ul">
                                Product
                            </a>
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
                        </li>
                        <li>
                            <a href="#">Pages</a>
                            <ul>
                                <li>
                                    <a href="about.html">About</a>

                                    <ul>
                                        <li>
                                            <a href="about.html">About 01</a>
                                        </li>
                                        <li>
                                            <a href="about-2.html">About 02</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>

                                    <ul>
                                        <li>
                                            <a href="contact.html">Contact 01</a>
                                        </li>
                                        <li>
                                            <a href="contact-2.html">Contact 02</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="login.html">Login</a>
                                </li>
                                <li>
                                    <a href="faq.html">FAQs</a>
                                </li>
                                <li>
                                    <a href="404.html">Error 404</a>
                                </li>
                                <li>
                                    <a href="coming-soon.html">Coming Soon</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="blog.html">Blog</a>

                            <ul>
                                <li>
                                    <a href="blog.html">classNameic</a>
                                </li>
                                <li>
                                    <a href="blog-listing.html">Listing</a>
                                </li>
                                <li>
                                    <a href="#">Grid</a>
                                    <ul>
                                        <li>
                                            <a href="blog-grid-2cols.html">Grid 2 columns</a>
                                        </li>
                                        <li>
                                            <a href="blog-grid-3cols.html">Grid 3 columns</a>
                                        </li>
                                        <li>
                                            <a href="blog-grid-4cols.html">Grid 4 columns</a>
                                        </li>
                                        <li>
                                            <a href="blog-grid-sidebar.html">Grid sidebar</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Masonry</a>
                                    <ul>
                                        <li>
                                            <a href="blog-masonry-2cols.html">Masonry 2 columns</a>
                                        </li>
                                        <li>
                                            <a href="blog-masonry-3cols.html">Masonry 3 columns</a>
                                        </li>
                                        <li>
                                            <a href="blog-masonry-4cols.html">Masonry 4 columns</a>
                                        </li>
                                        <li>
                                            <a href="blog-masonry-sidebar.html">Masonry sidebar</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Mask</a>
                                    <ul>
                                        <li>
                                            <a href="blog-mask-grid.html">Blog mask grid</a>
                                        </li>
                                        <li>
                                            <a href="blog-mask-masonry.html">Blog mask masonry</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Single Post</a>
                                    <ul>
                                        <li>
                                            <a href="single.html">Default with sidebar</a>
                                        </li>
                                        <li>
                                            <a href="single-fullwidth.html">Fullwidth no sidebar</a>
                                        </li>
                                        <li>
                                            <a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="elements-list.html">Elements</a>
                            <ul>
                                <li>
                                    <a href="elements-products.html">Products</a>
                                </li>
                                <li>
                                    <a href="elements-typography.html">Typography</a>
                                </li>
                                <li>
                                    <a href="elements-titles.html">Titles</a>
                                </li>
                                <li>
                                    <a href="elements-banners.html">Banners</a>
                                </li>
                                <li>
                                    <a href="elements-product-category.html">Product Category</a>
                                </li>
                                <li>
                                    <a href="elements-video-banners.html">Video Banners</a>
                                </li>
                                <li>
                                    <a href="elements-buttons.html">Buttons</a>
                                </li>
                                <li>
                                    <a href="elements-accordions.html">Accordions</a>
                                </li>
                                <li>
                                    <a href="elements-tabs.html">Tabs</a>
                                </li>
                                <li>
                                    <a href="elements-testimonials.html">Testimonials</a>
                                </li>
                                <li>
                                    <a href="elements-blog-posts.html">Blog Posts</a>
                                </li>
                                <li>
                                    <a href="elements-portfolio.html">Portfolio</a>
                                </li>
                                <li>
                                    <a href="elements-cta.html">Call to Action</a>
                                </li>
                                <li>
                                    <a href="elements-icon-boxes.html">Icon Boxes</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div className="social-icons">
                    <a href="#" className="social-icon" target="_blank" title="Facebook">
                        <i className="icon-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon" target="_blank" title="Twitter">
                        <i className="icon-twitter"></i>
                    </a>
                    <a href="#" className="social-icon" target="_blank" title="Instagram">
                        <i className="icon-instagram"></i>
                    </a>
                    <a href="#" className="social-icon" target="_blank" title="Youtube">
                        <i className="icon-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
