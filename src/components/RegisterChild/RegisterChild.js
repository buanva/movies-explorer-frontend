import { useState } from "react";
import Register from "../Register/Register";

import texts from '../../utils/regLogTexts';
import { useFormWithValidation } from "../FormValidation/FormValidation";
import { patterns } from "../../utils/constants";

const {
    regTitle,
    regSaveBtn,
    regCap,
    regCapLink
} = texts;

function RegisterChild({ onRegister }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation()
    const [errorMessage, setErrorMessage] = useState("")

    function inputValueChange(evt) {
        handleChange(evt)
        setErrorMessage("")
    }

    function error(err) {
        console.error('RegisterChild error:', err && err.message, err)
        if (err && err.message) {
            setErrorMessage(err.message)
        }
    }

    function handleSubmit() {
        if (isValid) {
            onRegister(values, error)
        }
    }

    return (
        <Register submitBtnText={regSaveBtn} captionText={regCap} linkText={regCapLink} redirectTo="signin" errorText={errorMessage} isValid={isValid} onSubmit={handleSubmit}>
            <h2 className="register__title">{regTitle}</h2>
            <h3 className="register__input-title">Имя</h3>
            <input
                className="register__input"
                type="text"
                name="name"
                minLength="2"
                maxLength="256"
                autoComplete="off"
                required
                pattern={patterns.name}
                onChange={inputValueChange}
            />
            <span className="register__item-error">{errors.name}</span>
            <h3 className="register__input-title">E-mail</h3>
            <input
                className="register__input"
                type="text"
                name="email"
                minLength="2"
                maxLength="256"
                required
                autoComplete="off"
                pattern={patterns.email}
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
            <span className="register__item-error register__item-error_margin">{errors.password}</span>
        </Register>
    )
}

export default RegisterChild;
