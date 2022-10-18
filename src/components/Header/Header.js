import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <Link to='/'>Logo</Link>
      <Link to='/signup'>Регистрация</Link>
      <Link to='/signin'>Войти</Link>
    </div>
  );
}

export default Header;