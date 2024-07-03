import Headings from '../components/Headings';
import Paragraph from '../components/Paragraph';
import ItemList from '../components/ItemList';
import '../css/pages/New.css';
import data from '../dev-data.json';

const items = data as Array<Item>;
const newItems = items.filter((item) => item.createdAt.startsWith('2024'));

function New() {
  return (
    <section className="new">
      <Headings.Secondary>Podążaj za trendami</Headings.Secondary>
      <Paragraph>Tegoroczne nowości już czekają!</Paragraph>

      <ItemList items={newItems} />
    </section>
  );
}

export default New;
