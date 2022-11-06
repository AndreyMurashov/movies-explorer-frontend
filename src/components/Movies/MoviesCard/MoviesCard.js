import "./MoviesCard.css";
import like from "../../../images/icon__unliked.svg";

function MoviesCard(props) {
  const chas = Math.floor(props.card.duration / 60);
  const min = props.card.duration % 60;

  return (
    <section className="MoviesCard">
      <img
        className="MoviesCard__image"
        src={`${props.card.thumbnail}`}
        alt="movies cadr"
      />
      <div className="MoviesCard__capture">
        <p className="MoviesCard__title">{props.card.nameRU}</p>
        <button type="button" className="MoviesCard__like">
          <img className="MoviesCard__like-icon" src={like} alt="like" />
        </button>
      </div>
      <span className="MoviesCard__duration">{`${chas} ч ${min} м`}</span>
    </section>
  );
}

export default MoviesCard;
