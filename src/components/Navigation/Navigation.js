import { Link } from "react-router-dom";
import "./Navigation.css";
import closeButton from "../../images/close.svg";
import closeButtonLeft from "../../images/close-left.svg";
import iconAcount from "../../images/icon-account.svg";

function Navigation(props) {
  return (
    <section className={`Navigation ${props.isOpen ? "Navigation__opened" : ""}`}>
      <div className="Navigation__list">
        <button type="button" className="Navigation__close" onClick={props.onClose}>
          <img className="Navigation__close-img" src={closeButton} alt="/" />
          <img className="Navigation__close-img" src={closeButtonLeft} alt="\" />
        </button>

        <div className="Navigation__links">
          <Link to="/" className="Navigation__link" onClick={props.onClose}>
            Главная
          </Link>
          <Link
            to="/movies"
            className="Navigation__link"
            onClick={props.onClose}
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className="Navigation__link"
            onClick={props.onClose}
          >
            Сохраненные фильмы
          </Link>
          <Link
            to="/profile"
            className="Navigation__account-link"
            onClick={props.onClose}
          >
            Аккаунт
            <span className="Navigation__account-round">
              <img
                className="Navigation__account-icon"
                src={iconAcount}
                alt="account"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
