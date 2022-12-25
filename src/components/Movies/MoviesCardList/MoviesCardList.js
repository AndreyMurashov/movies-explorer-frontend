import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const foundMovies = JSON.parse(localStorage.getItem("foundMovies")) || "";

  return (
    <section>
      <div className="MoviesCardList">
        {props.cards.length > 0
          ? props.cards.map((card) => {
              return (
                <MoviesCard
                  key={card.id}
                  card={card}
                  isSaved={props.isSaved}
                  likeFilm={props.likeFilm}
                  deleteCard={props.deleteCard}
                />
              );
            })
          : props.messageText && (
              <p className="MoviesCardList__nothing">{props.messageText}</p>
            )}
      </div>

      <div className="MoviesCardList__continue">
        {props.cards.length < foundMovies.length ? (
          <button
            type="button"
            className="MoviesCardList__continue-button"
            onClick={props.addFilms}
          >
            Еще
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
