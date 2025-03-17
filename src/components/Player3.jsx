import { useState } from "react";

export default function Player({name, symbol}) {
  const [ isEditing, setIsEditing ] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>;

  if(isEditing) {
    playerName = <input type="text" requried />
  }

  return(
    <li>
      <span className="player">
        {playerName}
        <span className="palyer-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}

// Edit 대신에 {} 적용시부터