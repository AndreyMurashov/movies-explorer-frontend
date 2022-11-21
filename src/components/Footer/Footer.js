import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <p className="Footer__top">Учебный проект Яндекс.Практикум и BestFilm.</p>
      <div className="Footer__bottom">
        <span className="Footer__year">&copy; 2022</span>
        <ul className="Footer__links">
          <li className="Footer__link">
            <a
              className="Footer__link-text"
              href="https://practicum.yandex.ru"  
              target="_blank"
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="Footer__link">
            <a
              className="Footer__link-text"
              href="https://github.com/Github"  
              target="_blank"
              rel='noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
