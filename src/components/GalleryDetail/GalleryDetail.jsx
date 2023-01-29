import styles from './GalleryDetail.module.css';

const GalleryDetail = ({ galleryDetail }) => {
  return <img className={styles.img} src={galleryDetail}></img>;
};

export default GalleryDetail;
