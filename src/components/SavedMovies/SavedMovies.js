import React, { Suspense, lazy } from "react";
import "./SavedMovies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Movies/Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const MoviesCardList = lazy(() => import("./MoviesCardList/MoviesCardList"));

function SavedMovies(props) {
  return (
    <>
      <Header
        background="#202020"
        loggedIn={props.loggedIn}
        isOpen={props.openPopupMenu}
      />
      <main className="SavedMovies">
        <SearchForm />
        <Suspense fallback={<Preloader />}>
          <MoviesCardList />
        </Suspense>
        <div className="SavedMovies__empty-place"></div>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
