import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="MoviesCardList">
      {props.cards.length > 0
        ? props.cards.map((card) => {
            return (
              <MoviesCard
                key={card._id}
                card={card}
                deleteCard={props.deleteCard}
              />
            );
          })
        : props.messageText && (
            <p className="MoviesCardList__nothing">{props.messageText}</p>
          )}
    </section>
  );
}

export default MoviesCardList;
