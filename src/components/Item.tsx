import { Link } from 'react-router-dom';
import { calcReducedPrice, normalizePrice } from '../utils/numUtils';
import { normalizeDiacritics, getItemPath } from '../utils/strUtils';
import { checkAvailability } from '../utils/arrUtils';
import '../css/components/Item.css';

type ItemProps = {
  item: Item;
  columns?: number;
};

function Item(props: ItemProps) {
  const { item, columns } = props;
  const { id, name, category, price, discount, availableColors } = item;
  const normalizedCategory = normalizeDiacritics(category);
  const normalizedName = normalizeDiacritics(name);
  const itemPath = getItemPath(normalizedName);
  const fixedPrice = normalizePrice(price);
  const reducedPrice = normalizePrice(calcReducedPrice(price, discount ?? 0));

  const soldOut = checkAvailability(availableColors);

  return (
    <div
      className={`item ${columns === 4 ? 'item--4-col' : ''} ${soldOut ? 'item--sold-out' : ''}`}
    >
      <Link to={`/${normalizedCategory}/${itemPath}`} className="item__link">
        <figure className="item__figure">
          <div className="item__photo-wrapper">
            <img src={`/dev-img/item-${id}.jpeg`} alt={name} className="item__photo" />
            {soldOut && (
              <div className="item__overlay flex-row-center">Produkt tymczasowo niedostępny</div>
            )}
          </div>
          <figcaption className="item__caption">{name}</figcaption>
        </figure>
      </Link>

      <div className="item__info">
        <p className={`item__price`}>
          <span className={`item__price--normal ${discount ? 'price-old' : ''}`}>
            {fixedPrice} zł
          </span>
          {discount && <span className="item__price--reduced"> {reducedPrice} zł</span>}
        </p>

        <p className="item__sizes flex-row-center">
          {availableColors[0].sizes
            .filter((size) => size.soldOut !== true)
            .map((size, index) => (
              <span key={index} className="item__size">
                {size.size}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
}

export default Item;
