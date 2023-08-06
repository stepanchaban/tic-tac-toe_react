import styles from './ResetButton.module.css';

const ResetButton = ({ resetBoard }) => {
  return (
    <button className={styles['reset-btn']} onClick={resetBoard}>
      Reset
    </button>
  );
};

export default ResetButton;
