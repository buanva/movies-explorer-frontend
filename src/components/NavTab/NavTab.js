import './NavTab.css';

function NavTab(props) {
    return (
        <ul className="nav-tab">
            {props.children}
        </ul>
    )
}

export default NavTab;
