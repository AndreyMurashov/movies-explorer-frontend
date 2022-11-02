import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Profile.css";

function Profile(props) {
  return (
    <>
      <Header
        background="#202020"
        loggedIn={props.loggedIn}
        isOpen={props.openPopupMenu}
      />
      <div className="Profile">
        <div className="Profile__top">
          <h1 className="Profile__title">Привет, Виталий!</h1>
          <form className="Profile__form" action="#">
            <div className="Profile__reg-data">
              <label htmlFor="login" className="Profile__reg-label">
                Имя
              </label>
              <input
                id="login"
                name="name"
                className="Profile__reg-value"
                value="Виталий"
              ></input>
            </div>
            <div className="Profile__reg-data">
              <label htmlFor="login" className="Profile__reg-label">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                className="Profile__reg-value"
                value="pochta@yandex.ru"
              ></input>
            </div>

            <p className="Profile__error Profile__error_hidden">Текст ошибки</p>

            <div className="Profile__button-block-default #Profile__button-block-default_hidden">
              <button className="Profile__button Profile__button_redact">
                Редактировать
              </button>
              <br />
              <Link className="Profile__button Profile__button_exit" to="/">
                Выйти из аккаунта
              </Link>
            </div>
            <button className="Profile__button-save Profile__button-save_hidden">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
