import React, { Suspense, lazy } from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const MoviesCardList = lazy(() => import("./MoviesCardList/MoviesCardList"));

function Movies(props) {
  return (
    <>
    <Header
        background="#202020"
        loggedIn={props.loggedIn}
        isOpen={props.openPopupMenu}
      />
      <main className="Movies">
        <SearchForm />
        <Suspense fallback={<Preloader />}>
          <MoviesCardList />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
