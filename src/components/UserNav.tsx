import { Link } from 'react-router-dom';
import { ReactComponent as UserIcon } from '../img/svg/user.svg';
import { ReactComponent as FavsIcon } from '../img/svg/heart.svg';
import { ReactComponent as CartIcon } from '../img/svg/shopping-bag.svg';
import '../css/components/UserNav.css';

function UserNav() {
  return (
    <nav className="nav-user flex-row-center">
      <Link to="/logowanie" className="nav-user__link">
        <UserIcon />
      </Link>
      <Link to="ulubione" className="nav-user__link">
        <FavsIcon />
      </Link>
      <Link to="koszyk" className="nav-user__link">
        <CartIcon />
      </Link>
    </nav>
  );
}

export default UserNav;
