import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import ItemGallery from '../components/ItemGallery';
import ItemDetails from '../components/ItemDetails';
import { normalizeDiacritics, getItemPath } from '../utils/strUtils';
import '../css/pages/ItemInfo.css';
import data from '../dev-data.json';

const items = data as Array<Item>;

// Extending is necessary to satisfy useParams hook contraint on possible types
interface ItemInfoParams extends Record<string, string | undefined> {
  category: string;
  name: string;
}

function ItemInfo() {
  const { category, name } = useParams<ItemInfoParams>();
  const item = items.find(
    (item) =>
      normalizeDiacritics(item.category) === category &&
      getItemPath(normalizeDiacritics(item.name)) === name,
  );

  if (!item) return <NotFound />;

  return (
    <section className="item-info">
      <ItemGallery item={item} />
      <ItemDetails item={item} />
    </section>
  );
}

export default ItemInfo;
