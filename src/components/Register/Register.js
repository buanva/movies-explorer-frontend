import { Link } from 'react-router-dom';
import './Register.css';

function Register({ children, submitBtnText, captionText, linkText, redirectTo }) {

    return (
        <section className="register">
            <form className="register__form">
                <Link className="logo logo_form" to="/"></Link>
                {children}
                <button className="register__save-button" type="submit">{submitBtnText}</button>
            </form>
            <div className="register__caption">
                <p className="register__caption-text">{captionText}</p>
                <Link className="link register__caption-link" to={`/${redirectTo}`}>{linkText}</Link>
            </div>
        </section>
    )
}

export default Register;
