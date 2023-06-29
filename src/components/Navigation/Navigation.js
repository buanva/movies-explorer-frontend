import closeBtn from "../../images/close-button_movie-explorer.png";
import './Navigation.css';

function Navigation({ isMenuOpened, onCloseMenu }) {
    return (
        <div className={"menu" + (isMenuOpened ? " menu_active" : "")}>
            <div className="menu__overlay"></div>
            <div className="menu__container">
                <img className="menu__close-button" alt="Здесь иконка закрытия меню"
                    src={closeBtn} onClick={onCloseMenu} />
                <div className="menu__options">
                    <div className="menu__option">Главная</div>
                    <div className="menu__option">Фильмы</div>
                    <div className="menu__option">Сохранённые фильмы</div>
                </div>
                <button className="menu__profile-option">Аккаунт</button>
            </div>
        </div>
    )
}

export default Navigation;
