import { useState } from "react";
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";

function App() {
  const [ activePlayer, setActivePlayer ] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }
  
  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
        <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'}/> 
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
    </div>

    <Log />
  </main>
}

export default App
/**
 * 
 * Lifting State Up
 * 
 * Lift the state up to the closest ancestor component that has access to all components that need to work with that state.
 *                                  manage
 *              Ancestor Component -----> State : State value that's needeed by both Child 1 & Child 2
*                       |
*           --------------------------
*           |                         |
*        Child1                      Child2
*
*     Ancestor passes the state / a function that eventually changes the state via props to the child component

      this allows the child component to initiate the state change.
 */