import React, { Suspense, lazy, useState } from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const MoviesCardList = lazy(() => import("./MoviesCardList/MoviesCardList"));
let selectFilms;

function Movies(props) {
  const [findFilm, setFindFilm] = useState('');

  const handleFilmGlobal = (e) => {
    setFindFilm(e.target.value);
  }

  
    
  const handleSubmit = (e) => {
    // console.log(e);
    e.preventDefault();
    return selectFilms = (e) => {
          return props.cards.nameRU.filter(el => el.toLowerCase().includes(e.target.value.toLowerCase()) !==-1)
          }
  }

  return (
    
    <>
    <Header
        background="#202020"
        loggedIn={props.loggedIn}
        isOpen={props.openPopupMenu}
      />
      <main className="Movies">
        <SearchForm 
          findFilm = {findFilm}
          handleFilmGlobal = {handleFilmGlobal}
          findFilmGlobal = {handleSubmit}
        />
        <Suspense fallback={<Preloader />}>

        {/* {
          selectFilms
          &&
          <MoviesCardList cards = {selectFilms} />
        } */}


        {/* { selectFilms ? <MoviesCardList 
            cards = {selectFilms}  
          /> 
          : */}
          <MoviesCardList cards = {props.cards} /> 
         {/* { */}

        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
