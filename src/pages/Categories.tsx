import { useEffect } from 'react';
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { normalizeDiacritics, capitalize } from '../utils/strUtils';
import '../css/pages/Categories.css';
import '../css/components/CategoryNav.css';

const allCategories: Category[] = [
  'sukienki',
  'marynarki',
  'koszule',
  'bluzki',
  'T-shirty',
  'topy',
  'szorty',
  'spodnie',
  'jeansy',
  'spódnice',
  'kurtki',
  'płaszcze',
  'swetry',
  'bluzy',
  'piżamy',
  'biustonosze',
];

const getClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-categories__link active-sublink' : 'nav-categories__link';

function Categories() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/kategorie') {
      navigate('/kategorie/wszystkie');
    }
  });

  return (
    <>
      <section className="categories">
        <nav className="nav-categories">
          <ul className="nav-categories__list">
            <li className="nav-categories__item">
              <NavLink to="/kategorie/wszystkie" className={getClassName}>
                Wszystkie
              </NavLink>
            </li>
            {allCategories.map((category) => (
              <li key={category} className="nav-categories__item">
                <NavLink
                  to={`/kategorie/${normalizeDiacritics(category)}`}
                  className={getClassName}
                >
                  {capitalize(category)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <Outlet />
    </>
  );
}

export default Categories;
