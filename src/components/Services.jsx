import React from 'react'
import Slider from 'react-slick'
import axios from 'axios'
import { ServiceItem } from '.'


import arrow from '../assets/icon/arrow.svg'

const getAll = (r) => {
    return r.keys().map(r);
}

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

const Services = () => {
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

    const images = getAll(require.context('../assets/image/services', true, /\.(png|jpe?g|webp)$/))
    
    const [data, setData] = React.useState({})

    React.useEffect( async () => {
        axios.get('http://localhost:8000')
            .then((res) => {
                console.log(res)
            })
        // await fetch('http://localhost:8000/api')
        // .then((response) => {
        //     if (response.status !== 200) {
        //         console.log('Looks like there was a problem. Status Code: ' +
        //         response.status);
        //         return;
        //     }

        //     response.json().then((data) => {
        //         console.log(data);
        //     });
        //     }
        // )
        // .catch((err) => {
        //     console.log('Fetch Error :-S', err);
        // });
    }, [])

    return (
        <div className='slider' id="services">
            <Slider {...settingsServices}>
                {
                    // servicesJSON.map((el, index) => {
                    //     return (
                    //     <ServiceItem 
                    //         title={el.title}
                    //         description={el.description}
                    //         path={el.path}
                    //         key={`servise--item_${index}`}/>
                    //     )
                    // })
                }
            </Slider>
        </div>
    )
}

export default Services
