import "./SearchForm.css";
import lupa from "../../../images/find__icon.svg";
import { useState, useEffect } from "react";

function SearchForm(props) {
  const [keywords, setKeywords] = useState();
  const [isSearchText, setIsSearchText] = useState(true);
  const [rangeValue, setRangeValue] = useState("0");

  function changeValue(e) {
    setKeywords(e.target.value);
    if (!setKeywords) {
      setIsSearchText(false);
      return;
    } else {
      setIsSearchText(true);
    }
  }

  const shortFilms = (e) => {
    setRangeValue(e.target.value);
    console.log(rangeValue);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!keywords) {
      setIsSearchText(false);
    } else {
      setIsSearchText(true);
      props.findFilms(rangeValue, keywords);
    }
  }

  useEffect(() => {
    props.findFilms(rangeValue, keywords);
  }, [rangeValue]);

  return (
    <section className="SearchForm">
      <form className="SearchForm__form">
        {!isSearchText ? (
          <input
            className="SearchForm__input"
            placeholder="Нужно ввести ключевое слово"
            value={keywords}
            onChange={changeValue}
            style={{ border: " 1px solid red" }}
            required
          />
        ) : (
          <input
            className="SearchForm__input"
            minLength="1"
            maxLength="30"
            type="text"
            placeholder="Фильм"
            value={keywords}
            onChange={changeValue}
            required
          />
        )}

        {!isSearchText ? (
          <button className="SearchForm__button" disabled>
            <img className="SearchForm__button-lupa" src={lupa} alt="@" />
          </button>
        ) : (
          <button
            className="SearchForm__button"
            type="submit"
            onClick={handleSubmit}
          >
            <img className="SearchForm__button-lupa" src={lupa} alt="@" />
          </button>
        )}

        <fieldset className="SearchForm__short-range">
          <input
            className="SearchForm__range"
            type="range"
            value={rangeValue}
            min="0"
            max="1"
            step="1"
            // defaultValue={rangeValue}
            id="short-films"
            onChange={shortFilms}
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
