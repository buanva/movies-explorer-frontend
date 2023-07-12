import { useState, useEffect } from "react";

import MoviesBase from "../MoviesBase/MoviesBase";

import { mainApi } from "../../utils/MainApi";
import { localStorageKeys } from "../../utils/constants";
import { filterMovies } from "../../utils/helpers";

function Movies({ getMovies, onSaveMovie, onDeleteMovie }) {
    const [allMovies, setAllMovies] = useState([])
    const [displayedMovies, setDisplayedMovies] = useState([])
    const [searchedMovies, setSearchedMovies] = useState([])
    const [lastQuery, setLastQuery] = useState("")
    const [switcherCurrentValue, setSwitcherCurrentValue] = useState(false)
    const [numberOfFirstMovies, setNumberOfFirstMovies] = useState(0)

    const localStorageMoviesKey = localStorageKeys.moviesKey
    const localStorageSavedFilmIdsKey = localStorageKeys.savedFilmsIds

    function fetchMovies(callback, error) {
        if (JSON.parse(localStorage.getItem(localStorageKeys.savedFilmsRequested))) {
            getMovies(callback, error)
            return
        }
        mainApi.getAllMovies()
            .then((movies = []) => {
                movies.forEach((movie) => {
                    if (!isIdAlreadySaved(movie.movieId)) {
                        putIdInfoToLocalStorage({ [movie.movieId]: movie._id })
                    }
                })
                return
            })
            .then(() => {
                getMovies(callback, error)
            })
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(localStorageMoviesKey))
        if (data) {
            const { lastQuery, switcherCurrentValue, displayedMovies, searchedMovies, numberOfFirstMovies } = data
            setLastQuery(lastQuery)
            setSwitcherCurrentValue(switcherCurrentValue)
            setDisplayedMovies(lastQuery || switcherCurrentValue ? displayedMovies : [])
            setSearchedMovies(lastQuery || switcherCurrentValue ? searchedMovies : [])
            setNumberOfFirstMovies(numberOfFirstMovies)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(localStorageMoviesKey, JSON.stringify({
            searchedMovies,
            displayedMovies,
            lastQuery,
            switcherCurrentValue,
            numberOfFirstMovies
        }))
    }, [searchedMovies, displayedMovies, lastQuery, switcherCurrentValue, numberOfFirstMovies])

    function putIdInfoToLocalStorage(obj) {
        const saved = JSON.parse(localStorage.getItem(localStorageSavedFilmIdsKey)) || []
        saved.push(obj)
        localStorage.setItem(localStorageSavedFilmIdsKey, JSON.stringify(saved))
    }

    function saveMovie(data) {
        if (!isIdAlreadySaved(data.movieId)) {
            onSaveMovie(data, (createdCard) => {
                putIdInfoToLocalStorage({ [data.movieId]: createdCard._id })
                setDisplayedMovies((movies) => movies.slice())
            })
        }
    }

    function deleteMovie(id) {
        const saved = JSON.parse(localStorage.getItem(localStorageSavedFilmIdsKey)) || []
        const [firstFoundData] = saved.filter((storageData) => storageData[id])
        if (firstFoundData) {
            onDeleteMovie(firstFoundData[id], (res) => {
                localStorage.setItem(localStorageSavedFilmIdsKey, JSON.stringify(saved.filter((dataStorage) => !dataStorage[res.movieId])))
                setDisplayedMovies((movies) => movies.slice())
            })
        }
    }

    function isIdAlreadySaved(id) {
        const saved = JSON.parse(localStorage.getItem(localStorageSavedFilmIdsKey)) || []
        return saved.some((dataStorage) => dataStorage[id])
    }

    function prepareMovies(movies, query, isShortFilms, moviesCount) {
        const filtered = filterMovies(movies, query, isShortFilms)
        const spliced = filtered.splice(0, !moviesCount ? filtered.length : moviesCount)
        return {
            success: spliced.length,
            toDisplay: spliced,
            toSave: filtered
        }
    }

    function prepareAndSetMovies(movies, query, isShortFilms, moviesCount) {
        const { success, toDisplay, toSave } = prepareMovies(movies, query, isShortFilms, moviesCount)
        setDisplayedMovies(toDisplay)
        setSearchedMovies(toSave)
        return success
    }

    function searchRequestedMovies(query, isShortFilms, moviesCount, callback = () => {}, error = (err) => console.error("searchRequestedMovies", err && err.message, err)) {
        setNumberOfFirstMovies(moviesCount)
        setLastQuery(query)
        setSwitcherCurrentValue(isShortFilms)
        if (!allMovies.length) {
            fetchMovies((movies) => {
                setAllMovies(movies)
                const res = prepareAndSetMovies(movies, query, isShortFilms, moviesCount)
                callback(res)
            }, error)
            return
        }
        const res = prepareAndSetMovies(allMovies, query, isShortFilms, moviesCount)
        callback(res)
    }

    function showMoreItems(cardsCount) {
        setSearchedMovies(currentSearchedMovies => {
            const { toDisplay, toSave } = prepareMovies(currentSearchedMovies, lastQuery, switcherCurrentValue, cardsCount)
            setDisplayedMovies((prev) => {
                return prev.concat(toDisplay)
            })
            return toSave
        })
    }

    return (
        <MoviesBase
            movies={displayedMovies}
            lastQuery={lastQuery}
            switcherCurrentValue={switcherCurrentValue}
            displayMoreBtn={searchedMovies.length > 0}
            onSearchMovies={searchRequestedMovies}
            onShowMoreMovies={showMoreItems}
            isSavedMovies={false}
            checkIsSavedId={isIdAlreadySaved}
            onSaveMovie={saveMovie}
            onDeleteMovie={deleteMovie}
        />
    )
}

export default Movies;
