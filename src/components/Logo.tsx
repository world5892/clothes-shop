import { NavLink } from 'react-router-dom';
import logo from '../img/logo-small-2.png';
import '../css/components/Logo.css';

function Logo() {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="logo__img" />
      </NavLink>
    </div>
  );
}

export default Logo;
