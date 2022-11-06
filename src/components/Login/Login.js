import { Link } from "react-router-dom";
import "./Login.css";
import logoRound from "../../images/logo__COLOR_logo-2.svg";
import logoSmile from "../../images/logo__COLOR_main-smile.svg";

function Login(props) {
  return (
    <section className="Login">
      <div className="Login__top">
        <Link className="Login__logo" to="/">
          <img className="Login__logo-round" src={logoRound} alt="logo" />
          <img className="Login__logo-smile" src={logoSmile} alt="logo" />
        </Link>
        <h1 className="Login__title">Рады видеть!</h1>
      </div>
      <div className="Login__bottom">
        <form className="Login__form" action="#">
          <fieldset className="Login__reg-data">
            <label className="Login__label" htmlFor="email">
              E-mail
            </label>

            <input
              className="Login__input"
              type="text"
              required
              id="email"
              placeholder="pochta@yandex.ru"
            ></input>
          </fieldset>
          <p className="Login__validation Login__validation_hidden">
            Введите e-mail
          </p>
          <fieldset className="Login__reg-data">
            <label className="Login__label" htmlFor="password">
              Пароль
            </label>
            <input
              className="Login__input"
              type="text"
              required
              id="password"
            ></input>
          </fieldset>
          <p className="Login__validation  Login__validation_hidden">
            Что-то пошло не так...
          </p>
          <fieldset className="Login__buttons">
            <button type="submit" className="Login__button">Войти</button>
            <p className="Login__text">
              Еще не зарегистрированы?
              <Link className="Login__link" to="/signup">
                Регистрация
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default Login;
