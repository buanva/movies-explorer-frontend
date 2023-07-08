import { useEffect, useState } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesHeader from "../MoviesHeader/MoviesHeader";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

import texts from "../../utils/texts";

function MoviesBase({
    movies,
    lastQuery,
    switcherCurrentValue,
    isSavedMovies,
    displayMoreBtn,
    onSearchMovies,
    onSaveMovie,
    onDeleteMovie,
    onQueryChange,
    onSwitcherChange,
    onShowMoreMovies,
    checkIsSavedId = () => { }
}) {
    const [openMenu, setOpenMenu] = useState(false)
    const [searchRequestError, setSearchRequestError] = useState(false)
    const [nothingFound, setNothingFound] = useState(false)
    const [searchInProgress, setSearchInProgress] = useState(false)

    let firstPartOfCardsCount = 0
    let cardsCountInRow = 0

    function setCardsDisplaySettings() {
        if (window.innerWidth >= 1280) {
            firstPartOfCardsCount = 12
            cardsCountInRow = 3
        } else if (window.innerWidth >= 768) {
            firstPartOfCardsCount = 8
            cardsCountInRow = 2
        } else {
            firstPartOfCardsCount = 5
            cardsCountInRow = 2
        }
    }

    setCardsDisplaySettings()

    let resizeListenerId = null
    function windowResizeHandler() {
        clearTimeout(resizeListenerId)
        resizeListenerId = setTimeout(setCardsDisplaySettings, 1000)
    }
    useEffect(() => {
        window.addEventListener("resize", windowResizeHandler)

        return () => window.removeEventListener("resize", windowResizeHandler)
    })

    function showMoreMovies() {
        onShowMoreMovies(cardsCountInRow)
    }

    function onFormSubmit(query, switchBtnValue) {
        setSearchRequestError(false)
        setNothingFound(false)
        setSearchInProgress(true)
        onSearchMovies(query, switchBtnValue, isSavedMovies ? 0 : firstPartOfCardsCount, (success) => {
            setSearchInProgress(false)
            if (!success) {
                setNothingFound(true)
            }
        }, (err) => {
            console.error(err.message, err)
            setSearchInProgress(false)
            setSearchRequestError(true)
        })
    }

    return (
        <>
            <MoviesHeader
                onOpenMenu={() => setOpenMenu(true)}
            />
            <SearchForm
                onFormSubmit={onFormSubmit}
                lastQuery={lastQuery}
                switcherValue={switcherCurrentValue}
                onSwitcherChange={onSwitcherChange}
                onInput={onQueryChange}
            />
            {searchInProgress ? <Preloader /> : false}
            {nothingFound ? texts.nothingFound : false}
            {searchRequestError ? texts.searchRequestError : false}
            <MoviesCardList
                displayMoreBtn={displayMoreBtn}
                movies={movies}
                isSavedMovies={isSavedMovies}
                onClickMoreBtn={showMoreMovies}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
                checkIsSavedId={checkIsSavedId}
            />
            <Footer />
            <Navigation
                isMenuOpened={openMenu}
                onCloseMenu={() => setOpenMenu(false)}
            />
        </>
    )
}

export default MoviesBase;
