import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ items, showModalForm }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            showModalForm={showModalForm}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};
