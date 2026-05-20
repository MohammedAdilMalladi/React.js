import { useState } from 'react'

function App(){
  let [counter, setCounter] = useState(10);

  let addValue = () => {
    // setCounter((prev) => prev < 20 ? prev + 1 : prev); //this line of code restricts the value to exceed above 20
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1); //14 
    //these above 4 line of code updates the counter value directly 4 times in one go because setCounter has a callback function so it first completes 1 call and updates the counter and makes another call.
    //prevCounter = it fetchs the last updated state of the counter or variable
    
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1); //11
    // These above 4 line of code updates the counter value only 1 time because of useState() - as useState send updates of UI or variables in batches (there is only 1 batch is created for the above 4 lines of code and react will consider it as the same task is repeated)
    console.log("Added value", counter);
    
}  
  

  let removeValue = () => {
    // setCounter((prev) => prev > 0 ? prev - 1 : prev); //this line of code restricts to enter negative values
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
