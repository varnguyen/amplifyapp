import React from 'react'

const PageHeader = (props: any) => {
    const { title, subTitle = '' } = props
    return (
        <div
            className="page-header text-center"
            style={{
                backgroundImage: `url('assets/images/page-header-bg.jpg')`
            }}>
            <div className="container">
                <h1 className="page-title">
                    {title} {subTitle && <span>{subTitle}</span>}
                </h1>
            </div>
        </div>
    )
}

export default PageHeader
