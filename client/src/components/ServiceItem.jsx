import React from 'react'
import Carousel  from 'nuka-carousel'

const ServiceItem = ({title, description, images}) => {
    return (
        <div className="services--item">
            <div className="services--item_description">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
            <div className="services--item_gallery">
                <Carousel
                    className='carousel services--item__carousel'
                    autoplay
                    autoplayReverse
                    withoutControls>
                    {images &&
                        images.map((el, index) => {
                            // TODO прописать proxy
                        return <img src={`http://localhost:5000/${el}`} className='gallery--item' alt="service" />})}
                </Carousel>
            </div>
        </div>
    )
}

export default ServiceItem
