import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import CurrentUserContext from "../../context/CurrentUserContext"
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register.js";
import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";
import "./App.css";
import PageNotFound from "../Errors/PageNotFound";
import moviesApi from "../../utils/MoviesApi"

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);
  const [isPopupMenu, setIsPopupMenu] = useState(false);
  const [cards, setCards] = useState([]);
  
useEffect(() => {
  if (loggedIn) {
    Promise.all([moviesApi.getMoviesInfo()])
      .then(([moviesData]) => {
        console.log("точка 1");
        setCards(moviesData);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }
}, [])


  const handleOpenPopupMenu = () => {
    setIsPopupMenu(!isPopupMenu);
  };

  const handleClosePopupMenu = () => {
    setIsPopupMenu(false);
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/movies">
          <Movies 
            loggedIn={loggedIn} 
            openPopupMenu={handleOpenPopupMenu}
            cards = {cards}
            />
        </Route>
        <Route path="/saved-movies">
             <SavedMovies
              loggedIn={loggedIn}
              openPopupMenu={handleOpenPopupMenu}
            />
        </Route>
        <Route path="/profile">
          <Profile loggedIn={loggedIn} openPopupMenu={handleOpenPopupMenu} />
        </Route>
        <Route path="/signup">
          <Register loggedIn={loggedIn} />
        </Route>
        <Route path="/signin">
          <Login loggedIn={loggedIn} />
        </Route>
        <Route exact path="/">
          <Main loggedIn={!loggedIn} openPopupMenu={loggedIn} />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>

      <Navigation isOpen={isPopupMenu} onClose={handleClosePopupMenu} />
    </div>
  );
}

export default App;
