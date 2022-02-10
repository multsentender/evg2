import React from 'react';
import classNames from 'classnames';
import {YMaps, Map, Placemark} from 'react-yandex-maps'

const Footer = () => {
    return (
        <footer className='footer' id='contacts'>
            <div className='card'>
                <div className={'card__info'}>
                    <h2 className='footer__title'>Наши <br/> контакты</h2>
                    <div className="card__contacts">
                        <p>Телефон: <br/><span>+7 (922) 888 05 55</span></p>
                        <p>Адрес: <br/><span>ул. Поляничко 689</span></p>
                    </div>

                    <div className="card__other">
                        {/* TODO исправить ссылку на WhatsUp */}
                        <a href='https://wa.me/79068334482' className='whatsApp'>
                            <svg className='whatsApp__icon' version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="22px" height="22px" viewBox="0 0 512 512"
                                preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0, 512) scale(0.1, -0.1)">
                                    <path d="M2430 4964 c-499 -43 -916 -197 -1290 -478 -118 -88 -318 -282 -415
                                        -401 -270 -332 -445 -736 -512 -1175 -21 -142 -23 -480 -4 -620 40 -295 126
                                        -570 250 -807 l49 -91 -168 -614 c-93 -337 -167 -615 -164 -617 2 -2 286 70
                                        631 161 l627 165 123 -59 c483 -231 1068 -289 1593 -158 331 83 662 247 927
                                        460 258 209 507 525 648 825 215 453 282 940 199 1435 -169 1006 -983 1801
                                        -1996 1950 -124 18 -406 32 -498 24z m424 -430 c422 -58 802 -249 1112 -558
                                        475 -476 673 -1133 539 -1788 -64 -311 -212 -618 -417 -863 -310 -372 -726
                                        -608 -1213 -692 -140 -23 -463 -23 -600 0 -255 45 -480 125 -689 246 l-89 51
                                        -364 -96 c-201 -52 -367 -93 -369 -91 -2 2 39 164 93 360 l97 356 -51 83
                                        c-270 442 -358 935 -258 1433 141 699 663 1276 1346 1489 289 90 558 112 863
                                        70z"/>
                                    <path d="M1678 3681 c-112 -37 -258 -230 -297 -392 -60 -256 18 -513 258 -843
                                        218 -300 454 -533 713 -703 168 -110 460 -237 653 -284 101 -24 284 -26 369
                                        -4 132 35 297 147 350 238 35 59 58 159 60 250 1 71 -1 80 -23 96 -48 37 -512
                                        251 -555 257 -52 8 -54 6 -155 -125 -104 -134 -153 -181 -186 -181 -42 0 -297
                                        130 -402 206 -50 36 -129 102 -175 147 -139 137 -298 356 -298 411 0 18 19 51
                                        54 95 109 136 136 181 136 225 0 52 -195 526 -237 575 -28 33 -28 33 -133 37
                                        -58 2 -117 0 -132 -5z"/>
                                </g>
                            </svg>
                        </a>
                        <b>ИНН : 3664069397</b>
                    </div>
                </div>
                <div className='card__map'>
                    <YMaps>
                        <Map
                            className='map'
                            defaultState={{
                            center: [55.684758, 37.738521],
                            zoom: 14,
                            }}
                        >
                            <Placemark geometry={[55.684758, 37.738521]} />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
