import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesHeader from "../MoviesHeader/MoviesHeader";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

function Movies(props) {
    const { movies } = props
    const [openMenu, setOpenMenu] = useState()
    return (
        <>
            <MoviesHeader onOpenMenu={() => setOpenMenu(true)} />
            <SearchForm />
            {!movies.length ?
                <Preloader /> :
                <MoviesCardList>
                    {movies.length && movies.map((_, i) => <MoviesCard key={i} />)}
                </MoviesCardList>
            }
            <Footer />
            <Navigation isMenuOpened={openMenu} onCloseMenu={() => setOpenMenu(false)} />
        </>
    )
}

export default Movies;
