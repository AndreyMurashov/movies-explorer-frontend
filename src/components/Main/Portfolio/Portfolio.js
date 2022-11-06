import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="Portfolio">
      <h2 className="Portfolio__title">Портфолио</h2>
      <ul className="Portfolio__site-list">
        <li>
          <a className="Portfolio__line" href="https://how.avm-fond.ru" target="_blank" rel='noreferrer'>
            <span className="Portfolio__site-type">Статичный сайт</span>
            <span className="Portfolio__site-link">↗</span>
           </a>
        </li>
        <li>
          <a className="Portfolio__line" href="https://travel.avm-fond.ru" target="_blank" rel='noreferrer'>
            <span className="Portfolio__site-type">Адаптивный сайт</span>
            <span className="Portfolio__site-link">↗</span>
          </a>
        </li>
        <li>
          <a className="Portfolio__line" href="https://mesto.avm-fond.ru" target="_blank" rel='noreferrer'>
           <span className="Portfolio__site-type">
            Одностраничное приложение
           </span>
           <span className="Portfolio__site-link">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
