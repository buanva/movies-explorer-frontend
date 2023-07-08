import SwitchButton from "../SwitchButton/SwitchButton";
import './SearchForm.css';
import texts from "../../utils/texts";
import { useEffect, useRef, useState } from "react";

function SearchForm({ onFormSubmit, lastQuery, switcherValue, onInput, onSwitcherChange }) {
    const [switchBtnValue, setSwitchBtnValue] = useState(false)
    const [inputErrorActive, setInputErrorActive] = useState(false)

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.value = lastQuery
    }, [lastQuery])

    function onInputValueChange() {
        setInputErrorActive(false)
        onInput(inputRef.current.value)
    }

    function onSwitchBtnChange(value) {
        setInputErrorActive(false)
        setSwitchBtnValue(value)
        onSwitcherChange(value)
    }

    function onSubmit(evt) {
        evt.preventDefault()
        if (!inputRef.current.value) {
            setInputErrorActive(true)
        } else {
            onFormSubmit(inputRef.current.value, switchBtnValue)
        }
    }

    return (
        <section className="search-form">
            <div className="search-form__wrapper">
                <form className="search-form__container" noValidate onSubmit={onSubmit}>
                    <div className="search-form__item">
                        <div className="search-form__search-icon"></div>
                        <input
                            ref={inputRef}
                            className={`search-form__search-string ${inputErrorActive ? "search-form__search-string_error-active" : ""}`}
                            placeholder={inputErrorActive ? texts.searchMoviesInputIsEmptyMessage : "Фильм"}
                            onInput={onInputValueChange}
                            required
                            type="text"
                        />
                        <button className="search-form__search-button" />
                    </div>
                    <SwitchButton text="Короткометражки" value={switcherValue} onChange={onSwitchBtnChange} />
                </form>
                <SwitchButton text="Короткометражки" mobileMode={true} value={switcherValue} onChange={onSwitchBtnChange} />
            </div>
        </section>
    )
}

export default SearchForm;
