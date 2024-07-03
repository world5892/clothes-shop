import '../css/layout/Navbar.css';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import UserNav from '../components/UserNav';

function Navbar() {
  return (
    <header className="navbar">
      <Logo />
      <Nav />
      <UserNav />
    </header>
  );
}

export default Navbar;
