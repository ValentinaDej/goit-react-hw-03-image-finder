import styles from './Button.module.css';

const Button = ({ loadMore, text }) => {
  return (
    <button onClick={loadMore} className={styles.btn}>
      {text}
    </button>
  );
};

export default Button;
