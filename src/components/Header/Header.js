import { Link } from 'react-router-dom';
import './Header.css';
import '../../link/link.css'

function Header(props) {
    return (
        <header className="header">
            <Link className="logo" to="/"></Link>
            <div className="header__options">
                {props.children}
            </div>
        </header>
    )
}

export default Header;
