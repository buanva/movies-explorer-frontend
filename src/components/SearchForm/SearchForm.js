import SwitchButton from "../SwitchButton/SwitchButton";
import './SearchForm.css';
import texts from "../../utils/texts";
import { useEffect, useRef, useState } from "react";

function SearchForm({ onFormSubmit, lastQuery, switcherValue, formDisabled, onSwitcherChange }) {
    const [switchBtnValue, setSwitchBtnValue] = useState(false)
    const [inputErrorActive, setInputErrorActive] = useState(false)

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.value = lastQuery
    }, [lastQuery])

    function onInputValueChange() {
        setInputErrorActive(false)
    }

    function onSwitchBtnChange(value) {
        if (formDisabled) {
            return
        }
        setInputErrorActive(false)
        setSwitchBtnValue(value)
        onSwitcherChange(value)
    }

    function onSubmit(evt) {
        evt.preventDefault()
        if (formDisabled) {
            return
        }
        if (!inputRef.current.value) {
            setInputErrorActive(true)
        } else {
            onFormSubmit(inputRef.current.value, switchBtnValue)
        }
    }

    return (
        <section className="search-form">
            <div className="search-form__wrapper">
                <form className={`search-form__container` + (formDisabled ? " search-form__container_disabled" : "")} noValidate onSubmit={onSubmit}>
                    <div className="search-form__item">
                        <div className="search-form__search-icon"></div>
                        <input
                            ref={inputRef}
                            className={`search-form__search-string ${inputErrorActive ? "search-form__search-string_error-active" : ""}`}
                            disabled={formDisabled}
                            placeholder={inputErrorActive ? texts.searchMoviesInputIsEmptyMessage : "Фильм"}
                            onInput={onInputValueChange}
                            required
                            type="text"
                        />
                        <button className="search-form__search-button" disabled={formDisabled} />
                    </div>
                    <SwitchButton text="Короткометражки" value={switcherValue} onChange={onSwitchBtnChange} />
                </form>
                <SwitchButton text="Короткометражки" mobileMode={true} value={switcherValue} onChange={onSwitchBtnChange} />
            </div>
        </section>
    )
}

export default SearchForm;
