import "./MoviesCard.css";
import remove from "../../../images/icon-remove.svg";

function MoviesCard(props) {
  const chas = Math.floor(props.card.duration / 60);
  const min = props.card.duration % 60;

  return (
    <section className="MoviesCard">
      <a href={props.card.trailerLink}  target="_blank" rel="noreferrer">
          <img
          className="MoviesCard__image"
          src={`${props.card.thumbnail}`}
          alt="movies cadr"
        />
        <div className="MoviesCard__capture">
          <p className="MoviesCard__title">{props.card.nameRU}</p>
          <button type="button" className="MoviesCard__remove">
            <img className="MoviesCard__remove-icon" src={remove} alt="remove" />
          </button>
        </div>
        <span className="MoviesCard__duration">{`${chas} ч ${min} м`}</span>
      </a>
      
    </section>
  );
}

export default MoviesCard;
