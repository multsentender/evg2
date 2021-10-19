import React from 'react'
import {Link} from 'react-scroll'

import arrow from '../assets/icon/arrow.svg'
import testImage from '../assets/image/bg_2.png'

const Main = () => {
    return (
        <main className="types_main">
            <Link 
                to="types"
                smooth={true}
                duration={1000}
                offset={-120}>
                <div className="scroll">
                    <img src={arrow} alt="arrow" />
                </div>
            </Link>
            <div className="container">
                <h4>Ворота за великим магом закрыли. Ворота за великим магом открыли. 
                    Ворота за великим магом закрыли.  
                    Ворота за великим магом открыли. Или нет?</h4>
                <div id='types' className="types">
                    <div className="types--item">
                        <div className="types--item_image">
                            <img src={testImage} alt="image types of job" />
                        </div>
                        <div className="types--item_description dc_1">
                            <b>Тёмное перевоплощение</b>
                            <p>Сразу после уода великого мага, один из наиболее злобных и могущественных драконов перевоплотился в чёрную пантеру.</p>
                        </div>
                    </div>
                    <div className="types--item">
                        <div className="types--item_image">
                            <img src={testImage} alt="image types of job" />
                        </div>
                        <div className="types--item_description dc_2">
                            <b>Гнустное предательство</b>
                            <p>После чего тот отправился в каждое угольно-плебейское поселение, принуждая каждого жителя к восстанию против диктатуры великого мага.</p>
                        </div>
                    </div>
                    <div className="types--item">
                        <div className="types--item_image">
                            <img src={testImage} alt="image types of job" />
                        </div>
                        <div className="types--item_description dc_3">
                            <b>Угольное восстание</b>
                            <p>Под предводительством перевоплатившегося великого дракона, что на протяжении многих лет мечтал о верховной власти мага, Угольная тележка отправилась в замок.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
