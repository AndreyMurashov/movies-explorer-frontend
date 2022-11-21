import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register.js";
import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";
import "./App.css";
import PageNotFound from "../Errors/PageNotFound";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isPopupMenu, setIsPopupMenu] = useState(false);

  const handleOpenPopupMenu = () => {
    setIsPopupMenu(!isPopupMenu);
  };

  const handleClosePopupMenu = () => {
    setIsPopupMenu(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/movies"
          element={
            <Movies loggedIn={loggedIn} openPopupMenu={handleOpenPopupMenu} />
          }
        />

        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              loggedIn={loggedIn}
              openPopupMenu={handleOpenPopupMenu}
            />
          }
        />

        <Route
          path="/profile"
          element={
            <Profile loggedIn={loggedIn} openPopupMenu={handleOpenPopupMenu} />
          }
        />

        <Route path="/signup" element={<Register loggedIn={loggedIn} />} />

        <Route path="/signin" element={<Login loggedIn={loggedIn} />} />

        <Route
          path="/"
          element={<Main loggedIn={!loggedIn} openPopupMenu={loggedIn} />}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Navigation isOpen={isPopupMenu} onClose={handleClosePopupMenu} />
    </div>
  );
}

export default App;
