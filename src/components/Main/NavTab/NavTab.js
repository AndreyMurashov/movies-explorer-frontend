import "./NavTab.css";
import { NavLink } from "react-router-dom";

function NavTab() {
  return (
    <section className="NavTab">
      <ul className="NavTab__menu">
        <li className="NavTab__menu-link">
          <NavLink
            to={{ pathname: "/", hash: "#project" }}
            className="NavTab__menu-text"
          >
            О проекте
          </NavLink>
        </li>
        <li className="NavTab__menu-link">
          <NavLink to="#tech" className="NavTab__menu-text">
            Технологии
          </NavLink>
        </li>
        <li className="NavTab__menu-link">
          <NavLink to="/" className="NavTab__menu-text">
            Студент
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default NavTab;
//<Link to={{pathname: '/this-view-path', hash: '#faq-1'}}>Question 1</Link>
