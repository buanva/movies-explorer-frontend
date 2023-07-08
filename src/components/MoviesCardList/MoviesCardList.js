import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { urlConstants } from '../../utils/constants';

function MoviesCardList({ displayMoreBtn, movies, isSavedMovies, checkIsSavedId, onClickMoreBtn, onSaveMovie, onDeleteMovie }) {
    function prepareSavedMovies() {
        return movies.map((data) => ({
            id: data._id,
            movieId: data.movieId,
            nameEN: data.nameEN,
            nameRU: data.nameRU,
            duration: data.duration,
            image: data.image,
            altText: data.nameEN,
            trailerLink: data.trailerLink,
            year: data.year,
            director: data.director,
            description: data.description,
            country: data.country
        }))
    }

    function prepareMovies() {
        return movies.map((data) => {
            const imageUrlBaseUrl = urlConstants.moviesApiBaseUrl
            const imageUrl = `${imageUrlBaseUrl}${data.image.url.startsWith("/") ? data.image.url.slice(1) : data.image.url}`
            const thumbnail = `${imageUrlBaseUrl}${data.image.formats?.thumbnail?.url}`
            return {
                movieId: data.id,
                nameEN: data.nameEN,
                nameRU: data.nameRU,
                duration: data.duration,
                image: imageUrl,
                thumbnail,
                altText: "",
                trailerLink: data.trailerLink,
                year: data.year,
                director: data.director,
                description: data.description,
                country: data.country
            }
        })
    }

    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__grid">
                {!movies.length ? false :
                    (
                        isSavedMovies ? prepareSavedMovies().map((data) => {
                            return <MoviesCard
                                key={data.movieId}
                                nameEN={data.nameEN}
                                nameRU={data.nameRU}
                                duration={data.duration}
                                imageUrl={data.image}
                                altText={data.altText}
                                trailerLink={data.trailerLink}
                                savedMovieCard={true}
                                onDeleteBtnClick={(callback) => onDeleteMovie(data.id, callback)}
                            />
                        }) : prepareMovies().map(({ thumbnail, description, year, director, country, movieId, nameEN, nameRU, duration, image, trailerLink, altText }) => {
                            const dataForSaveCard = { thumbnail, description, year, director, country, movieId, nameEN, nameRU, duration, image, trailerLink }
                            return <MoviesCard
                                key={movieId}
                                nameEN={nameEN}
                                nameRU={nameRU}
                                duration={duration}
                                imageUrl={image}
                                altText={altText}
                                trailerLink={trailerLink}
                                alreadySaved={checkIsSavedId(movieId)}
                                onSaveBtnClick={(callback) => onSaveMovie(dataForSaveCard, callback)}
                                onDeleteBtnClick={(callback) => onDeleteMovie(movieId, callback)}
                            />
                        }))
                }
            </ul>
            {displayMoreBtn ? <div className="more">
                <button className="more__button" onClick={onClickMoreBtn}>Ещё</button>
            </div> : false}
        </section>
    )
}

export default MoviesCardList;
