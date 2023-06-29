import './AboutMe.css';

function AboutMe(props) {
    return (
        <section id="about-me-section" className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__wrapper">
                <div className="about-me__description">
                    <h3 className="about-me__my-name">Анастасия</h3>
                    <p className="about-me__my-position">Фронтенд-разработчица, 26 лет</p>
                    <p className="about-me__my-review">
                        Я родилась в Москве.
                        У меня есть муж и кот.
                        Я люблю слушать музыку.
                        Недавно начала кодить.
                    </p>
                    <a className="link about-me__link" href="https://github.com/buanva" target="_blank" rel="noreferrer">Github</a>
                </div>
                <div className="about-me__my-photo"></div>
            </div>
        </section>
    )
}

export default AboutMe;
