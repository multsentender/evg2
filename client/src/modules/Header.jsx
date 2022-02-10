import classNames from 'classnames';
import React from 'react'
import {Link, animateScroll} from 'react-scroll'

import logo from '../assets/icon/logo.svg'

const Header = () => {
    const [scroll, setScroll] = React.useState(false);
    React.useEffect(() => {
        document.addEventListener('scroll', toggleScroll)

        return () => {
        document.removeEventListener('scroll', toggleScroll)
        }
    }, [])

    const toggleScroll = (e) => {
        if(e.target.documentElement.scrollTop <= 40) {
        return setScroll(false)
        } else if(e.target.documentElement.scrollTop > 700) {
        return setScroll("all")
        } else {
        return setScroll("head")
        }
    }

    const scrollToTop = () => animateScroll.scrollToTop();

    return (
        <>
        <header className={scroll === 'head' | scroll === 'all' ? 'scrolled' : null}>
            <div className="container">
                <div className="logo" onClick={scrollToTop}>
                    <img src={logo} alt="Viva-logotype" />
                    <h1>Вива Металл</h1>
                </div>
                <ul className="nav">
                    <li className="nav--item" onClick={scrollToTop}>Главная</li>
                    <li className="nav--item">
                        <Link
                            to="services"
                            smooth={true}
                            duration={550}>Услуги
                        </Link>
                    </li>
                    <li className="nav--item">
                        <Link
                            to="contacts"
                            smooth={true}
                            duration={550}>Контакты
                        </Link>
                    </li>
                </ul>
                <div className='phone'>+7 (922) 888 05 55</div>
            </div>
        </header>
        <div className={classNames('bg-container', {'bg-scrolled': scroll === "all"})}>
            <div className="container">
                <h2>В 2021 году великий маг Всеросии увёл войско за ворота.</h2>
            </div>
        </div>
        </>
    )
}

export default Header
