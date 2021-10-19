import React from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'

import logo from '../assets/icon/logo.svg'

const Header = () => {
    const scrollToTop = () => scroll.scrollToTop();

    return (
        <header className='scrolled'>
            <div className="container">
                <div className="logo">
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
    )
}

export default Header
