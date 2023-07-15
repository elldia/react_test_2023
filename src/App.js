import { useState } from "react";

function App() {
  const [option, setOption] = useState("");
  const handle = (e) => {
    setOption(e.target.value);
  }
  return (
    <>
      <select value={option} name="product" id="product" onChange={handle}>
        <option key={"blue"}>blue</option>
        <option key={"red"}>red</option>
        <option key={"green"}>green</option>
      </select>
      <p>{option}</p>
    </>
  );
}

export default App;
