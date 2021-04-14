import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCategoryListAction } from '../../actions'
import { isEmpty } from '../../utils/validate'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import PageHeader from '../../components/page-header/PageHeader'
import CategoryItem from './comp/CategoryItem'
import MobileMenuContainer from '../../components/mobile-menu-container/MobileMenuContainer'

class Category extends Component<any | any> {
    constructor(props: any) {
        super(props)
        this.state = {
            get_category: {},
            content: {},
            load: true
        }
    }

    static getDerivedStateFromProps(props: any, state: any) {
        console.log('props', props.get_category)
        if (props.get_category && !isEmpty(props.get_category.payload) && props.get_category.payload !== state.get_category) {
            return { get_category: props.get_category.payload }
        }
        return null
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        const { get_category }: any = this.state
        if (prevState.get_category !== get_category) {
            const { results, error, message } = get_category
            switch (0) {
                case 0:
                    if (results) {
                        this.setState({ load: false, content: results, error, message })
                    } else {
                        this.setState({ load: false })
                    }
                    break

                default:
                    console.log('Đã có lỗi xảy ra')
                    break
            }
        }
    }

    componentDidMount() {
        // this.props.getCategoryListAction()
    }

    render() {
        // const { content, load }: any = this.state

        // if (load) {
        //     return <div className="text-center">Loading</div>
        // }

        return (
            <>
                <div className="page-wrapper">
                    <Header />

                    <main className="main">
                        <PageHeader title="Danh mục" subTitle="Shop" />
                        <nav aria-label="breadcrumb" className="breadcrumb-nav breadcrumb-with-filter">
                            <div className="container">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Trang chủ</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link to="/category">Danh mục</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Tất cả danh mục
                                    </li>
                                </ol>
                            </div>
                        </nav>

                        <div className="page-content">
                            <div className="categories-page">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <CategoryItem
                                                img={'assets/images/category/boxed/banner-1.jpg'}
                                                bannerTitle={'Dresses'}
                                                bannerSubtitle={'3 Products'}
                                                bannerLinkText={'Shop Now'}
                                            />
                                            <CategoryItem
                                                img={'assets/images/category/boxed/banner-2.jpg'}
                                                bannerTitle={'Jackets'}
                                                bannerSubtitle={'2 Products'}
                                                bannerLinkText={'Shop Now'}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <CategoryItem
                                                        img={'assets/images/category/boxed/banner-3.jpg'}
                                                        bannerTitle={'T-shirts'}
                                                        bannerSubtitle={'0 Products'}
                                                        bannerLinkText={'Shop Now'}
                                                    />
                                                </div>

                                                <div className="col-sm-6">
                                                    <CategoryItem
                                                        img={'assets/images/category/boxed/banner-4.jpg'}
                                                        bannerTitle={'Jeans'}
                                                        bannerSubtitle={'1 Products'}
                                                        bannerLinkText={'Shop Now'}
                                                    />
                                                </div>
                                            </div>

                                            <CategoryItem
                                                img={'assets/images/category/boxed/banner-5.jpg'}
                                                bannerTitle={'Bags'}
                                                bannerSubtitle={'4 Products'}
                                                bannerLinkText={'Shop Now'}
                                            />
                                        </div>

                                        <div className="col-sm-6 col-md-3">
                                            <CategoryItem
                                                img={'assets/images/category/boxed/banner-6.jpg'}
                                                bannerTitle={'Sportwear'}
                                                bannerSubtitle={'0 Products'}
                                                bannerLinkText={'Shop Now'}
                                            />
                                        </div>

                                        <div className="col-sm-6 col-md-3 order-md-last">
                                            <CategoryItem
                                                img={'assets/images/category/boxed/banner-8.jpg'}
                                                bannerTitle={'Jumpers'}
                                                bannerSubtitle={'1 Products'}
                                                bannerLinkText={'Shop Now'}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <CategoryItem
                                                img={'assets/images/category/boxed/banner-7.jpg'}
                                                bannerTitle={'Shoes'}
                                                bannerSubtitle={'2 Products'}
                                                bannerLinkText={'Shop Now'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-filter-overlay"></div>
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
}
const mapStateToProps = (state: any) => {
    return {
        get_category: state.getCategoryListReducer
    }
}

export default connect(mapStateToProps, {
    getCategoryListAction
})(Category)
