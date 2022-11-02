import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <p className="Footer__top">Учебный проект Яндекс.Практикум и BestFilm.</p>
      <div className="Footer__bottom">
        <span className="Footer__year">&copy; 2022</span>
        <ul className="Footer__links">
          <li className="Footer__link">
            <NavLink
              className="Footer__link-text"
              to="https://practicum.yandex.ru"
            >
              Яндекс.Практикум
            </NavLink>
          </li>
          <li className="Footer__link">
            <NavLink
              className="Footer__link-text"
              to="https://github.com/Github"
            >
              Github
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
