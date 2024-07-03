import Headings from '../components/Headings';
import Paragraph from '../components/Paragraph';
import ItemList from '../components/ItemList';
import '../css/pages/Sales.css';
import data from '../dev-data.json';

const items = data as Array<Item>;
const itemsDiscounted = items.filter((item) => item.discount);

function Sales() {
  return (
    <section className="sales">
      <Headings.Secondary>Aktualne okazje w ofercie</Headings.Secondary>
      <Paragraph>Ta sama jakość w niższej cenie!</Paragraph>

      <ItemList items={itemsDiscounted} />
    </section>
  );
}

export default Sales;
