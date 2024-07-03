import { useState, useRef, useEffect, ReactElement } from 'react';
import data from '../dev-data.json';
import { ReactComponent as ChevronLeftIcon } from '../img/svg/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from '../img/svg/chevron-right.svg';
import { ReactComponent as DotsIcon } from '../img/svg/dots-three-horizontal.svg';
import { ReactComponent as CrossIcon } from '../img/svg/cross.svg';
import '../css/components/Slider.css';

const items = data as Array<Item>;
// console.log(items);

function Slider() {
  // const [currentItem, setCurrentItem] = useState(items[0]);
  const [translation, setTranslation] = useState(0);
  const [infoShown, setInfoShown] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const currentItemId = Math.abs(translation) / 100;
  const currentItem = items[currentItemId];

  // const boxStyles = { transform: 'rotateY(180deg) translateX(55%) scale(0.9)' };
  // const galleryStyles = {
  //   transform: `translateX(${translation}%)`,
  // };
  // const underlayStyles = {
  //   opacity: 1,
  //   transform: 'rotateY(0) translateX(55%) scale(0.9)',
  // };

  useEffect(() => {
    const sectionEl = divRef.current!.parentElement;
    // todo: why React.MouseEvent type doesn't work here?
    sectionEl!.addEventListener('click', (e: MouseEvent) => {
      if ((e.target as Element).classList.contains('new__demo') && infoShown) {
        setInfoShown(false);
      }
    });

    // todo: same problem here
    document.body.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape' && infoShown) {
        setInfoShown(false);
      }
    });
  });

  function handleLeftClick() {
    if (translation < 0) {
      setTranslation((prevTranslation) => prevTranslation + 100);
    } else {
      setTranslation(items.length * 100 * -1 + 100);
    }
  }

  function handleRightClick() {
    if (translation * -1 < items.length * 100 - 100) {
      setTranslation((prevTranslation) => prevTranslation - 100);
    } else {
      setTranslation(0);
    }
  }

  // function handleClosePress() {
  //   if (infoShown) {
  //     setInfoShown(false);
  //   }
  // }

  function handleKeyPress(e: React.KeyboardEvent) {
    switch (e.key) {
      case 'ArrowLeft':
        handleLeftClick();
        break;

      case 'ArrowRight':
        handleRightClick();
        break;

      // case 'Escape':
      //   handleClosePress();
      //   break;
    }
  }

  const handleInfoClick = () => setInfoShown(true);
  const handleCloseClick = () => setInfoShown(false);

  // function handleMouseEnter(event: React.MouseEvent) {
  //   event.currentTarget.textContent = 'Wyświetl szczegóły';
  // }

  // function handleMouseLeave(event: React.MouseEvent) {
  //   event.currentTarget.textContent = '';
  // }

  return (
    <div className="slider" ref={divRef} onKeyDown={handleKeyPress}>
      {console.log(currentItemId) as unknown as ReactElement}
      <div className={`slider__box ${infoShown ? 'slider__box--active' : ''}`}>
        <div className="slider__gallery" style={{ transform: `translateX(${translation}%)` }}>
          {items.map((item, index) => (
            <img
              key={item.id}
              src={`/dev-img/item-${item.id}.jpeg`}
              alt={item.name}
              className="slider__photo"
              style={{
                transform: `translateX(${100 * index}%)`,
              }}
            />
          ))}
        </div>

        {!infoShown && (
          <div className="slider__dots flex-row-center">
            {items.map((_, index) => (
              <span
                key={index}
                className={`slider__dot ${currentItemId === index ? 'slider__dot--active' : ''}`}
              ></span>
            ))}
          </div>
        )}
      </div>

      <div className={`slider__underlay ${infoShown ? 'slider__underlay--active' : ''}`}>
        <p className="slider__info-name">{currentItem.name}</p>

        <p className="slider__info-description">{currentItem.description}</p>

        <table className="slider__info-sizes">
          <thead>
            <tr>
              <th colSpan={2}>Dostępne kolory i rozmiary</th>
            </tr>
          </thead>
          <tbody>
            {currentItem.availableColors.map((color, index) => (
              <tr key={index}>
                <td>{color.color}</td>
                <td>
                  {color.sizes
                    .filter((size) => !size.soldOut)
                    .map((size) => size.size)
                    .join(' / ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <span className="slider__info-header">Materiały:</span>

        <ul className="slider__info-fabrics">
          {currentItem.fabrics.map((fabric, index) => (
            <li key={index} className="slider__info-fabric">
              {fabric.fabric}
            </li>
          ))}
        </ul>

        <div className="slider__info-price">Cena: {currentItem.price} zł</div>

        <button
          type="button"
          className="slider__btn-close flex-row-center"
          onClick={handleCloseClick}
        >
          <CrossIcon />
        </button>
      </div>

      <button
        type="button"
        className="slider__btn-nav slider__btn-nav--left flex-row-center"
        onClick={handleLeftClick}
      >
        <ChevronLeftIcon />
      </button>

      <button
        type="button"
        className="slider__btn-nav slider__btn-nav--right flex-row-center"
        onClick={handleRightClick}
      >
        <ChevronRightIcon />
      </button>

      {!infoShown && (
        <button
          type="button"
          className="slider__btn-info flex-row-center"
          onClick={handleInfoClick}
        >
          <DotsIcon />
          {/* <ArrowRightIcon /> */}
        </button>
      )}
    </div>
  );
}

export default Slider;
