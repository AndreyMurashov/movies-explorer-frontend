import { Link } from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";
import "./Register.css";
import logoRound from "../../images/logo__COLOR_logo-2.svg";
import logoSmile from "../../images/logo__COLOR_main-smile.svg";

function Register(props) {
  const {
    handleChangeValue,
    handleSubmitForn,
    values,
    errors,
    isValid
  } = useFormValidation(props.register); 

  return (
    <section className="Register">
      <div className="Register__top">
        <Link className="Register__logo" to="/">
          <img className="Register__logo-round" src={logoRound} alt="logo" />
          <img className="Register__logo-smile" src={logoSmile} alt="logo" />
        </Link>
        <h1 className="Register__title">Добро пожаловать!</h1>
      </div>
      <div className="Register__bottom">
        <form
          className="Register__form"
          action="#"
          onSubmit={handleSubmitForn}
          method="POST"
        >
          <fieldset className="Register__reg-data">
            <label className="Register__label" htmlFor="name">
              Имя
            </label>
            <input
              className="Register__input"
              type="text"
              minLength="2"
              maxLength="30"
              defaultValue={values?.name}
              onChange={handleChangeValue}
              required
              id="name"
              name="name"
              placeholder="Имя"
            ></input>
          </fieldset>

          <p className="Register__validation">{errors?.name}</p>

          <fieldset className="Register__reg-data">
            <label className="Register__label" htmlFor="email">
              E-mail
            </label>

            <input
              className="Register__input"
              type="email"
              defaultValue={values?.email}
              onChange={handleChangeValue}
              required
              id="email"
              name="email"
              placeholder="Почта"
            ></input>
          </fieldset>
          <p className="Register__validation">{errors?.email}</p>
          <fieldset className="Register__reg-data">
            <label className="Register__label" htmlFor="password">
              Пароль
            </label>
            <input
              className="Register__input"
              type="password"
              minLength="6"
              defaultValue={values?.password}
              onChange={handleChangeValue}
              required
              id="password"
              name="password"
              placeholder="Пароль"
            ></input>
          </fieldset>
          <p className="Register__validation">{errors?.password}</p>
          <p className="Register__error">{props.messageText}</p>
          <fieldset className="Register__buttons">
            <button
              type="submit"
              className={`Register__button
                 ${isValid ? "" : "Register__button_disabled"}`}
              disabled={!isValid ? true : ""}
            >
              Зарегистрироваться
            </button>
            <p className="Register__text">
              Уже зарегистрированы?
              <Link className="Regisler__link" to="/signin">
                Войти
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default Register;
