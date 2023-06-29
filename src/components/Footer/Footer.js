import React from "react";
import './Footer.css';

function Footer() {
    return (

        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум&#8201;&#120;&#8201;BeatFilm.</h2>
            <div className="footer__wrapper">
                <p className="footer__copyright">&copy;&#8201;2023</p>
                <ul className="footer__links">
                    <li className="footer__link-item">
                        <a className="link footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__link-item">
                        <a className="link footer__link" href="https://github.com/buanva" target="_blank" rel="noreferrer">Github</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer;
