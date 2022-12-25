import "./MoviesCard.css";
import like from "../../../images/icon__unliked.svg";
import liked from "../../../images/liked-icon.svg";

function MoviesCard(props) {
  const chas = Math.floor(props.card.duration / 60);
  const min = props.card.duration % 60;

  const pressLike = () => {
    props.likeFilm(props.card);
  };

  const pressDelete = () => {
    props.deleteCard(props.card);
  };

  return (
    <section className="MoviesCard">
      <a href={props.card.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="MoviesCard__image"
          src={`https://api.nomoreparties.co/${props.card.image.url}`}
          alt={props.card.nameRU}
        />
      </a>
      <div className="MoviesCard__capture">
      
          <p className="MoviesCard__title">{props.card.nameRU}</p>
      

        {props.isSaved(props.card) ? (
          <button type="button" className="MoviesCard__like">
            <img
              className="MoviesCard__like-icon"
              src={liked}
              alt="dislike"
              onClick={pressDelete}
            />
          </button>
        ) : (
          <button type="button" className="MoviesCard__like">
            <img
              className="MoviesCard__like-icon"
              src={like}
              alt="like"
              onClick={pressLike}
            />
          </button>
        )}
      </div>
      <span className="MoviesCard__duration">{`${chas} ч ${min} м`}</span>
    </section>
  );
}

export default MoviesCard;
