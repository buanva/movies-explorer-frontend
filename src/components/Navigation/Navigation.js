import { Link } from "react-router-dom";
import closeBtn from "../../images/close-button_movie-explorer.svg";
import './Navigation.css';

function Navigation({ isMenuOpened, onCloseMenu }) {
    return (
        <div className={"menu" + (isMenuOpened ? " menu_active" : "")}>
            <div className="menu__overlay"></div>
            <div className="menu__container">
                <img className="menu__close-button" alt="Здесь иконка закрытия меню"
                    src={closeBtn} onClick={onCloseMenu} />
                <div className="menu__options">
                    <Link to="/" className="link menu__option">Главная</Link>
                    <Link to="/movies" className="link menu__option">Фильмы</Link>
                    <Link to="/saved-movies" className="link menu__option">Сохранённые фильмы</Link>
                </div>
                <button className="menu__profile-option">Аккаунт</button>
            </div>
        </div>
    )
}

export default Navigation;
