export default function GameBoard() {

  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  return(
    <ol id="game-board">
      {/* <li>       3 x 3 game-board -> but not write like that because we need some dynamic
        <ol>          상수 선언 후에 렌더링 작업
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li> */}
      {initialGameBoard.map((row, rowIndex) => (
      <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button>{playerSymbol}</button>
            </li>
          ))}
        </ol>
      </li>
    ))}
    </ol>
  );
}