import "./SearchForm.css";
import lupa from "../../../images/find__icon.svg";

function SearchForm() {
  return (
    <section className="SearchForm">
      <form className="SearchForm__form">
        <input
          className="SearchForm__input"
          type="text"
          placeholder="Фильм"
          required
        />
        <button className="SearchForm__button" type="submit">
          <img className="SearchForm__button-lupa" src={lupa} alt="@" />
        </button>
        <fieldset className="SearchForm__short-range">
          <input
            className="SearchForm__range"
            type="range"
            min="0"
            max="1"
            step="1"
            id="short-films"
          />
          <label className="SearchForm__label" htmlFor="short-films">
            Короткометражки
          </label>
        </fieldset>
      </form>
      <div className="SearchForm__line"></div>
    </section>
  );
}

export default SearchForm;
