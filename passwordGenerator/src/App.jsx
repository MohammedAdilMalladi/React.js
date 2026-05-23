import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, lengthAllowed] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*+=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random * str + 1);
      pass = str.charAt(char);
      
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  return (
    <>
    <div className='w-full max-w-md text-center mx-auto shadow-md rounded-lg p-5 my-8 bg-gray-500 text-white-700 text-white'>
      <p className='text-2xl font-medium'>Password Generator</p>
      <div className='flex-shadow flex justify-center rounded-lg overflow-hidden mb-4 p-5'>

        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 bg-white text-black rounded-l-md"
        placeholder="Password"
        readOnly
         />
        <button className='bg-blue-700 px-3 py-0.5 shrink-0 cursor-pointer rounded-r-md'>copy</button>        
      </div>
    </div>
    </>
  )
}

export default App