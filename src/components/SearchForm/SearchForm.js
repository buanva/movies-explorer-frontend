import searchButton from "../../images/search-button_movie-explorer.png"
import SwitchButton from "../SwitchButton/SwitchButton";
import './SearchForm.css';

function SearchForm(props) {
    return (
        <section className="search-form">
            <div className="search-form__wrapper">
                <form className="search-form__container">
                    <div className="search-form__item">
                        <div className="search-form__search-icon"></div>
                        <input className="search-form__search-string" type="text" placeholder="Фильм" />
                        <img className="search-form__search-button" alt="Здесь иконка поиска"
                            src={searchButton} />
                    </div>
                    <SwitchButton text="Короткометражки" />
                </form>
                <SwitchButton text="Короткометражки" mobileMode={true} />
            </div>
        </section>
    )
}

export default SearchForm;
