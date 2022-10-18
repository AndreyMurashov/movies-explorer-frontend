import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="Footer">
<NavLink to='/'>О проекте</NavLink>
      <NavLink to='/techs'>Технологии</NavLink>
      <NavLink to='/'>Студент</NavLink>
    </div>
  );
}

export default Footer;