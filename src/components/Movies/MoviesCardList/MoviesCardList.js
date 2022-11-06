import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { filmsList } from "../../../utils/tempDB/films";

function MoviesCardList(props) {
  return (
    <section>
      <ul className="MoviesCardList">
        {filmsList.map((card) => {
          return <li><MoviesCard key={card._id} card={card} /></li>;
        })}
      </ul>
      <div className="MoviesCardList__continue">
        <button type="button" className="MoviesCardList__continue-button">
          Еще
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
