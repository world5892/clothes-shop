import '../css/components/ItemGallery.css';

interface ItemGalleryProps {
  item: Item;
}

function ItemGallery(props: ItemGalleryProps) {
  const { item } = props;

  return (
    <div className="item-gallery">
      {/* <div className="item-gallery__thumbnails"></div> */}
      <div className="item-gallery__photo-wrapper">
        <img
          src={`/dev-img/item-${item.id}.jpeg`}
          alt={item.name}
          className="item-gallery__photo"
        />
      </div>
    </div>
  );
}

export default ItemGallery;
