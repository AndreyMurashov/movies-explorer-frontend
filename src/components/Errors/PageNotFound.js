import React from "react";
import { Link } from "react-router-dom";

import "./Errors.css";

function PageNotFound(props) {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate(-1, { replace: true });
  // };

  return (
    <div className="Errors">
      <h3 className="Errors__code">404</h3>
      <p className="Errors__text">Страница не найдена</p>
      <Link className="Errors__return" to="/">
        Назад
      </Link>
    </div>
  );
}

export default PageNotFound;
