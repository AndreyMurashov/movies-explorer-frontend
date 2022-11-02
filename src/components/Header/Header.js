import "./Header.css";
import { NavLink } from "react-router-dom";
import logoRound from "../../images/logo__COLOR_logo-2.svg";
import logoSmile from "../../images/logo__COLOR_main-smile.svg";
import line from "../../images/line.svg";
import iconAcount from "../../images/icon-account.svg";

const Header = (props) => {
  const back = { backgroundColor: props.background };

  const activeStyle = {
    fontWeight: "500"
  };

  return (
    <header className="Header" style={back}>
      <NavLink className="Header__logo" to="/">
        <img className="Header__logo-round" src={logoRound} alt="" />
        <img className="Header__logo-smile" src={logoSmile} alt="logo" />
      </NavLink>
      {props.loggedIn ? (
        <>
          <div className="Header__wide-screen">
            <NavLink
              className="Header__link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className="Header__link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/saved-movies"
            >
              Сохраненные фильмы
            </NavLink>
            <NavLink
              className="Header__link Header__link_account"
              to="/profile"
            >
              Аккаунт
              <span className="Header__account-round">
                <img className="Header__account-icon" src={iconAcount} alt="" />
              </span>
            </NavLink>
          </div>

          <div className="Header__slim-screen">
            <button
              className="Header__hidden-menu-button"
              style={back}
              onClick={props.isOpen}
            >
              <img
                className="Header__hidden-menu-button-line"
                src={line}
                alt="-"
              />
              <img
                className="Header__hidden-menu-button-line"
                src={line}
                alt="-"
              />
              <img
                className="Header__hidden-menu-button-line"
                src={line}
                alt="-"
              />
            </button>
          </div>
        </>
      ) : (
        <>
          <NavLink className="Header__link" to="/signup">
            Регистрация
          </NavLink>

          <NavLink className="Header__link Header__link_button" to="/signin">
            Войти
          </NavLink>
        </>
      )}
    </header>
  );
};

export default Header;
