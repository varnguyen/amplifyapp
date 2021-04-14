import React, { Component, Suspense, lazy } from 'react'
// import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

const Login = lazy(() => import('../containers/login/Login'))
const Home = lazy(() => import('../containers/home/Home'))
const Product = lazy(() => import('../containers/product/Product'))
const Cart = lazy(() => import('../containers/cart/Cart'))
const Checkout = lazy(() => import('../containers/checkout/Checkout'))
const BlogListing = lazy(() => import('../containers/blog/blog-listing/BlogListing'))
const BlogDetail = lazy(() => import('../containers/blog/blog-detail/BlogDetail'))
const Dashboard = lazy(() => import('../containers/dashboard/Dashboard'))
const About = lazy(() => import('../containers/about/About'))
const Contact = lazy(() => import('../containers/contact/Contact'))
const WishList = lazy(() => import('../containers/wishlist/Wishlist'))
const ComingSoon = lazy(() => import('../containers/coming-soon/ComingSoon'))
const NotFound = lazy(() => import('../containers/not-found/NotFound'))
const Faq = lazy(() => import('../containers/faq/Faq'))
const Category = lazy(() => import('../containers/category/Category'))
const CategoryList = lazy(() => import('../containers/category-list/CategoryList'))

class AppRouter extends Component {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    componentDidMount() {}

    render() {
        return (
            <BrowserRouter>
                <div id="wrapper">
                    <Suspense fallback={<div>Loading...</div>}>
                        <>
                            <Switch>
                                <Route path="/login" render={(props: any) => <Login {...props} />} />
                                <Route path="/product" render={(props: any) => <Product {...props} />} />
                                <Route path="/cart" render={(props: any) => <Cart {...props} />} />
                                <Route path="/checkout" render={(props: any) => <Checkout {...props} />} />
                                <Route path="/blog-list" render={(props: any) => <BlogListing {...props} />} />
                                <Route path="/dashboard" render={(props: any) => <Dashboard {...props} />} />
                                <Route path="/about" render={(props: any) => <About {...props} />} />
                                <Route path="/contact" render={(props: any) => <Contact {...props} />} />
                                <Route path="/wishlist" render={(props: any) => <WishList {...props} />} />
                                <Route path="/faq" render={(props: any) => <Faq {...props} />} />
                                <Route path="/coming-soon" render={(props: any) => <ComingSoon {...props} />} />
                                <Route path="/category" render={(props: any) => <Category {...props} />} />
                                <Route path="/category-list" render={(props: any) => <CategoryList {...props} />} />
                                <Route path="/blog-detail" render={(props: any) => <BlogDetail {...props} />} />
                                <Route exact path="/404" render={(props: any) => <NotFound {...props} />} />
                                <Route exact path="/403" render={(props) => 'Forbidden'} />
                                <Route exact path="/401" render={(props) => 'Unauthorized'} />
                                <Route path="/" render={(props: any) => <Home {...props} />} />
                                <Route path="*" render={(props) => <Redirect to={{ pathname: `/404` }} />} />
                            </Switch>
                        </>
                    </Suspense>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter
