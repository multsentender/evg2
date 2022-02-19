import React from 'react'
import { Carousel } from 'react-responsive-carousel';

import { ServiceItem } from '.'

const Services = () => {
    // TODO оптимизация (тройной рендер)
    const [data, setData] = React.useState([])
    const [images, setImages] = React.useState({})

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
                axis='vertical'
                ariaLabel='Услуги нашей компании'
                infiniteLoop
                >
                {
                    data.map((el, index) => {
                        return (
                            <ServiceItem
                                title={el.title}
                                description={el.description}
                                images={images[el.path]}
                                key={`servece--item_${index}`}/>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Services
