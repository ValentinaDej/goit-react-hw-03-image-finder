import styles from './GalleryDetail.module.css';

const GalleryDetail = ({ galleryDetail }) => {
  return <img className={styles.img} src={galleryDetail} alt="alt"></img>;
};

export default GalleryDetail;
