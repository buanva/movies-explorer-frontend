import { useEffect, useState } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesHeader from "../MoviesHeader/MoviesHeader";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

import texts from "../../utils/texts";
import { cardsDisplayCount, displaySizes } from "../../utils/constants";

function MoviesBase({
    movies,
    lastQuery,
    switcherCurrentValue,
    isSavedMovies,
    displayMoreBtn,
    onSearchMovies,
    onSaveMovie,
    onDeleteMovie,
    onShowMoreMovies,
    checkIsSavedId = () => { }
}) {
    const [openMenu, setOpenMenu] = useState(false)
    const [searchRequestError, setSearchRequestError] = useState(false)
    const [nothingFound, setNothingFound] = useState(false)
    const [searchInProgress, setSearchInProgress] = useState(false)

    let firstPartOfCardsCount = 0
    let cardsCountInRow = 0

    function setcardsDisplayCount() {
        if (window.innerWidth >= displaySizes.Desktop) {
            firstPartOfCardsCount = cardsDisplayCount.Desktop.firstPart
            cardsCountInRow = cardsDisplayCount.Desktop.inRow
        } else if (window.innerWidth >= displaySizes.MobileSizeM) {
            firstPartOfCardsCount = cardsDisplayCount.MobileSizeM.firstPart
            cardsCountInRow = cardsDisplayCount.MobileSizeM.inRow
        } else {
            firstPartOfCardsCount = cardsDisplayCount.MobileSizeS.firstPart
            cardsCountInRow = cardsDisplayCount.MobileSizeS.inRow
        }
    }

    setcardsDisplayCount()

    let resizeListenerId = null
    function windowResizeHandler() {
        clearTimeout(resizeListenerId)
        resizeListenerId = setTimeout(setcardsDisplayCount, 1000)
    }
    useEffect(() => {
        window.addEventListener("resize", windowResizeHandler)

        return () => window.removeEventListener("resize", windowResizeHandler)
    })

    useEffect(() => {
        if (nothingFound && movies.length) {
            setNothingFound(false)
        }
    }, [nothingFound, movies])

    function showMoreMovies() {
        onShowMoreMovies(cardsCountInRow)
    }

    function search(query, switchBtnValue) {
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
                onFormSubmit={search}
                lastQuery={lastQuery}
                formDisabled={searchInProgress}
                switcherValue={switcherCurrentValue}
                onSwitcherChange={(value) => search(lastQuery, value)}
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
