import './MoviesCard.css';

function MoviesCard(props) {
    return (
        <li className="movies-card-list__card">
            <div className="movies-card-list__container">
                <h2 className="movies-card-list__title">33 слова о дизайне</h2>
                <button className="movies-card-list__save-button"></button>
                <p className="movies-card-list__duration">1ч 47м</p>
            </div>
            <div className="movies-card-list__image"></div>
        </li>
    )
}

export default MoviesCard;
