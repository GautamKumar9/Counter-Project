import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calc from './Calc'
import Counter from './Counter'
import './App.css'


function App() {

  
  let [num, setNum] = useState(0)
  //let counter = 15

  
 
  return (
    <>
      <h1>Simple <b style={{color:"blue"}}>React</b> Project</h1>
      <br/><hr/><br/><br/>
      {num===1 && <><Calc/> <br/><hr/><button className='toggleButton' onClick={() => setNum(0)}><span class="text">Render Counter</span></button><br/> </>|| num===0 && <> <Counter/> <br/><hr/><button className='toggleButton' onClick={() => setNum(1)}>Render Calculator</button> <br/></>}
    </>
  )
}

export default App
