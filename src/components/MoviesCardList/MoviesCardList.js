import './MoviesCardList.css';

function MoviesCardList(props) {
    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__grid">
                {props.children}
            </ul>
            <div className="more">
                <button className="more__button">Ещё</button>
            </div>
        </section>
    )
}

export default MoviesCardList;
