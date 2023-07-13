import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './AboutProjectHeader.css';

function AboutProjectHeader(props) {

    return (
        <Header>
            <Link className="link header__registration-option" to="/signup">Регистрация</Link>
            <Link className="link header__login-option" to="/signin">Войти</Link>
        </Header>
    )
}

export default AboutProjectHeader;
