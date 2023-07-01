import './AboutProject.css';

function AboutProject(props) {
    return (
        <section id="about-project-section" className="about-project">
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__two-columns">
                <div className="about-project__two-columns-main-text">
                    <h3 className="about-project__two-columns-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__two-columns-description">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
                        доработки.
                    </p>
                </div>
                <div className="about-project__columns-separator"></div>
                <div className="about-project__two-columns-main-text">
                    <h3 className="about-project__two-columns-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__two-columns-description">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
                        успешно
                        защититься.
                    </p>
                </div>
            </div>
            <div className="about-project__chart">
                <div className="about-project__chart-item">
                    <div className="about-project__chart-range about-project__chart-range_one-week">1 неделя</div>
                    <div className="about-project__chart-range">4 недели</div>
                </div>
                <div className="about-project__chart-item">
                    <p className="about-project__chart-caption about-project__chart-caption_back-end">Back-end</p>
                    <p className="about-project__chart-caption">Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;
