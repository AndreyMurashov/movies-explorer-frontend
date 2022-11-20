import { Link } from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";
import "./Login.css";
import logoRound from "../../images/logo__COLOR_logo-2.svg";
import logoSmile from "../../images/logo__COLOR_main-smile.svg";

function Login(props) {
  const {
    handleChangeValue,
    handleSubmitForn,
    values,
    errors,
    isValid
  } = useFormValidation(props.login);
 
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
        <form
          className="Login__form"
          action="#"
          onSubmit={handleSubmitForn}
          method="POST"
        >
          <fieldset className="Login__reg-data">
            <label className="Login__label" htmlFor="email">
              E-mail
            </label>

            <input
              className="Login__input"
              defaultValue={values?.email}
              onChange={handleChangeValue}
              type="email"
              name="email"
              placeholder="E-mail"
              required
              id="email"
            ></input>
          </fieldset>
          <p className="Login__validation">
            {errors?.email}
          </p>
          <fieldset className="Login__reg-data">
            <label className="Login__label" htmlFor="password">
              Пароль
            </label>
            <input
              className="Login__input"
              defaultValue={values?.password}
              onChange={handleChangeValue}
              type="password"
              name="password"
              placeholder="Пароль"
              required
              minLength="6"
              id="password"
            ></input>
          </fieldset>
          <p className="Login__validation">
            {errors?.password}
          </p>
          <fieldset className="Login__buttons">
            <p className="Login__input-error">{props.messageText}</p>
            <button
              type="submit"
              className={`Login__button
                 ${isValid ? "" : "Login__button_disabled"}`}
              disabled={!isValid ? true : ""}
            >
              Войти
            </button>
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
