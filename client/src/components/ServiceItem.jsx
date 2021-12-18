import React from 'react'
import Slider from 'react-slick'


const settingsGallery = {
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1.409,
      slidesToScroll: 1,
      lazyLoad: false,
      autoplay: true,
      speed: 1100,
      autoplaySpeed: 6000,
      pauseOnDotsHover: true,
      rtl: true,
      dotsClass: "gallery-dots"
}


const ServiceItem = ({title, description, images}) => {
    return (
        <div className="services--item">
            <div className="services--item_description">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
            <div className="services--item_gallery">
                <Slider {...settingsGallery}>
                    {images && 
                        images.map((el, index) => {
                            console.log(el)
                        return <div className="gallery--item" key={`images--${index}`}>
                                    <img src={`http://localhost:5000/${el}`} alt="service" />
                                </div>
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default ServiceItem
