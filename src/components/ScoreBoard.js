import styles from './ScoreBoard.module.css';

const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore, drawScore } = scores;
  return (
    <div className={styles.scoreboard}>
      <span
        className={`${styles.score} ${styles['x-score']} ${
          !xPlaying && styles.inactive
        }`}
      >
        X - {xScore}
      </span>
      <span className={styles.draw}>draw - {drawScore}</span>
      <span
        className={`${styles.score} ${styles['o-score']} ${
          !xPlaying && styles.inactive
        }`}
      >
        O - {oScore}
      </span>
    </div>
  );
};

export default ScoreBoard;
