import "./SearchForm.css";
import lupa from "../../../images/find__icon.svg";
import { useState } from "react";



function SearchForm(props) {
  // const [findFilm, setFindFilm] = useState('');

  // const handleFilmGlobal = (e) => {
  //   setFindFilm(e.target.value);
  // }

  // const findFilmGlobal = () => {

  // }


  return (
    <section className="SearchForm">
      <form className="SearchForm__form" onSubmit={props.handleSubmit}>
        <input
          className="SearchForm__input"
          minLength="2"
          maxLength="30"
          type="text"
          placeholder="Фильм"
          required
          value={props.findFilm}
          onChange={props.handleFilmGlobal}
        />
        <button className="SearchForm__button" type="submit" onClick={props.findFilmGlobal}>
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
