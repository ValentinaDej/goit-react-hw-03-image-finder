import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, showModalForm, largeImageURL }) => {
  return (
    <>
      <li
        className={styles.ImageGalleryItem}
        onClick={() => showModalForm({ largeImageURL })}
      >
        <img
          src={webformatURL}
          alt="alt"
          className={styles.ImageGalleryIteImage}
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  showModalForm: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
