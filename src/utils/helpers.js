const SHORT_FILM_DURATION_MINUTES = 40

export const filterMovies = (movies, query, isShortFilms) => {
    return movies.filter((movie) => {
        const movieTitles = `${movie.nameRU.toLowerCase()} ${movie.nameEN.toLowerCase()}`
        const isShortFilm = movie.duration <= SHORT_FILM_DURATION_MINUTES
        return movieTitles.indexOf(query && query.toLowerCase()) >= 0 && (!isShortFilms || isShortFilm)
    })
}

export const errorToJson = (callback) => {
    return (err) => {
        try {
            err.json().then((errObj) => callback(errObj, err))
        } catch {
            callback(err)
        }
    }
}
