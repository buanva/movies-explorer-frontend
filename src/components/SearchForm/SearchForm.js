import SwitchButton from "../SwitchButton/SwitchButton";
import './SearchForm.css';

function SearchForm(props) {
    function onSubmit(evt) {
        evt.preventDefault()
    }

    return (
        <section className="search-form">
            <div className="search-form__wrapper">
                <form className="search-form__container" onSubmit={onSubmit}>
                    <div className="search-form__item">
                        <div className="search-form__search-icon"></div>
                        <input className="search-form__search-string" type="text" placeholder="Фильм" required />
                        <button className="search-form__search-button" />
                    </div>
                    <SwitchButton text="Короткометражки" />
                </form>
                <SwitchButton text="Короткометражки" mobileMode={true} />
            </div>
        </section>
    )
}

export default SearchForm;
