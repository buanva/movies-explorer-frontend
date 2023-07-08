import React from 'react';
import './MoviesCard.css';

function MoviesCard({ alreadySaved, nameEN, nameRU, duration, imageUrl, altText, trailerLink, savedMovieCard, onSaveBtnClick, onDeleteBtnClick }) {
    const foreignLang = window.navigator.language !== "ru-RU"
    let baseClassName = "movies-card-list__action-button"
    if (savedMovieCard) {
        baseClassName += " movies-card-list__action-button_type_delete-movie"
    } else {
        baseClassName += " movies-card-list__action-button_type_save-movie"
    }
    const btnActiveClass = " movies-card-list__action-button_active"

    function getDurationString() {
        const hoursMark = foreignLang ? "ч" : "h"
        const minutesMark = foreignLang ? "м" : "m"
        const hoursVal = Math.floor(duration / 60)
        const minutesVal = duration - 60 < 0 ? duration : duration - 60
        const lessThanHour = hoursVal === 0
        return lessThanHour ? `${minutesVal}${minutesMark}` : `${hoursVal}${hoursMark} ${minutesVal}${minutesMark}`
    }

    return (
        <li className="movies-card-list__card">
            <div className="movies-card-list__container">
                <h2 className="movies-card-list__title">{foreignLang ? nameEN : nameRU}</h2>
                <button className={baseClassName + (alreadySaved ? btnActiveClass : "")} onClick={() => {
                    if (savedMovieCard || alreadySaved) {
                        onDeleteBtnClick()
                    } else {
                        onSaveBtnClick()
                    }
                }}></button>
                <p className="movies-card-list__duration">{getDurationString()}</p>
            </div>
            <a className="movies-card-list__trailer-link" href={trailerLink} target='_blank' rel='noreferrer'>
                <img className="movies-card-list__image" src={imageUrl} alt={altText} />
            </a>
        </li>
    )
}

export default MoviesCard;
