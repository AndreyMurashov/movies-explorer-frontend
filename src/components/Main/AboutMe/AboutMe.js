import { NavLink } from "react-router-dom";
import "./AboutMe.css";
import Portfolio from "../Portfolio/Portfolio";
import myPhoto from "../../../images/me.jpg";

function AboutMe() {
  return (
    <div className="AboutMe">
      <h2 className="AboutMe__title">Студент</h2>
      <img className="AboutMe__photo" src={myPhoto} alt="Фото" />
      <p className="AboutMe__name">Андрей</p>
      <p className="AboutMe__prof">Фронтенд-разработчик, 48 лет</p>
      <p className="AboutMe__text">
        Родился и живу в Москве, закончил лечебный факультет Московского
        государственного медико-стоматологического университета. После окончания
        курса планирую продолжить изучение программирования. Есть желание
        углубить знание изученного, а также начать осваивать новые фреймфорки
        (Vue и Angular) и языки (PHP, Phyton).
      </p>
      <NavLink to="https://github.com/AndreyMurashov" className="AboutMe__link">
        Github
      </NavLink>
      <Portfolio />
    </div>
  );
}

export default AboutMe;
