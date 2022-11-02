import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { filmsList } from "../../../utils/tempDB/films";

function MoviesCardList(props) {
  return (
    <>
      <div className="MoviesCardList">
        {filmsList.map((card) => {
          return <MoviesCard key={card._id} card={card} />;
        })}
      </div>
      <div className="MoviesCardList__continue">
        <button type="button" className="MoviesCardList__continue-button">
          Еще
        </button>
      </div>
    </>
  );
}

export default MoviesCardList;
