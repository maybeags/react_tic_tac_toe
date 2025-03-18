import { useState } from "react";

export default function Player({initialName, symbol}) {
  const [ isEditing, setIsEditing ] = useState(false);
  const [ playerName, setPlayerName ] = useState(initialName)
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
    setIsEditing(editing => !editing);
  }

  function handleChange(event) {
    // console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = 'Edit';

  if(isEditing) {
    // playerName = <input type="text" requried value={name} />
    // 이상의 코드로 인해 수정이 되지 않음
    // playerName = <input type="text" required defaultValue={name} />
    // 이상의 코드의 경우 쓰는 것은 가능하지만 save를 누르더라도 다시 name으로 돌아감.
    // 상태를 새로 정의할 예정 -> 맨 앞 부분에 코드 추가
    editablePlayerName = <input type="text" requried value={playerName} onChange={handleChange} />
    btnCaption="Save";
  }

  return(
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}