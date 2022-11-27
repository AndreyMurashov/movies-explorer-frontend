import React, { useContext, Suspense, lazy, useState, useEffect } from "react";
import "./SavedMovies.css";
import SearchForm from "../SavedMovies/SearchForm/SearchForm";
import Preloader from "../Movies/Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import mainApi from "../../utils/MainApi";
import CurrentUserContext from "../../context/CurrentUserContext";
import { moviesError } from "../../components/Errors/Errors";
const MoviesCardList = lazy(() => import("./MoviesCardList/MoviesCardList"));
let keywords;
let isFindingFilms = [];

function SavedMovies(props) {
  const currentUser = useContext(CurrentUserContext);
  const [userMovies, setUserMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [messageText, setMessageText] = useState("");
  let shortSwitcher;
 
  const getDefaultSavedFilms = () => {
    mainApi
      .getMoviesLocal()
      .then((moviesData) => {
        const ownerMovies = moviesData.filter(
          (item) => item.owner === currentUser._id
        );
        setUserMovies(ownerMovies);
        setFoundMovies(ownerMovies);
      })
      .catch((err) => {
        setMessageText(moviesError);
        console.log(`Ошибка: ${err}`);
      });
  };

  useEffect(() => {
    getDefaultSavedFilms();
  }, []);

  function searchMovie(inputText = "", shortSwitcher) {
    const searchedMovies = userMovies.filter((item) =>
      item.nameRU.toLowerCase().includes(inputText.toLowerCase())
    );
    const foundMovies = shortSwitcher
      ? searchedMovies.filter((item) => item.duration <= 40)
      : searchedMovies;
    if (foundMovies.length < 1) {
      setFoundMovies([]);
      setMessageText("Ничего не найдено");
    } else {
      setFoundMovies(foundMovies);
    }
  }

  // Получение нового списка фильмов, отфильтрованного по ключевым словам
  const findFilms = (range, keywords) => {
    if (range === "0") {
      shortSwitcher = false;
    } else if (range === "1") {
      shortSwitcher = true;
    }
    searchMovie(keywords, shortSwitcher);
  };

  // Удаление фильма из избранного
  const deleteCard = (card) => {
    const removingCard = userMovies.find(
      (item) =>
        item.movieId === (card.id || card.movieId) &&
        item.owner === currentUser._id
    );
    if (!removingCard) return; 
    mainApi
      .deleteLikedMovies(removingCard._id)
      .then(() => {
        setFoundMovies(userMovies.filter((c) => c._id !== removingCard._id));
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
      <main className="SavedMovies">
        <SearchForm
          keywords={keywords}
          findFilms={findFilms}
          isFindingFilms={isFindingFilms}
        />
        <Suspense fallback={<Preloader />}>
          <MoviesCardList
            cards={foundMovies}
            deleteCard={deleteCard}
            messageText={messageText}
          />
        </Suspense>
        <div className="SavedMovies__empty-place"></div>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
