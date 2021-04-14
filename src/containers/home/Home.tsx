import React from 'react'

import Header from '../header/Header'
import MobileMenuContainer from '../../components/mobile-menu-container/MobileMenuContainer'
import Intro from './comp/Intro'
import SignupEmail from './comp/SignupEmail'
import BlogPost from './comp/BlogPost'
import Social from './comp/Social'
import Footer from './comp/Footer'
import Newsletter from './comp/Newsletter'
import PopularItems from './comp/PopularItems'

const Home = () => {
    return (
        <div className="page-wrapper">
            <Header />

            <main className="main">
                <Intro />
                <PopularItems />
                <SignupEmail />
                <BlogPost />
                <Social />
            </main>

            <Footer />

            <button id="scroll-top" title="Back to Top">
                <i className="icon-arrow-up"></i>
            </button>

            <div className="mobile-menu-overlay"></div>

            <MobileMenuContainer />
            <Newsletter />
        </div>
    )
}

export default Home
