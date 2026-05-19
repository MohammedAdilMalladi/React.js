import { useState } from 'react'

function App(){
  let [counter, setCounter] = useState(10);

  let addValue = () => {
    setCounter((prev) => prev < 20 ? prev + 1 : prev);
    console.log("Added value", counter);
}  
  

  let removeValue = () => {
    setCounter((prev) => prev > 0 ? prev - 1 : prev);
    console.log("removed value", counter);
  }

  return(
    <>
    <h1>Counter Project</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Increase value: {counter}</button>
    <button onClick={removeValue}>Decrease value: {counter}</button>

    <p>additional element: {counter}</p>
    </>
  )
}

export default App
