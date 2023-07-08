import { useState } from "react";

import AboutProjectHeader from "../AboutProjectHeader/AboutProjectHeader";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import MoviesHeader from "../MoviesHeader/MoviesHeader";
import Navigation from "../Navigation/Navigation";

import './Main.css';

function Main({ isLoggedIn }) {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            {isLoggedIn && <MoviesHeader
                onOpenMenu={() => setOpenMenu(true)}
            />}
            {!isLoggedIn && <AboutProjectHeader />}
            <main className="main">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
            <Navigation
                isMenuOpened={openMenu}
                onCloseMenu={() => setOpenMenu(false)}
            />
        </>
    )
}

export default Main;
