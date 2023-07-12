import { useEffect, useState } from "react"
import MoviesBase from "../MoviesBase/MoviesBase"

import { localStorageKeys } from "../../utils/constants"
import { filterMovies } from "../../utils/helpers"

function SavedMovies({ getMovies, onDeleteMovie }) {
    const [allMovies, setAllMovies] = useState([])
    const [displayedMovies, setDisplayedMovies] = useState([])
    const [lastQuery, setLastQuery] = useState("")
    const [switcherCurrentValue, setSwitcherCurrentValue] = useState(false)

    const localStorageSavedFilmIdsKey = localStorageKeys.savedFilmsIds

    useEffect(() => {
        getMovies((movies) => {
            setAllMovies(movies)
            setDisplayedMovies(movies)
            localStorage.setItem(localStorageKeys.savedFilmsRequested, true)
        }, (err) => console.error(err && err.message, err))
    }, [])

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
        setLastQuery(query)
        setSwitcherCurrentValue(isShortFilms)
        callback(prepareAndSetMovies(allMovies, query, isShortFilms, moviesCount))
    }

    return (
        <MoviesBase
            movies={displayedMovies}
            lastQuery={lastQuery}
            switcherCurrentValue={switcherCurrentValue}
            onSearchMovies={searchRequestedMovies}
            onQueryChange={setLastQuery}
            isSavedMovies={true}
            onDeleteMovie={deleteMovie}
        />
    )
}

export default SavedMovies;
