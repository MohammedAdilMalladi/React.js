import './App.css'
import Card from './components/Card.jsx'

function App() {
  
  return (
    <>
    <h1 className="bg-yellow-400 text-2xl text-black p-5 rounded-4xl">TailwindCSS</h1>
    <Card username="Get new images" btn="Click here to learn more" /> 
    <Card username="Explore new images" />
    </>
  )
}

export default App
