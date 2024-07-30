import Item from '../components/Item';
import Paragraph from './Paragraph';
import '../css/components/ItemList.css';

interface ItemListProps {
  items: Array<Item>;
  className?: string;
  columns?: number;
};

function ItemList(props: ItemListProps) {
  const { items, className, columns } = props;

  if (items.length === 0)
    return <Paragraph modifier="light">Brak produktów w tej kategorii</Paragraph>;

  return (
    <div className={`items ${className}`}>
      {items.map((item) => (
        <Item key={item.id} item={item} columns={columns} />
      ))}
    </div>
  );
}

export default ItemList;
