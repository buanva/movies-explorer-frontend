import { useEffect, useState } from "react"
import MoviesBase from "../MoviesBase/MoviesBase"

import { mainApi } from "../../utils/MainApi"
import { localStorageKeys } from "../../utils/constants"
import { filterMovies } from "../../utils/helpers"

function SavedMovies({ onDeleteMovie }) {
    const [allMovies, setAllMovies] = useState([])
    const [displayedMovies, setDisplayedMovies] = useState([])
    const [lastQuery, setLastQuery] = useState("")
    const [switcherCurrentValue, setSwitcherCurrentValue] = useState(false)

    const localStorageSavedMoviesKey = localStorageKeys.savedMoviesKey
    const localStorageSavedFilmIdsKey = localStorageKeys.savedFilmsIds

    useEffect(() => {
        mainApi.getAllMovies()
            .then((movies) => {
                setAllMovies(movies)
                setDisplayedMovies(movies)
            })
            .catch((err) => console.error(err && err.message, err))
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(localStorageSavedMoviesKey))
        if (data) {
            const { lastQuery, switcherCurrentValue, displayedMovies } = data
            setLastQuery(lastQuery)
            setSwitcherCurrentValue(switcherCurrentValue)
            setDisplayedMovies(lastQuery || switcherCurrentValue ? displayedMovies : allMovies)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(localStorageSavedMoviesKey, JSON.stringify({
            displayedMovies,
            lastQuery,
            switcherCurrentValue
        }))
    }, [displayedMovies, lastQuery, switcherCurrentValue])

    function deleteMovie(ownId) {
        onDeleteMovie(ownId, (res) => {
            const saved = JSON.parse(localStorage.getItem(localStorageSavedFilmIdsKey)) || []
            localStorage.setItem(localStorageSavedFilmIdsKey, JSON.stringify(saved.filter((dataStorage) => !dataStorage[res.movieId])))
            setDisplayedMovies((prev) => prev.filter((movie) => movie._id !== ownId))
        })
    }

    function getFilteredMovies(movies, query, isShortFilms) {
        return filterMovies(movies, query, isShortFilms)
    }

    function prepareAndSetMovies(movies, query, isShortFilms) {
        const filtered = getFilteredMovies(movies, query, isShortFilms)
        setDisplayedMovies(filtered)
        return filtered.length
    }

    function searchRequestedMovies(query, isShortFilms, moviesCount, callback) {
        callback(prepareAndSetMovies(allMovies, query, isShortFilms, moviesCount))
    }

    function changeSwitcherValue(value) {
        setSwitcherCurrentValue(value)
        if (lastQuery) {
            prepareAndSetMovies(allMovies, lastQuery, value)
        }
    }

    return (
        <MoviesBase
            movies={displayedMovies}
            lastQuery={lastQuery}
            switcherCurrentValue={switcherCurrentValue}
            onSearchMovies={searchRequestedMovies}
            onQueryChange={setLastQuery}
            onSwitcherChange={changeSwitcherValue}
            isSavedMovies={true}
            onDeleteMovie={deleteMovie}
        />
    )
}

export default SavedMovies;
