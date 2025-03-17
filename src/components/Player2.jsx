import { useState } from "react";

export default function Player({name, symbol}) {
  const [ isEditing, setIsEditing ] = useState(false);

  return(
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="palyer-symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}

/**
 * 1) Add a function that's triggered when the <button> is clicked
 * 2) Change isEditing to true in that function
 * 3) Show the <span className="player-name"> only when isEditing is false
 * 4) Show an <input> element (which does not need to work) if isEditing is true
 */

//첫 번째 상수의 이름은 isEditing

// 두 번째 상수의 이름은 setIsEditing으로 하겠습니다

// 이렇게 하면 현재 플레이어 이름을

// 수정하는 중이든지 아니든지 그 정보를

// 저장할 수 있습니다

// 즉 상태의 Boolean(불리언) 값인

// true나 false 값을 제어하게 됩니다

// 초기값으로 false를 설정하겠습니다

// 즉 시작할 때에는 수정 상태가 아니므로

// 입력 필드를 띄우지 않겠다는 뜻입니다

// 여기에서 문제를 하나 내겠습니다

// 이 상태를 가지고 조금 더 작업해 볼텐 데

// 여러분이 직접 여기 있는 이 버튼이

// setIsEditing을 true로 변경하도록 함수를 적용해봅시다

// 이 때 이 플레이어 이름 span는

// isEditing이 false일 때만 보여야 합니다

// 이 경우 입력 필드만 띄워야 하는데

// 아직 입력 기능이 작동할 필요는 없습니다

// isEditing이 true일 때 입력 필드가 보이기만 하면 됩니다

// 이것이 여러분께 드리는 문제입니다

// 여기에서 영상을 잠깐 멈추시고

// 직접 이 부분을 작성해 보시기 바랍니다