import { useContext, useEffect, useRef, useState } from "react";

import MoviesHeader from "../MoviesHeader/MoviesHeader";
import Navigation from "../Navigation/Navigation";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../FormValidation/FormValidation";
import { patterns } from "../../utils/constants";

import './Profile.css';

function Profile({ onExit, onProfileDataChange }) {
    const currentUser = useContext(CurrentUserContext);
    const { handleChange, errors, isValid } = useFormWithValidation()
    const [openMenu, setOpenMenu] = useState(false)
    const [showSuccessNotify, setShowSuccessNotify] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const nameInputRef = useRef()
    const emailInputRef = useRef()

    useEffect(() => {
        nameInputRef.current.value = currentUser.name
        emailInputRef.current.value = currentUser.email
    }, [])

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

    function editSuccess() {
        setShowSuccessNotify(true)
        setTimeout(() => { setShowSuccessNotify(false) }, 2000)
    }

    function handleSubmit() {
        const name = nameInputRef.current.value
        const email = emailInputRef.current.value
        const changed = currentUser.name !== name || currentUser.email !== email
        if (isValid && changed) {
            onProfileDataChange({ name, email }, editSuccess, error)
        }
    }

    function onEnterPressed(evt) {
        if (evt.key === "Enter") {
            handleSubmit()
        }
    }

    return (
        <>
            <MoviesHeader onOpenMenu={() => setOpenMenu(true)} />
            <section className="profile">
                <form className="profile__form" noValidate onKeyDown={onEnterPressed}>
                    <h2 className="profile__title">{
                        showSuccessNotify ? "Данные успешно изменены!" : `Привет, ${currentUser.name}!`
                    }</h2>
                    <div className="profile__input-container profile__input-container_border-bottom">
                        <span className="profile__input-caption">Имя</span>
                        <input
                            className="profile__input"
                            ref={nameInputRef}
                            name="name"
                            required
                            autoComplete="off"
                            pattern={patterns.name}
                            onChange={inputValueChange}
                        />
                    </div>
                    <span className="register__item-error">{errors.name}</span>
                    <div className="profile__input-container">
                        <span className="profile__input-caption">E-mail</span>
                        <input
                            className="profile__input"
                            ref={emailInputRef}
                            name="email"
                            required
                            autoComplete="off"
                            pattern={patterns.email}
                            onChange={inputValueChange}
                        />
                    </div>
                    <span className="register__item-error">{errors.email}</span>
                </form>
                <span className="profile__item-error">{errorMessage}</span>
                <button className="profile__edit-button" disabled={!isValid} onClick={handleSubmit}>Редактировать</button>
                <button className="profile__exit-button" onClick={onExit}>Выйти из аккаунта</button>
            </section>
            <Navigation isMenuOpened={openMenu} onCloseMenu={() => setOpenMenu(false)} />
        </>
    )
}

export default Profile;
