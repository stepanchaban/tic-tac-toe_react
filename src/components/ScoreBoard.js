import './ScoreBoard.css';

const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore, drawScore } = scores;
  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xPlaying && 'inactive'}`}>
        X - {xScore}
      </span>
      <span className={`draw`}>draw - {drawScore}</span>
      <span className={`score o-score ${xPlaying && 'inactive'}`}>
        O - {oScore}
      </span>
    </div>
  );
};

export default ScoreBoard;
