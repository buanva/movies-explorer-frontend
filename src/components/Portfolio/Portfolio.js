import './Portfolio.css';

function Portfolio(props) {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <a className="link portfolio__item portfolio__item_no-padding-top" href="https://github.com/buanva?tab=repositories" target="_blank" rel="noreferrer">
                Статичный сайт
                <div className="portfolio__button"></div>
            </a>
            <a className="link portfolio__item" href="https://github.com/buanva/russian-travel" target="_blank" rel="noreferrer">
                Адаптивный сайт
                <div className="portfolio__button"></div>
            </a>
            <a className="link portfolio__item portfolio__item_no-border-bottom" href="https://github.com/buanva/mesto" target="_blank" rel="noreferrer">
                Одностраничное приложение
                <div className="portfolio__button"></div>
            </a>
        </section>
    )
}

export default Portfolio;
