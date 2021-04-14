import React from 'react'
import { isEmpty } from '../../../utils/validate'
import { Link } from 'react-router-dom'

const ProductItem = (props: any) => {
    const { lists } = props

    return (
        <div className="row justify-content-center">
            {lists.map((e: any, index: number) => (
                <div className="col-6 col-md-4 col-lg-3" key={index}>
                    <div className="product product-4">
                        <figure className="product-media">
                            {e.status === 'sale' && <span className="product-label label-sale">Sale</span>}
                            {e.status === 'new' && <span className="product-label label-new">New</span>}
                            <Link to="/product">
                                <img src={e.img1} alt="Product" className="product-image" />
                                <img src={e.img2} alt="Product" className="product-image-hover" />
                            </Link>

                            <div className="product-action-vertical">
                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                                    <span>add to wishlist</span>
                                </a>
                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view">
                                    <span>Quick view</span>
                                </a>
                                <a href="#" className="btn-product-icon btn-compare" title="Compare">
                                    <span>Compare</span>
                                </a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart">
                                    <span>add to cart</span>
                                </a>
                            </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">{e.category}</a>
                            </div>
                            <h3 className="product-title">
                                <Link to="/product">{e.title}</Link>
                            </h3>
                            {e.price && <div className="product-price">{e.price}</div>}
                            {e.new_price && <div className="new-price">{e.new_price}</div>}
                            {e.old_price && <div className="old-price">{e.old_price}</div>}
                            {!isEmpty(e.colors) && (
                                <div className="product-nav product-nav-dots">
                                    {e.colors.map((color: any, idx: any) => (
                                        <Link
                                            key={idx}
                                            to="/"
                                            className={idx === 0 ? 'active' : ''}
                                            style={{
                                                background: color.background
                                            }}>
                                            <span className="sr-only">{color.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductItem
