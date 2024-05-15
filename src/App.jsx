import './App.css'
import {useState} from "react";
import Dice from "./Dice.jsx";

function App() {
  const [number, setNumber] = useState(0);

  let generateNumber = () => {
    let x = Math.floor((Math.random() * 6) + 1)
    setNumber(x)
  }

  return (
    <>
      <Dice number={number}/>
      <p>Tvoj broj je: {number}</p>
      <button onClick={generateNumber}>Bacaj</button>
    </>
  )
}

export default App
