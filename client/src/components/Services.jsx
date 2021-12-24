import React from 'react'
import Slider from 'react-slick'
import { ServiceItem } from '.'

import arrow from '../assets/icon/arrow.svg'

const ArrowBtn = ({className, style, onClick}) => {
    return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}>
          <img src={arrow} alt="arrow" />
      </div>
  );
}

const settingsServices = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: false,
  dotsClass: "services-dots",
  vertical: true,
  verticalSwiping: true,
  prevArrow: <ArrowBtn/>,
nextArrow: <ArrowBtn/>
};


const Services = () => {
    const [data, setData] = React.useState([])
    const [images, setImages] = React.useState({})

    const convert = (arr) => {
        const imgObj = {}
        arr.forEach((el, i) => {
          const key = el.split('\\')[1]
          if (key in imgObj) {
            imgObj[key].push(el)
          } else {
            imgObj[key] = [el]
          }
        });
        setImages(imgObj)
    }

    React.useEffect( () => {
        fetch('http://localhost:5000')
        .then((response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }

            response.json().then((json) => {
                setData(json.data)
                convert(json.uploads)
                return;
            });
            }
        )
        .catch((err) => {
            console.log('Fetch Error :-S', err);
        });
    }, [])


    return (
        <div className='slider' id="services">
            <Slider {...settingsServices}>
                {
                    data.map((el, index) => {
                        return (
                        <ServiceItem
                            title={el.title}
                            description={el.description}
                            images={images[el.path]}
                            key={`servise--item_${index}`}/>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default Services
