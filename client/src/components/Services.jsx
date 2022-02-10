import React from 'react'
import Carousel  from 'nuka-carousel'
import { ServiceItem } from '.'

import arrow from '../assets/icon/arrow.svg'

const Services = () => {
    // TODO оптимизация (тройной рендер)
    const [data, setData] = React.useState([])
    const [images, setImages] = React.useState({})

    console.log(images);

    const convert = (arr) => {
        const imgObj = {}
        arr.forEach((el, i) => {
          const key = el.split('/')[1]
          if (key in imgObj) {
            imgObj[key].push(el)
          } else {
            imgObj[key] = [el]
          }
        });
        setImages(imgObj)
    }


    React.useEffect( () => {
        // TODO Прописать proxy
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
                return
            });
            }
        )
        .catch((err) => {
            console.log('Fetch Error :-S', err);
        });
    }, [])



    return (
        <div className='services' id="services">
            <Carousel
                className='carousel services__carousel'
                vertical
                dragging={false}
                defaultControlsConfig={{
                    pagingDotsClassName: "carousel__dots",
                    nextButtonText: ' ',
                    prevButtonText: ' ',
                    nextButtonClassName: "carousen__button carousen__button--next",
                    prevButtonClassName: "carousen__button carousen__button--prev"
                }}>
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
            </Carousel>
        </div>
    )
}

export default Services
