import React from 'react'

const ServiceItem = ({title, description, images}) => {
    return (
        <div className="services--item">
            <div className="services--item_description">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
            <div className="services--item_gallery">

            </div>
        </div>
    )
}

export default ServiceItem
