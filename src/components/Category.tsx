import { useLocation } from 'react-router-dom';
import ItemList from './ItemList';
import { normalizeDiacritics } from '../utils/strUtils';
import data from '../dev-data.json';
import '../css/components/Category.css';

const items = data as Array<Item>;

function Category() {
  const location = useLocation();
  const category = location.pathname.split('/').at(-1);
  let categoryItems;

  if (category === 'wszystkie') {
    categoryItems = items;
  } else {
    categoryItems = items.filter((item) => normalizeDiacritics(item.category) === category);
  }

  return (
    <section className="category">
      <ItemList items={categoryItems} className="mb-5" columns={4} />
    </section>
  );
}

export default Category;
