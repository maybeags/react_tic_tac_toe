
function App() {
  

  return <main>
    <div id="game-container">
      <ol id="players">
        {/* <li>
          <span className="player">
            <span className="player-name">Player 1</span>
            <span className="palyer-symbol">X</span>
          </span>
          <button>Edit</button>
        </li>  
        <li>
          <span className="player">
            <span className="player-name">Player 2</span>
            <span className="palyer-symbol">O</span>
          </span>
          <button>Edit</button>
        </li> */}
        {/* 이상과 같이 작성했을 경우 동일 Markup Language가 반복됨을 확인할 수 있으므로 -> Component 작성 */}
      </ol>
      GAME BOARD
    </div>

    LOG
  </main>
}

export default App
