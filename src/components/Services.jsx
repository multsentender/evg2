import React from 'react'
import Slider from 'react-slick'

const Services = () => {
    const settingsServices = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: "services-dots",
      vertical: true,
      verticalSwiping: true,
    };
    const settingsGallery = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: true,
      speed: 600,
      autoplaySpeed: 8000,
      pauseOnDotsHover: true,
      rtl: true,
      dotsClass: "gallery-dots"
    };
    return (
        <div className='slider' id="services">
            <Slider {...settingsServices}>
                <div className="services--item">
                    <div className="services--item_description">
                        <h5>Чёрное пламя</h5>
                        <p>Верую во единаго Бога Отца, Вседержителя, Творца небу и земли, видимым же всем и невидимым.	 
И во единаго Господа Иисуса Христа, Сына Божия, Единороднаго, Иже от Отца рожденнаго прежде всех век; Света от Света, Бога истинна от Бога истинна, рожденна, несотворенна, единосущна Отцу, Имже вся быша.</p>
                    </div>
                    <div className="services--item_gallery">
                        <Slider />
                    </div>
                </div>
                <div className="services--item">
                    <div className="services--item_description">
                        <h5>Чёрное пламя</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab unde possimus facilis magnam architecto eligendi, hic temporibus sit ad repellat nisi, cupiditate tempore iusto vel, alias et doloribus placeat.</p>
                    </div>
                    <div className="services--item_gallery">
                        <Slider />
                    </div>
                </div>
                <div className="services--item">
                    <div className="services--item_description">
                        <h5>Чёрное пламя</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab unde possimus facilis magnam architecto eligendi, hic temporibus sit ad repellat nisi, cupiditate tempore iusto vel, alias et doloribus placeat.</p>
                    </div>
                    <div className="services--item_gallery">
                        <Slider />
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Services
