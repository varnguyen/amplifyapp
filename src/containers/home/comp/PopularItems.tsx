import React from 'react'

import { mockNewLink, mockFeaturedLink, mockBestLink } from '../../../constants/data'
import ProductItem from './ProductItem'

const PopularItems = () => {
    return (
        <div className="container">
            <h2 className="title text-center">Currently Popular Items</h2>

            <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                <li className="nav-item">
                    <a
                        className="nav-link active"
                        id="tab-new-link"
                        data-toggle="tab"
                        href="#tab-new"
                        role="tab"
                        aria-controls="tab-new"
                        aria-selected="true">
                        New
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        id="tab-featured-link"
                        data-toggle="tab"
                        href="#tab-featured"
                        role="tab"
                        aria-controls="tab-featured"
                        aria-selected="false">
                        Featured
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        id="tab-best-link"
                        data-toggle="tab"
                        href="#tab-best"
                        role="tab"
                        aria-controls="tab-best"
                        aria-selected="false">
                        Best Seller
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-new" role="tabpanel" aria-labelledby="tab-new-link">
                    <ProductItem lists={mockNewLink} />
                </div>

                <div className="tab-pane fade" id="tab-featured" role="tabpanel" aria-labelledby="tab-featured-link">
                    <ProductItem lists={mockFeaturedLink} />
                </div>

                <div className="tab-pane fade" id="tab-best" role="tabpanel" aria-labelledby="tab-best-link">
                    <ProductItem lists={mockBestLink} />
                </div>
            </div>

            <div className="mb-3"></div>
        </div>
    )
}

export default PopularItems
