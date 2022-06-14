import { useState } from "react";
import "./App.css";

function App() {
  const [counter,setCounter]=useState(0)
  const handleincrement=(value)=>{
  setCounter(counter+value)
  }
  return (
    <div className="App">
      <h1>Counter app</h1>
      <h2 data-testid="counter-value">{counter}</h2>
      <button onClick={()=>{
        if(counter<=0){return }handleincrement(-1)}} data-testid="counter-decrement-button">Decrement</button>
      <button onClick={()=>{handleincrement(1)} }data-testid="counter-increment-button">Increment</button>
    </div>
  );
}

export default App;
