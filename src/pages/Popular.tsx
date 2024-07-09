import Headings from '../components/Headings';
import Paragraph from '../components/Paragraph';
import ItemList from '../components/ItemList';
import '../css/pages/Popular.css';
import data from '../dev-data.json';

const items = data as Array<Item>;
const popularItems = items.filter((item) => item.inFashion);

function Popular() {
  return (
    <section className="popular">
      <Headings.Secondary>Sprawdź, co w modzie piszczy</Headings.Secondary>
      <Paragraph>Wybrane przez nas dla Ciebie</Paragraph>

      <ItemList items={popularItems} />
    </section>
  );
}

export default Popular;
