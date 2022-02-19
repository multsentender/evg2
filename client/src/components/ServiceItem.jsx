import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const ServiceItem = ({title, description, images}) => {
    return (
        <div className="services--item">
            <div className="services__info">
                <h5 className='services__title'>{title}</h5>
                <p className='services__description'>{description}</p>
            </div>
            <div className="services__gallery">
                {/* <Carousel
                    autoPlay
                    interval={2500}
                    infiniteLoop
                    dynamicHeight
                    >
                    {
                        images && images.map(el => <img src={`http://localhost:5000/${el}`} className='gallery--item' alt="service" key={`image__${el}`} />)}
                </Carousel> */}
            </div>
        </div>
    )
}

export default ServiceItem
