function App() {

  function handleOnClick(e){
    console.log(e.target.name)
  }
  return (
    <>
      <button name="A" onClick={handleOnClick}>click btn</button>
      <button name="B" onClick={handleOnClick}>click btn</button>
    </>
  );
}

export default App;
