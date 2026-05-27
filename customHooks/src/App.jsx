import useCounter from './hooks/useCounter.js'
import useFetch from './hooks/useFetch.jsx'

function App() {

  const {counter, increment, decrement} = useCounter(10);

  const data = useFetch("https://jsonplaceholder.typicode.com/users")

  

  return (
    <>

    <div>
      <h1>
        Counter value: {counter}
      </h1>

      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>

    </div>

    {data?.map((user) => (
      <h3 key={user.id}>{user.name}</h3>
    ))}

    </>
  )
}

export default App