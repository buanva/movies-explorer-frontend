import { useState } from "react";

import Register from "../Register/Register";

import texts from '../../utils/regLogTexts';
import { useFormWithValidation } from "../FormValidation/FormValidation";
import { patterns } from "../../utils/constants";

const {
    logTitle,
    logSaveBtn,
    logCap,
    logCapLink,
} = texts;

function Login({ onLogin }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation()
    const [errorMessage, setErrorMessage] = useState("")

    function inputValueChange(evt) {
        handleChange(evt)
        setErrorMessage("")
    }

    function error(err) {
        console.error('Login error:', err && err.message, err)
        if (err && err.message) {
            setErrorMessage(err.message)
        }
    }

    function handleSubmit() {
        if (isValid) {
            onLogin(values, error)
        }
    }

    return (
        <Register submitBtnText={logSaveBtn} captionText={logCap} linkText={logCapLink} redirectTo="signup" errorText={errorMessage} isValid={isValid} onSubmit={handleSubmit}>
            <h2 className="register__title">{logTitle}</h2>
            <h3 className="register__input-title">E-mail</h3>
            <input
                className="register__input"
                type="text"
                name="email"
                minLength="2"
                maxLength="256"
                required
                pattern={patterns.email}
                autoComplete="off"
                onChange={inputValueChange}
            />
            <span className="register__item-error">{errors.email}</span>
            <h3 className="register__input-title">Пароль</h3>
            <input
                className="register__input"
                type="password"
                name="password"
                minLength="2"
                maxLength="256"
                required
                autoComplete="off"
                onChange={inputValueChange}
            />
            <span className="register__item-error register__item-error_margin register__item-error_margin-login">{errors.password}</span>
        </Register>
    )
}

export default Login;
