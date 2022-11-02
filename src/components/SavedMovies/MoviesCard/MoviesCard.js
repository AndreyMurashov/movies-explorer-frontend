import "./MoviesCard.css";
import remove from "../../../images/icon-remove.svg";

function MoviesCard(props) {
  const chas = Math.floor(props.card.duration / 60);
  const min = props.card.duration % 60;

  return (
    <div className="MoviesCard">
      <img
        className="MoviesCard__image"
        src={`${props.card.thumbnail}`}
        alt="#"
      />
      <div className="MoviesCard__capture">
        <p className="MoviesCard__title">{props.card.nameRU}</p>
        <button className="MoviesCard__remove">
          <img className="MoviesCard__remove-icon" src={remove} alt="" />
        </button>
      </div>
      <span className="MoviesCard__duration">{`${chas} ч ${min} м`}</span>
    </div>
  );
}

export default MoviesCard;
