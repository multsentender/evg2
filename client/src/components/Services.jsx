import React from 'react'
import { ServiceItem } from '.'

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

        </div>
    )
}

export default Services
