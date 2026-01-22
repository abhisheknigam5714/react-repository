import { useState } from "react";

import "./App.css";

function App() {
  let [count, setCount] = useState(10);

  function addCount() {
    if (count < 20) setCount(count + 1);
  }

  function subCount() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <>
      <h1>This is the counter Project</h1>
      <h2>Counter:{count}</h2>
      <button onClick={addCount}>Add Counter</button>
      <br />
      <button onClick={subCount}>Substract Counter</button>
    </>
  );
}

export default App;
