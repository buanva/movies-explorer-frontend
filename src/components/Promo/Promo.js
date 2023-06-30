import NavTab from "../NavTab/NavTab";

import './Promo.css';

function Promo(props) {
    return (
        <section className="promo">
            <div className="promo__wrapper">
                <div className="promo__banner">
                    <h1 className="promo__banner-title">Учебный проект студентки факультета Веб-разработки.</h1>
                    <nav>
                        <NavTab>
                            <li>
                                <a className="link nav-tab__link" href="#about-project-section">О проекте</a>
                            </li>
                            <li>
                                <a className="link nav-tab__link" href="#techs-section">Технологии</a>
                            </li>
                            <li>
                                <a className="link nav-tab__link" href="#about-me-section">Студент</a>
                            </li>
                        </NavTab>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Promo;
