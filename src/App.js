import {useState} from 'react';


function App() {
  const [text, setText] = useState('');
  const handleOnChange = (e)=>{setText(e.target.value);}
  const handleOnClick =(e)=> {alert(text);}
  return (
    <div>
      <input value={text} onChange={handleOnChange} type="text" />
      <button onClick={handleOnClick}>작성 완료22</button>
    </div>
  );
}

export default App;
