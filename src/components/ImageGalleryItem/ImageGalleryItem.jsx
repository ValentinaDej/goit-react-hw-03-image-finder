import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <>
      <li className={styles.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt=""
          className={styles.ImageGalleryIteImage}
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;
