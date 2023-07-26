import classNames from 'classnames';
import styles from './Box.module.css';

const Box = ({ value, onClick, win }) => {
  const targetStyle = value === 'X' ? styles.x : styles.o;

  return (
    <button
      className={classNames(styles.box, targetStyle, { [styles.winner]: win })}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Box;
