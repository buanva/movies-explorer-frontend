import { useState } from "react";
import './Profile.css';
import MoviesHeader from "../MoviesHeader/MoviesHeader";
import Navigation from "../Navigation/Navigation";

function Profile(props) {
    const [openMenu, setOpenMenu] = useState()
    return (
        <>
            <MoviesHeader onOpenMenu={() => setOpenMenu(true)} />
            <section className="profile">
                <form className="profile__form">
                    <h2 className="profile__title">Привет, Виталий!</h2>
                    <div className="profile__input-container profile__input-container_border-bottom">
                        <span className="profile__input-caption">Имя</span>
                        <input className="profile__input" required />
                    </div>
                    <div className="profile__input-container">
                        <span className="profile__input-caption">E-mail</span>
                        <input className="profile__input" required />
                    </div>
                </form>
                <button className="profile__edit-button">Редактировать</button>
                <button className="profile__exit-button">Выйти из аккаунта</button>
            </section>
            <Navigation isMenuOpened={openMenu} onCloseMenu={() => setOpenMenu(false)} />
        </>
    )
}

export default Profile;
