import { Link } from "react-router-dom";
import "./Register.css";
import logoRound from "../../images/logo__COLOR_logo-2.svg";
import logoSmile from "../../images/logo__COLOR_main-smile.svg";

function Register(props) {
  return (
    <div className="Register">
      <div className="Register__top">
        <Link className="Register__logo" to="/">
          <img className="Register__logo-round" src={logoRound} alt="logo" />
          <img className="Register__logo-smile" src={logoSmile} alt="logo" />
        </Link>
        <h1 className="Register__title">Добро пожаловать!</h1>
      </div>
      <div className="Register__bottom">
        <form className="Register__form" action="#">
          <fieldset className="Register__reg-data">
            <label className="Register__label" htmlFor="name">
              Имя
            </label>
            <input
              className="Register__input"
              type="text"
              required
              id="name"
              placeholder="Виталий"
            ></input>
          </fieldset>
          <p className="Register__validation Register__validation_hidden">
            Введите имя
          </p>
          <fieldset className="Register__reg-data">
            <label className="Register__label" htmlFor="email">
              E-mail
            </label>

            <input
              className="Register__input"
              type="text"
              required
              id="email"
              placeholder="pochta@yandex.ru"
            ></input>
          </fieldset>
          <p className="Register__validation Register__validation_hidden">
            Введите e-mail
          </p>
          <fieldset className="Register__reg-data">
            <label className="Register__label" htmlFor="password">
              Пароль
            </label>
            <input
              className="Register__input"
              type="text"
              required
              id="password"
              placeholder="••••••••••••••"
            ></input>
          </fieldset>
          <p className="Register__validation">Что-то пошло не так...</p>
          <fieldset className="Register__buttons">
            <button className="Register__button">Зарегистрироваться</button>
            <p className="Register__text">
              Уже зарегистрированы?
              <Link className="Regisler__link" to="/signin">
                Войти
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Register;
