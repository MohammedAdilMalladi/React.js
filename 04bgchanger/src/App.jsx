import {useState} from 'react'
import './App.css'

function App() {
  const [bgColor, setbgColor] = useState('white');
  return (
   <div className={`${bgColor} min-h-screen flex justify-center items-center`}>
    <div className="flex justify-between p-5 w-270 border h-20 rounded-3xl">
      <button onClick={() => setbgColor("bg-red-500")} className="w-20  h-10 border bg-red-500 text-white rounded-3xl cursor-pointer">Red</button>
      <button onClick={() => setbgColor("bg-green-500")} className="w-20  h-10 border bg-green-500 text-white rounded-3xl cursor-pointer">Green</button>
      <button onClick={() => setbgColor("bg-blue-500")} className="w-20  h-10 border bg-blue-500 text-white rounded-3xl cursor-pointer">Blue</button>
      <button onClick={() => setbgColor("bg-olive-500")} className="w-20  h-10 border bg-olive-500 text-white rounded-3xl cursor-pointer">Olive</button>
      <button onClick={() => setbgColor("bg-gray-500")} className="w-20  h-10 border bg-gray-500 text-white rounded-3xl cursor-pointer">Gray</button>
      <button onClick={() => setbgColor("bg-yellow-500")} className="w-20  h-10 border bg-yellow-500 text-white rounded-3xl cursor-pointer">Yellow</button>
      <button onClick={() => setbgColor("bg-pink-500")} className="w-20  h-10 border bg-pink-500 text-white rounded-3xl cursor-pointer">Pink</button>
      <button onClick={() => setbgColor("bg-purple-500")} className="w-20  h-10 border bg-purple-500 text-white rounded-3xl cursor-pointer">Purple</button>
      <button onClick={() => setbgColor("bg-orange-500")} className="w-20  h-10 border bg-orange-500 text-white rounded-3xl cursor-pointer">Orange</button>
      <button onClick={() => setbgColor("bg-white-500")} className="w-20  h-10 border bg-white-500 text-black rounded-3xl cursor-pointer">White</button>
      <button onClick={() => setbgColor("bg-black")} className="w-20  h-10 border bg-black text-white rounded-3xl cursor-pointer">Black</button>
    </div>
   </div>
  )
}

export default App