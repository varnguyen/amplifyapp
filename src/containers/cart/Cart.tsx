import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

import { mockProductList } from '../../constants/data'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import MobileMenuContainer from '../../components/mobile-menu-container/MobileMenuContainer'
import PageHeader from '../../components/page-header/PageHeader'

const Cart = () => {
    // const calCartTotal = (cartList = []) => cartList.reduce((accumulator, currentValue: any) => accumulator + currentValue.gia_tien, 0)

    return (
        <>
            <div className="page-wrapper">
                <Header />

                <main className="main">
                    <PageHeader title="Giỏ hàng" subTitle="Shop" />

                    <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Shop</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Shopping Cart
                                </li>
                            </ol>
                        </div>
                    </nav>

                    <div className="page-content">
                        <div className="cart">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <table className="table table-cart table-mobile">
                                            <thead>
                                                <tr>
                                                    <th>Sản phẩm</th>
                                                    <th>Đơn giá</th>
                                                    <th>Số lượng</th>
                                                    <th>Số tiền</th>
                                                    <th></th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {mockProductList.map((e) => (
                                                    <tr key={e.name}>
                                                        <td className="product-col">
                                                            <div className="product">
                                                                <figure className="product-media">
                                                                    <Link to="/">
                                                                        <img src={e.img} alt="Product image" />
                                                                    </Link>
                                                                </figure>

                                                                <h3 className="product-title">
                                                                    <Link to="/">{e.name}</Link>
                                                                </h3>
                                                            </div>
                                                        </td>
                                                        <td className="price-col">${e.gia_tien}.00</td>
                                                        <td className="quantity-col">
                                                            <div className="cart-product-quantity">
                                                                <Form>
                                                                    <Form.Control
                                                                        type="number"
                                                                        className="form-control"
                                                                        value={e.quantity}
                                                                        min={1}
                                                                        max={10}
                                                                        step={1}
                                                                        defaultValue={1}
                                                                        onChange={(e) => console.log(e)}
                                                                        required
                                                                    />
                                                                </Form>
                                                            </div>
                                                        </td>
                                                        <td className="total-col">${e.gia_tien}.00</td>
                                                        <td className="remove-col">
                                                            <button className="btn-remove">
                                                                <i className="icon-close"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <div className="cart-bottom">
                                            <div className="cart-discount">
                                                <form action="#">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" required placeholder="coupon code" />
                                                        <div className="input-group-append">
                                                            <button className="btn btn-outline-primary-2" type="submit">
                                                                <i className="icon-long-arrow-right"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                            <a href="#" className="btn btn-outline-dark-2">
                                                <span>UPDATE CART</span>
                                                <i className="icon-refresh"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <aside className="col-lg-3">
                                        <div className="summary summary-cart">
                                            <h3 className="summary-title">Cart Total</h3>

                                            <table className="table table-summary">
                                                <tbody>
                                                    <tr className="summary-subtotal">
                                                        <td>Subtotal:</td>
                                                        <td>$160.00</td>
                                                    </tr>

                                                    <tr className="summary-shipping">
                                                        <td>Shipping:</td>
                                                        <td>&nbsp;</td>
                                                    </tr>

                                                    <tr className="summary-shipping-row">
                                                        <td>
                                                            <div className="custom-control custom-radio">
                                                                <input
                                                                    type="radio"
                                                                    id="free-shipping"
                                                                    name="shipping"
                                                                    className="custom-control-input"
                                                                />
                                                                <label className="custom-control-label" htmlFor="free-shipping">
                                                                    Free Shipping
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>$0.00</td>
                                                    </tr>

                                                    <tr className="summary-shipping-row">
                                                        <td>
                                                            <div className="custom-control custom-radio">
                                                                <input
                                                                    type="radio"
                                                                    id="standart-shipping"
                                                                    name="shipping"
                                                                    className="custom-control-input"
                                                                />
                                                                <label className="custom-control-label" htmlFor="standart-shipping">
                                                                    Standart:
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>$10.00</td>
                                                    </tr>

                                                    <tr className="summary-shipping-row">
                                                        <td>
                                                            <div className="custom-control custom-radio">
                                                                <input
                                                                    type="radio"
                                                                    id="express-shipping"
                                                                    name="shipping"
                                                                    className="custom-control-input"
                                                                />
                                                                <label className="custom-control-label" htmlFor="express-shipping">
                                                                    Express:
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>$20.00</td>
                                                    </tr>

                                                    <tr className="summary-shipping-estimate">
                                                        <td>
                                                            Estimate for Your Country <a href="dashboard.html">Change address</a>
                                                        </td>
                                                        <td>&nbsp;</td>
                                                    </tr>

                                                    <tr className="summary-total">
                                                        <td>Total:</td>
                                                        <td>$160.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <a href="checkout.html" className="btn btn-outline-primary-2 btn-order btn-block">
                                                PROCEED TO CHECKOUT
                                            </a>
                                        </div>

                                        <a href="category.html" className="btn btn-outline-dark-2 btn-block mb-3">
                                            <span>CONTINUE SHOPPING</span>
                                            <i className="icon-refresh"></i>
                                        </a>
                                    </aside>
                                </div>
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

export default Cart
