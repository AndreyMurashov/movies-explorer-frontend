import { NavLink } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="Portfolio">
      <h2 className="Portfolio__title">Портфолио</h2>
      <div className="Portfolio__site-list">
        <div className="Portfolio__line">
          <span className="Portfolio__site-type">Статичный сайт</span>
          <NavLink
            to="https://how.avm-fond.ru"
            className="Portfolio__site-link"
          >
            ↗
          </NavLink>
        </div>
        <div className="Portfolio__line">
          <span className="Portfolio__site-type">Адаптивный сайт</span>
          <NavLink
            to="https://travel.avm-fond.ru"
            className="Portfolio__site-link"
          >
            ↗
          </NavLink>
        </div>
        <div className="Portfolio__line">
          <span className="Portfolio__site-type">
            Одностраничное приложение
          </span>
          <NavLink
            to="https://mesto.avm-fond.ru"
            className="Portfolio__site-link"
          >
            ↗
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
