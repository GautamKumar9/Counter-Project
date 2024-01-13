import { useState } from 'react'
import './Calc.css'
function Calc() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    function add(){
        setResult(num1+num2);
    }

    function sub(){
      setResult(num1-num2);
    } 

    function Mul(){
      setResult(num1*num2);
    }

    function Div(){
      setResult(num1/num2);
    }

  return (
    <>
        <br/>
        <label>Number 1 : </label>< input type='number' value={num1} onChange={(e) => setNum1(Number(e.target.value))} /> <br/>
        <label>Number 2 : </label>< input type='number' value={num2} onChange={(e) => setNum2(Number(e.target.value))} /> <br/>
        <h3>Result = {result || ""}</h3>
        <button className='calcButton' onClick={() => add()}>+</button>
        <button className='calcButton'  onClick={()=> sub()}>-</button>
        <button className='calcButton'  onClick={()=> Mul()}>*</button>
        <button className='calcButton'  onClick={()=> Div()}>/</button>
        <br/>
    </>
  )
}

export default Calc;
