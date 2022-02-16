import { useState } from "react";

const App = () => {

  const [val, setVal] = useState("")
  const [total, setTotal] = useState(0)

  const handleInput = (value) => {
    setVal(val.concat(value))
  }
  const handleClear = (e) => {
    e.preventDefault();
    const newVal = val.substring(0, val.length - 1)
    setVal(newVal)
  }
  const handleAllClear = (e) => {
    e.preventDefault();
    const newVal = val.substring(val.length)
    setVal(newVal)
    setTotal(0)
  }
  const handleTotal = (e) =>{
    e.preventDefault()
    setTotal(eval(val))
  }

  return (
    <div className="main">
      <div className="appContainer">
        <div className="display">
          <h4>{parseFloat((total).toFixed(12))}</h4>
          <h5>{val}</h5>
        </div>
        <div className="int">
          <div className="btnRow">
            <button onClick={() => handleInput("(")}>(</button>
            <button onClick={() => handleInput(")")}>)</button>
            <button onClick={(e) => handleAllClear(e)}>AC</button>
            <button onClick={(e) => handleClear(e)}>Del</button>
          </div>
          <div className="btnRow">
            <button onClick={() => handleInput(7)}>7</button>
            <button onClick={() => handleInput(8)}>8</button>
            <button onClick={() => handleInput(9)}>9</button>
            <button onClick={() => handleInput("/")}>/</button>
          </div>
          <div className="btnRow">
            <button onClick={() => handleInput(4)}>4</button>
            <button onClick={() => handleInput(5)}>5</button>
            <button onClick={() => handleInput(6)}>6</button>
            <button onClick={() => handleInput("*")}>*</button>
          </div>
          <div className="btnRow">
            <button onClick={() => handleInput(1)}>1</button>
            <button onClick={() => handleInput(2)}>2</button>
            <button onClick={() => handleInput(3)}>3</button>
            <button onClick={() => handleInput("-")}>-</button>
          </div>
          <div className="btnRow">
            <button onClick={() => handleInput(0)}>0</button>
            <button onClick={() => handleInput(".")}>.</button>
            <button onClick={(e) => handleTotal(e)}>=</button>
            <button onClick={() => handleInput("+")}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
