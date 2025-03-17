import { useState } from "react";

export default function Player({name, symbol}) {
  const [ isEditing, setIsEditing ] = useState(false);

  function handleEditClick() {
    // setIsEditing(!isEditing);
    /**
     * 근데 이상과 같이 작성해서는 안된다.
     * if your new state depends on your previous state value, you should not update the state like this : setIsEditing(!isEditing)
     * 
     * Instead, pass a function to your state updating function
     * This function will automatically be called by React and will receive the guranteed latest state value.
     * 
     * : setIsEditing((editing) => !editing )
     * 
     * 이는 
     * setIsEditing(!isEditing);
     * setIsEditing(!isEditing);
     * 와 같이 두 번 해보면 답이 나온다
     */
    setIsEditing((editing) => {!editing});
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