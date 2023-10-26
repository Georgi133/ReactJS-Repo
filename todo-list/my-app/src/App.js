import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Todos from "./components/Todos";
import { useEffect, useState } from 'react'

function App() {
  const [todo, setTodos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/todos`)
    .then(res => res.json())
    .then(data => {
      const result = Object.keys(data).map(id => ({ id, ...data[id] })); //creating new object
      // with id property and spread all other properties to
      //combine them in new object
      setTodos(result);
      setIsLoading(false);
    });
  }, []);

  const toggleTodoStatus = (id) => {
    setTodos(state => state.map(todo2 => todo2.id === id ? ({...todo2, isCompleted: !todo2.isCompleted}) : todo2))
  };

  const onTodoAdd = () => {
    const lastId = Number(todo[todo.length - 1].id);
    const text = prompt('Task name:')
    const newTask = { id : lastId + 1, text, isCompleted: false };
    setTodos(state => [newTask, ...state]);//we add the new object first
    //and the rest objects behind it
  }



  return (
    <div>
      <Header />
  
    {/* <!-- Main content --> */}
    <main className="main">
  
      {/* <!-- Section container --> */}
      <section className="todo-list-container">
        <h1>Todo List</h1>
  
        <div className="add-btn-container">
          <button className="btn" onClick={onTodoAdd}>+ Add new Todo</button>
        </div>
  
        <div className="table-wrapper">
  
          {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}
          {/* <Loading/> */}
          {isLoading ? <Loading/> : <Todos todo={todo}  toggleTodoStatus={toggleTodoStatus}/>}
  
          {/* <!-- Todo list table --> */}

        </div>
      </section>
    </main>
  
    {/* <!-- Footer --> */}
   <Footer />

    
    </div>
  );
}

export default App;
