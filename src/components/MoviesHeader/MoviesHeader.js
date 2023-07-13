import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import './MoviesHeader.css';

function MoviesHeader({ onOpenMenu }) {
    return (
        <Header>
            <div className="header__desktop-nav">
                <div className="header__films-options">
                    <NavLink className={({ isActive }) => `link header__films ${isActive ? "header__link_active" :""}`} to="/movies">Фильмы</NavLink>
                    <NavLink className={({ isActive }) => `link header__saved-films ${isActive ? "header__link_active" :""}`} to="/saved-movies">Сохранённые фильмы</NavLink>
                </div>
                <NavLink className={({ isActive }) => `link header__profile-option ${isActive ? "header__link_active" :""}`} to="/profile">Аккаунт</NavLink>
            </div>
            <button className="header__mobile-menu-button" onClick={onOpenMenu}></button>
        </Header>
    )
}

export default MoviesHeader;
