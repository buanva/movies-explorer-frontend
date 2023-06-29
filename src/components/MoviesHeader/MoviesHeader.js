import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './MoviesHeader.css';

function MoviesHeader({ onOpenMenu }) {
    return (
        <Header>
            <div className="header__desktop-nav">
                <div className="header__films-options">
                    <Link className="link header__films" to="/movies">Фильмы</Link>
                    <Link className="link header__saved-films" to="/saved-movies">Сохранённые фильмы</Link>
                </div>
                <Link className="link header__profile-option" to="/profile">Аккаунт</Link>
            </div>
            <button className="header__mobile-menu-button" onClick={onOpenMenu}></button>
        </Header>
    )
}

export default MoviesHeader;
