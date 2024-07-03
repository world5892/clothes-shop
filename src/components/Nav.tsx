import { NavLink, Link } from 'react-router-dom';
import '../css/components/Nav.css';

const getClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-main__link active-link' : 'nav-main__link';

function Nav() {
  return (
    <nav className="nav-main">
      <ul className="nav-main__list">
        <li className="nav-main__item">
          <NavLink to="/kategorie" className={getClassName}>
            Kategorie
          </NavLink>
          <ul className="nav-main__sublist">
            <li className="nav-main__subitem">
              <Link to="/kategorie/sukienki" className="nav-main__sublink">
                Sukienki
              </Link>
            </li>

            <li className="nav-main__subitem">
              <Link to="/kategorie/marynarki" className="nav-main__sublink">
                Marynarki
              </Link>
            </li>

            <li className="nav-main__subitem">
              <Link to="/kategorie/koszule" className="nav-main__sublink">
                Koszule
              </Link>
            </li>

            <li className="nav-main__subitem">
              <Link to="/kategorie/bluzki" className="nav-main__sublink">
                Bluzki
              </Link>
            </li>

            <li className="nav-main__subitem">
              <Link to="/kategorie/t-shirty" className="nav-main__sublink">
                T-shirty
              </Link>
            </li>

            <li className="nav-main__subitem">
              <Link to="/kategorie/topy" className="nav-main__sublink">
                Topy
              </Link>
            </li>

            <li className="nav-main__subitem">
              <Link to="/kategorie/szorty" className="nav-main__sublink">
                Szorty
              </Link>
            </li>

            <li className="nav-main__subitem">
              <Link to="/kategorie/spodnie" className="nav-main__sublink">
                Spodnie
              </Link>
            </li>

            <li className="nav-main__subitem">
              <Link to="/kategorie/jeansy" className="nav-main__sublink">
                Jeansy
              </Link>
            </li>

            <li className="nav-main__subitem">
              <Link to="/kategorie/spodnice" className="nav-main__sublink">
                Spódnice
              </Link>
            </li>

            <li className="nav-main__subitem">
              <Link to="/kategorie/kurtki" className="nav-main__sublink">
                Kurtki
              </Link>
            </li>

            <li className="nav-main__subitem">
              <Link to="/kategorie/plaszcze" className="nav-main__sublink">
                Płaszcze
              </Link>
            </li>

            <li className="nav-main__subitem">
              <Link to="/kategorie/swetry" className="nav-main__sublink">
                Swetry
              </Link>
            </li>

            <li className="nav-main__subitem">
              <Link to="/kategorie/bluzy" className="nav-main__sublink">
                Bluzy
              </Link>
            </li>
            <li className="nav-main__subitem">
              <Link to="/kategorie/pizamy" className="nav-main__sublink">
                Piżamy
              </Link>
            </li>

            <li className="nav-main__subitem">
              <Link to="/kategorie/biustonosze" className="nav-main__sublink">
                Biustonosze
              </Link>
            </li>
          </ul>
        </li>
        {/* <li className="nav-main__item">
          <NavLink to="/kolekcje" className={getClassName}>
            Kolekcje
          </NavLink>
        </li> */}
        <li className="nav-main__item">
          <NavLink to="nowosci" className={getClassName}>
            Nowości
          </NavLink>
        </li>
        <li className="nav-main__item">
          <NavLink to="bestsellery" className={getClassName}>
            Bestsellery
          </NavLink>
        </li>
        <li className="nav-main__item">
          <NavLink to="/okazje" className={getClassName}>
            Okazje
          </NavLink>
        </li>
        <li className="nav-main__item">
          <NavLink to="/popularne" className={getClassName}>
            Na czasie
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
