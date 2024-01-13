import { useState } from 'react'
import './Counter.css'
function Counter(){
    let [counter, setCounter] = useState(15)

    const addValue = () => {
        // if(counter<10)
        // counter = counter + 1
         setCounter(counter + 1)
     
       }
     
    const removeValue = () => {
         if(counter>0)
         setCounter(counter - 1)
       }
    return(
        <>
        <br/>
        <h2>Counter value: {counter}</h2>
        <button className='counterButton'
        onClick={addValue}
        >Increase by 1</button>
        <br /> <br/>
        <button className='counterButton'
        onClick={removeValue}
        >Decrease by 1</button>
        <br/>
        </>
    )
}

export default Counter;