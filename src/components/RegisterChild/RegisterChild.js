import Register from "../Register/Register";
import texts from '../../utils/regLogTexts';
const {
    regTitle,
    regSaveBtn,
    regCap,
    regCapLink
} = texts;

function RegisterChild(props) {

    return (
        <Register submitBtnText={regSaveBtn} captionText={regCap} linkText={regCapLink} redirectTo="signin">
            <h2 className="register__title">{regTitle}</h2>
            <h3 className="register__input-title">Имя</h3>
            <input className="register__input" type="text" name="name" minLength="2" maxLength="256" required />
            <span className="register__item-error name-input-error"></span>
            <h3 className="register__input-title">E-mail</h3>
            <input className="register__input" type="text" name="email" minLength="2" maxLength="256" required />
            <span className="register__item-error email-input-error"></span>
            <h3 className="register__input-title">Пароль</h3>
            <input className="register__input" type="password" name="password" minLength="2" maxLength="256"
                required />
            <span className="register__item-error register__item-error_margin password-input-error"></span>
        </Register>
    )
}

export default RegisterChild;
