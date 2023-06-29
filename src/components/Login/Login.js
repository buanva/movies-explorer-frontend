import Register from "../Register/Register";
import texts from '../../utils/regLogTexts';
const {
    logTitle,
    logSaveBtn,
    logCap,
    logCapLink,
} = texts;

function Login(props) {
    return (
        <Register submitBtnText={logSaveBtn} captionText={logCap} linkText={logCapLink} redirectTo="signup">
            <h2 className="register__title">{logTitle}</h2>
            <h3 className="register__input-title">E-mail</h3>
            <input className="register__input" type="text" name="email" minLength="2" maxLength="256" required />
            <span className="register__item-error email-input-error"></span>
            <h3 className="register__input-title">Пароль</h3>
            <input className="register__input" type="password" name="password" minLength="2" maxLength="256"
                required />
            <span className="register__item-error register__item-error_margin register__item-error_margin-login password-input-error"></span>
        </Register>
    )
}

export default Login;
