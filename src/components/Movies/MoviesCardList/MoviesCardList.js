import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  // console.log(props);
  return (
    <section>
      <ul className="MoviesCardList">
        {props.cards.map((card) => {
          return <li><MoviesCard key={card.id} card={card} /></li>;
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
