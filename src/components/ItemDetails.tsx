import { useState } from 'react';
import { calcReducedPrice } from '../utils/numUtils';
import Headings from './Headings';
import Button from './Button';
import Divider from './Divider';
import '../css/components/ItemDetails.css';
import { normalizePrice } from '../utils/numUtils';
import { checkAvailability } from '../utils/arrUtils';

type ItemDetailsProps = {
  item: Item;
};

function ItemDetails(props: ItemDetailsProps) {
  const { item } = props;
  const { name, price, discount, availableColors, fabrics, description } = item;
  const fixedPrice = normalizePrice(price);
  const reducedPrice = normalizePrice(calcReducedPrice(price, discount ?? 0));
  const firstColor = availableColors[0].color;
  const soldOut = checkAvailability(availableColors);

  const [activeColor, setActiveColor] = useState(firstColor);
  const [activeSize, setActiveSize] = useState('');

  function handleColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setActiveColor(e.target.value);
    setActiveSize('');
  }

  function handleSizeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setActiveSize(e.target.value);
  }

  return (
    <div className="item-details">
      <Headings.Tertiary className="mb-4">{name}</Headings.Tertiary>

      <p className="item-details__price mb-2">
        <span className={`item-details__price--normal ${discount ? 'price-old' : ''}`}>
          {fixedPrice} zł
        </span>
        {discount && <span className="item-details__price--reduced">{reducedPrice} zł</span>}
      </p>

      <form className="item-details__form mb-4">
        <div className="item-details__form-group mb-2">
          <label htmlFor="colors" className="item-details__colors-label">
            Wybierz kolor:
          </label>
          <select
            name="colors"
            disabled={soldOut}
            value={activeColor}
            className="item-details__colors"
            onChange={handleColorChange}
          >
            {availableColors.map((color) => (
              <option value={color.color} key={color.color} className="item-details__color">
                {color.color}
              </option>
            ))}
          </select>
        </div>
        <div className="item-details__form-group mb-6">
          {availableColors
            .find((color) => color.color === activeColor)
            ?.sizes.filter((size) => !size.soldOut)
            .map((size) => (
              <div key={size.size}>
                <input
                  type="radio"
                  id={size.size.toString()}
                  name="size"
                  value={size.size.toString()}
                  key={size.size}
                  checked={size.size.toString() === activeSize}
                  className="item-details__size"
                  onChange={handleSizeChange}
                />
                <label htmlFor={size.size.toString()} className="item-details__size-label">
                  {size.size}
                </label>
              </div>
            ))}
        </div>

        {!soldOut ? (
          <>
            <Button className="btn__secondary btn--wide mb-2">Dodaj do koszyka</Button>
            <Button className=" btn__primary btn--wide">Dodaj do ulubionych</Button>
          </>
        ) : (
          <p className="item-details__availability">Produkt tymczasowo niedostępny!</p>
        )}
      </form>

      <Divider className="mb-3" />

      <p className="item-details__description mb-4">{description}</p>

      <p className="item-details__fabrics mb-3">
        Materiały:
        {fabrics.map((fabric) => ` ${fabric.fabric} ${fabric.percentage}%`).join(', ')}
      </p>
    </div>
  );
}

export default ItemDetails;
