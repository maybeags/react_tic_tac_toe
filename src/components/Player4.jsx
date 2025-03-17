import { useState } from "react";

export default function Player({name, symbol}) {
  const [ isEditing, setIsEditing ] = useState(false);

  function handleEditClick() {
    // setIsEditing(isEditing ? false : true);
    setIsEditing(!isEditing);
  }

  let playerName = <span className="player-name">{name}</span>;
  let btnCaption = 'Edit';

  if(isEditing) {
    playerName = <input type="text" requried value={name} />
    btnCaption="Save";
  }

  return(
    <li>
      <span className="player">
        {playerName}
        <span className="palyer-symbol">{symbol}</span>
      </span>
      {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}