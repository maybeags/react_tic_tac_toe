import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [ isEditing, setIsEditing ] = useState(false);
  const [ playerName, setPlayerName ] = useState(initialName)
  function handleEditClick() {
    setIsEditing(editing => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = 'Edit';

  if(isEditing) {
    editablePlayerName = <input type="text" requried value={playerName} onChange={handleChange} />
    btnCaption="Save";
  }

  return(
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}