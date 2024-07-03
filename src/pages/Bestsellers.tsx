import Headings from '../components/Headings';
import Paragraph from '../components/Paragraph';
import ItemList from '../components/ItemList';
import '../css/pages/Bestsellers.css';
import data from '../dev-data.json';

const items = data as Array<Item>;
const soldCountSorted = [...items.sort((a, b) => b.soldCount - a.soldCount)];
const bestsellers = soldCountSorted.slice(0, 10);

function Bestsellers() {
  return (
    <section className="bestsellers">
      <Headings.Secondary>Ten styl ma wzięcie</Headings.Secondary>
      <Paragraph>Najchętniej wybierane przez Was</Paragraph>

      <ItemList items={bestsellers} />
    </section>
  );
}

export default Bestsellers;
