import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import Header from "../Header/Header";
import useFormValidation from "../../hooks/useFormValidation";
import "./Profile.css";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { name } = currentUser;

  const {
    handleChangeValue,
    handleSubmitForn,
    values,
    errors,
    isValid,
    setValues
  } = useFormValidation(props.handleEditProfile);

  const [message, setMessage] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  useEffect(() => {
    setMessage(props.messageText);
    setEditMode(false);
  }, [props.messageText]);

  useEffect(() => {
    setMessage("");
  }, []);

  const handleEditMode = () => {
    setEditMode(true);
  };

  return (
    <>
      <Header
        background="#202020"
        loggedIn={props.loggedIn}
        isOpen={props.openPopupMenu}
      />
      <main className="Profile">
        <div className="Profile__top">
          <h1 className="Profile__title">Привет, {name}!</h1>
          <form
            className="Profile__form"
            action="#"
            onSubmit={handleSubmitForn}
            noValidate
          >
            <div className="Profile__reg-data">
              <label htmlFor="login" className="Profile__reg-label">
                Имя
              </label>
              <input
                id="login"
                name="name"
                className="Profile__reg-value"
                defaultValue={values?.name}
                onChange={handleChangeValue}
                disabled={!editMode}
                placeholder="Имя"
                minLength="2"
                maxLength="30"
                required
              ></input>
            </div>
            <p className="Profile__validation">{errors?.name}</p>
            <div className="Profile__reg-data">
              <label htmlFor="login" className="Profile__reg-label">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                className="Profile__reg-value"
                defaultValue={values?.email}
                onChange={handleChangeValue}
                disabled={!editMode}
                type="email"
                placeholder="E-mail"
                required
              ></input>
            </div>
            <p className="Profile__validation">{errors?.email}</p>
            <p className="Profile__error">{message}</p>
            {!editMode ? (
              <div className="Profile__button-block-default">
                <button
                  type="button"
                  className="Profile__button Profile__button_redact"
                  onClick={handleEditMode}
                >
                  Редактировать
                </button>
                <br />
                <button
                  className="Profile__button Profile__button_exit"
                  onClick={props.signOut}
                >
                  Выйти из аккаунта
                </button>
              </div>
            ) : (
              <button
                type="submit"
                className={`Profile__button-save ${
                  isValid ? "" : "Profile__button-save_disabled"
                }`}
                disabled={!isValid ? true : ""}
              >
                Сохранить
              </button>
            )}
          </form>
        </div>
      </main>
    </>
  );
}

export default Profile;
