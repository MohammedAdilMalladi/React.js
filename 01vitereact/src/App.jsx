import Learn from "./learn";


function App() {
  const username = "react"
  return (
    <>
    <h1>This h1 tag is from the app function {username}</h1> 
    {/* {username} - here it is called as evaluated expression */}
    <Learn />
    </>
  )
}

export default App;