import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = (props: any) => {
    const { img, bannerTitle, bannerSubtitle, bannerLinkText } = props
    return (
        <div className="banner banner-cat banner-badge">
            <Link to="/">
                <img src={img} alt="Banner" />
            </Link>

            <Link className="banner-link" to="/">
                <h3 className="banner-title">{bannerTitle}</h3>

                <h4 className="banner-subtitle">{bannerSubtitle}</h4>

                <span className="banner-link-text">{bannerLinkText}</span>
            </Link>
        </div>
    )
}

export default CategoryItem
