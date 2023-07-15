import { useState } from "react";

function App() {
  console.log('Update!'); /* 업뎃될때마다 호출되는 메시지 */
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count+1);
  }
  return (
    <>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
    </>
  );
}

export default App;
