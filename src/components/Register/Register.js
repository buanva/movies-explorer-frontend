import { Link } from 'react-router-dom';
import './Register.css';

function Register({ children, submitBtnText, captionText, linkText, redirectTo, errorText, isValid, onSubmit }) {
    function handleSubmit(evt) {
        evt.preventDefault()
        onSubmit()
    }

    return (
        <section className="register">
            <form className="register__form" noValidate onSubmit={handleSubmit}>
                <Link className="logo logo_form" to="/"></Link>
                {children}
                <span className="register__item-error register__item-error_submit">{errorText}</span>
                <button className="register__save-button" disabled={!isValid} type="submit">{submitBtnText}</button>
            </form>
            <div className="register__caption">
                <p className="register__caption-text">{captionText}</p>
                <Link className="link register__caption-link" to={`/${redirectTo}`}>{linkText}</Link>
            </div>
        </section>
    )
}

export default Register;
