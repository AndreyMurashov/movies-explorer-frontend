import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { filmsList } from "../../../utils/tempDB/films";

function MoviesCardList(props) {
  return (
    <section className="MoviesCardList">
      {filmsList.map((card) => {
        return <MoviesCard key={card._id} card={card} />;
      })}
    </section>
  );
}

export default MoviesCardList;
