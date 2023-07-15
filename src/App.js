import { useState } from "react";

function App() {
  const [state, setState] = useState({
    name:'',
    gender:'',
    birth:'',
    bio:''
  })
  const handle=(e)=>{
    console.log('현재대상:', e.target.name);
    console.log('수정값:',e.target.value);
    setState({
      ...state, /* 기존상태를 유지하면서 변경된 값을 정상적으로 업데이트하는데 필요 */
      [e.target.name]: e.target.value,/*[속성]:값*/
      
    })
  }
  return (
    <div>
      <div className="top">
        <input type="text" name="name" value={state.name} onChange={handle} placeholder="이름" />
      </div>
      <div className="center">
        <select name="gender" value={state.gender} onChange={handle} id="">
          <option key={""}></option>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <div className="bottom">
        <input type="date" name="birth" value={state.birth} onChange={handle} id="" />
      </div>
      <div className="area">
        <textarea name="bio" value={state.bio} onChange={handle} cols="30" rows="10"></textarea>
      </div>
    </div>
  );
}

export default App;
