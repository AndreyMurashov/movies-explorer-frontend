import React, { useContext, Suspense, lazy, useState, useEffect } from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import CurrentUserContext from "../../context/CurrentUserContext";
const MoviesCardList = lazy(() => import("./MoviesCardList/MoviesCardList"));
let keywords;
let isFindingFilms = [];

function Movies(props) {
  const currentUser = useContext(CurrentUserContext);
  const [shortSwitcher, setShortSwitcher] = useState();
  const [rangeValue, setRangeValue] = useState("0");
  const [savedFilms, setSavedFilms] = useState([]);
  const [movies, setMovies] = useState([]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [moreCards, setMoreCards] = useState(0);
  const [messageText, setMessageText] = useState("");

  // Получение глобального списка фильмов, списка короткометражек и сохранение списка, ключевых слов и состояния переключателя в хранилище
  function searchMovie(inputText, shortSwitcher, rangeValue) {
    moviesApi
      .getMoviesInfo()
      .then((movies) => {
        const searchedMovies = movies.filter((item) =>
          item.nameRU.toLowerCase().includes(inputText.toLowerCase())
        );
        const foundMovies = shortSwitcher
          ? searchedMovies.filter((item) => item.duration <= 40)
          : searchedMovies;
        if (foundMovies.length < 1) {
          setMessageText("Ничего не найдено");
        }
        localStorage.setItem("foundMovies", JSON.stringify(foundMovies));
        localStorage.setItem("inputText", inputText);
        localStorage.setItem("shortFilms", rangeValue);
        formatingList();
      })
      .catch((err) => {
        // setMessageText(moviesError);
        console.log(`Ошибка ${err}`);
      });
  }

    // Получение нового списка фильмов, отфильтрованного по ключевым словам
  const findFilms = (range, keywords) => {
    setRangeValue(range);

    if (range === "0") {
      setShortSwitcher(false);
    } else if (range === "1") {
      setShortSwitcher(true);
    }
    searchMovie(keywords, shortSwitcher, rangeValue);
  };

  // Показ карточек в зависимости от разрешения экрана
 useEffect(() => {
    window.addEventListener("resize", getWindowSize);
    formatingList();
  }, [windowSize]);

  function formatingList() {
    const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));
    if (foundMovies === null) {
      return;
    }
    if (windowSize >= 1280) {
      setMovies(foundMovies.slice(0, 12));
      setMoreCards(3);
    } else if (windowSize > 767 && windowSize < 1280) {
      setMovies(foundMovies.slice(0, 8));
      setMoreCards(2);
    } else if (windowSize <= 767) {
      setMovies(foundMovies.slice(0, 5));
      setMoreCards(2);
    }
  }

   function getWindowSize() {
    setWindowSize(window.innerWidth);
  }

  // Обработка кнопки Еще
  function addFilms() {
    const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));
    setMovies(foundMovies.slice(0, movies.length + moreCards));
  }

  // Получение списка лайкнутых фильмов
  useEffect(() => {
    mainApi
      .getMoviesLocal()
      .then((savedFilms) => {
        setSavedFilms(savedFilms);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }, []);

  function isSaved(card) {
    return savedFilms.some(
      (item) => item.movieId === card.id && item.owner === currentUser._id
    );
  }

  // Сохранение лайкнутых фильмов
  const likeFilm = (film) => {
    mainApi
      .addLikedMovies(film)
      .then((movieInfo) => {
        setSavedFilms([...savedFilms, movieInfo]);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  };

  // Удаление фильма из избранного
  const deleteCard = (card) => {
    const removingCard = savedFilms.find(
      (item) => item.movieId === card.id && item.owner === currentUser._id
    );
    if (!removingCard) return;
    mainApi
      .deleteLikedMovies(removingCard._id)
      .then(() => {
        setSavedFilms(savedFilms.filter((c) => c._id !== removingCard._id));
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }; 

  return (
    <>
      <Header
        background="#202020"
        loggedIn={props.loggedIn}
        isOpen={props.openPopupMenu}
      />
      <main className="Movies">
        <SearchForm
          keywords={keywords}
          findFilms={findFilms}
          isFindingFilms={isFindingFilms}
        />
        <Suspense fallback={<Preloader />}>
          <MoviesCardList
            cards={movies}
            isSaved={isSaved}
            likeFilm={likeFilm}
            addFilms={addFilms}
            deleteCard={deleteCard}
            messageText={messageText}
          />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
