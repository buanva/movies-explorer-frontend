import NavTab from "../NavTab/NavTab";
import './Techs.css';

function Techs(props) {
    return (
        <section id="techs-section" className="techs">
            <h2 className="techs__title">Технологии</h2>
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__caption">
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
            <NavTab>
                <div className="nav-tab__wpaprer">
                    <li className="nav-tab__tech">HTML</li>
                    <li className="nav-tab__tech">CSS</li>
                    <li className="nav-tab__tech">JS</li>
                    <li className="nav-tab__tech">React</li>
                    <li className="nav-tab__tech">Git</li>
                    <li className="nav-tab__tech">Express.js</li>
                    <li className="nav-tab__tech">mongoDB</li>
                </div>
            </NavTab>
        </section>
    )
}

export default Techs;
