import React from "react";
import { useHistory } from "react-router-dom";

import "./Errors.css";

function PageNotFound(props) {
  const history = useHistory();

  return (
    <div className="Errors">
      <h3 className="Errors__code">404</h3>
      <p className="Errors__text">Страница не найдена</p>
      <p className="Errors__return" onClick={() => history.goBack()}>
        Назад
      </p>
    </div>
  );
}

export default PageNotFound;
