import Box from './Box';
import './Board.css';

const Board = ({ board, onClick, win }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        const isWin = win.includes(idx);
        return (
          <Box
            win={isWin}
            key={idx}
            value={value}
            onClick={() => value === null && onClick(idx)}
          />
        );
      })}
    </div>
  );
};

export default Board;
