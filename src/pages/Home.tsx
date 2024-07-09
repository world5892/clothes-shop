import Headings from '../components/Headings';
import Paragraph from '../components/Paragraph';
import ItemList from '../components/ItemList';
import Slider from '../components/Slider';
import Map from '../components/Map';
import LinkButton from '../components/LinkButton';
import data from '../dev-data.json';
import '../css/pages/Home.css';
import '../css/components/Button.css';

const items = data as Array<Item>;

function Home() {
  return (
    <>
      <section className="sale-demo">
        <Headings.Primary>Jesienna wyprzedaż do 40%</Headings.Primary>
        <LinkButton to="/okazje" className="btn__primary btn__primary--animated">
          Sprawdź
        </LinkButton>
      </section>

      <section className="bestsellers-demo mb-6">
        <Headings.Secondary>Top 10 najchętniej kupowanych</Headings.Secondary>
        <Paragraph>Najczęściej wybierane przez Was w tym tygodniu</Paragraph>

        <ItemList items={items.slice(-3)} className="mb-5" />

        <LinkButton to="/bestsellery" className="btn__secondary">
          Zobacz więcej
        </LinkButton>
      </section>

      <section className="about">
        <p className="about__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quam deleniti fugiat
          accusamus dolor natus in explicabo, commodi ducimus sapiente qui illum placeat quo et,
          odio cupiditate reprehenderit impedit possimus ipsa perferendis est? Excepturi error
          repellendus explicabo laboriosam omnis et. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit.
        </p>
      </section>

      <section className="new__demo">
        <Headings.Secondary>Nowe trendy na lato</Headings.Secondary>
        <Paragraph>Sprawdź co nowego każdego tygodnia</Paragraph>
        <Slider />
      </section>

      <section className="location">
        <Headings.Secondary modifier="dark">Odwiedź mój sklep</Headings.Secondary>
        <Paragraph modifier="dark">
          Przekonaj się o świetnej jakości ubrań i akcesoriów na własnej skórze
        </Paragraph>
        <Map />
      </section>
    </>
  );
}

export default Home;
