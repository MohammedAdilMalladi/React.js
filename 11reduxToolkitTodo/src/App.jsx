import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";


function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="w-full max-w-md">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App