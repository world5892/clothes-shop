import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/FakeAuthContext';
import { ReactComponent as UserIcon } from '../img/svg/user.svg';
import { ReactComponent as FavsIcon } from '../img/svg/heart.svg';
import { ReactComponent as CartIcon } from '../img/svg/shopping-bag.svg';
import User from './User';
import Button from './Button';
import '../css/components/UserNav.css';

function UserNav() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="nav-user flex-row-center">
      {isAuthenticated && <User />}
      {!isAuthenticated && (
        <Link to="/login" className="nav-user__link">
          <UserIcon />
        </Link>
      )}
      <Link to="favorites" className="nav-user__link">
        <FavsIcon />
      </Link>
      <Link to="cart" className="nav-user__link">
        <CartIcon />
      </Link>
      {isAuthenticated && (
        <Button className="btn__secondary btn--small" onClick={logout}>
          Logout
        </Button>
      )}
    </nav>
  );
}

export default UserNav;
