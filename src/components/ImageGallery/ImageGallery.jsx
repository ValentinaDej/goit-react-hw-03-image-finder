import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ items }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map(({ id, webformatURL, largeImageURL }) => {
        return <ImageGalleryItem key={id} webformatURL={webformatURL} />;
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};
