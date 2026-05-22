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
    <div className='w-full max-w-md text-center mx-auto shadow-md rounded-lg px-4  my-8 bg-gray-500 text-white-700'>Password Generator</div>
    </>
  )
}

export default App