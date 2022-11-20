import {
  Route,
  Switch,
  useHistory,
  withRouter
} from "react-router-dom";
import { useEffect, useState } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Register from "../Register/Register.js";
import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";
import "./App.css";
import PageNotFound from "../Errors/PageNotFound";
import {
  authError,
  tokenError,
  emailError,
  registrationError,
  updateError,
  severError,
  notFoundError
} from "../Errors/Errors";
import mainApi from "../../utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPopupMenu, setIsPopupMenu] = useState(false);
  const [messageText, setMessageText] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getCurrentUserInfo()
        .then((userData) => {
          setLoggedIn(true);
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(`Ошибка ${err}`);
        });
    }
  }, [loggedIn]);

  // Открытие попап-меню
  const handleOpenPopupMenu = () => {
    setIsPopupMenu(!isPopupMenu);
  };

  // Закрытие попап-меню
  const handleClosePopupMenu = () => {
    setIsPopupMenu(false);
  };

  // Получение данных пользователя
  function getUserInfo(userID) {
    // const { _id } = user;
    mainApi
      .getCurrentUserInfo(userID)
      .then((userData) => {
        setLoggedIn(true);
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  // Регистрация нового пользователя
  const register = (name, email, password) => {
    mainApi
      .registerNewUser(name, email, password)
      .then(() => {
        login(email, password);
      })
      .catch((err) => {
        if (err === 409) {
          setMessageText(emailError);
        } else if (err === 400) {
          setMessageText(registrationError);
        } else {
          setMessageText(severError);
        }
        console.log(`Ошибка ${err}`);
      });
  };

  // Авторизация пользователя
  function login(email, password) {
    mainApi
      .loginExistingUser(email, password)
      .then((user) => {
        localStorage.setItem("jwt", user.token);
        setLoggedIn(true);
        checkToken();
        const userID = user._id;
        getUserInfo(userID);
        window.location.reload();
      })

      .catch((err) => {
        if (err === 401) {
          setMessageText(authError);
        } else {
          setMessageText(severError);
        }
        console.log(`Ошибка ${err}`);
        setLoggedIn(false);
      });
  }

  // Деавторизация пользователя
  function signOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setMessageText('');
    history.push("/");
  }

  // Редактирование данных пользователя
  function handleEditProfile(name, email) {
    mainApi
      .updateCurrentUserInfo({ name, email })
      .then(() => {
        setCurrentUser({ name, email });
        setMessageText("Информация о пользователе обновлена");
      })
      .catch((err) => {
        if (err === 409) {
          setMessageText(emailError);
        } else if (err === 400) {
          setMessageText(updateError);
        } else {
          setMessageText(severError);
        }
        console.log(`Ошибка ${err}`);
      });
  }

  // Проверка токена
  const checkToken = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .getContent(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push("/movies");
          }
        })
        .catch((err) => {
          setMessageText(tokenError);
          console.log(`Ошибка ${err}`);
        });
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            openPopupMenu={handleOpenPopupMenu}
            component={Movies}
            messageText={messageText}
          />

          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            openPopupMenu={handleOpenPopupMenu}
            component={SavedMovies}
            messageText={messageText}
          />

          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            openPopupMenu={handleOpenPopupMenu}
            component={Profile}
            signOut={signOut}
            handleEditProfile={handleEditProfile}
            messageText={messageText}
          />

          <Route path="/signup">
            <Register register={register} messageText={messageText} />
          </Route>

          <Route path="/signin">
            <Login login={login} messageText={messageText} />
          </Route>

          <Route exact path="/">
            <Main loggedIn={loggedIn} openPopupMenu={handleOpenPopupMenu} />
          </Route>

          <Route path="/*">
            <PageNotFound messageText={notFoundError} />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>

      <Navigation isOpen={isPopupMenu} onClose={handleClosePopupMenu} />
    </div>
  );
}

export default withRouter(App);
