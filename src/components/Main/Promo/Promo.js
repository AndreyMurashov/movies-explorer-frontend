import "./Promo.css";
import logo from "../../../images/pic__COLOR_landing-logo.svg";

function Promo() {
  return (
    <div className="Promo">
      <img className="Promo__logo" src={logo} alt="logo" />
      <h1 className="Promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
    </div>
  );
}

export default Promo;
