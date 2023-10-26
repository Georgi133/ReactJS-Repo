import { useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import { TodoList } from './components/TodoList';
import AddTodoModal from './components/AddTodoModal';
import * as Server from './serverApp/Server'
import { TodoContext } from './contexts/TodoContext';


const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {

  const [openWindowAdd, setOpenWindowAdd] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      setTodos(Object.values(data));
    });
  }, []);

  const onTodoAdd = async (e, values) => {
    const result = await Server.create(e, values);
    setTodos(state => [...state, result])
    onClickClose();
  };

  const onClickAdd = () => {
    setOpenWindowAdd(true);
  }
  const onClickClose = () => {
    setOpenWindowAdd(false);
  }

  const onTodoLineThrough =  async (todoId) => {

    const todo = todos.find(x => x._id === todoId);

    setTodos(state => state.map(todo => todo._id === todoId ?
      {...todo, isCompleted: !todo.isCompleted} : todo));

    await Server.fullUpdate(todoId, {...todo, isCompleted: !todo.isCompleted})

  }

  const deleteTodo = async (itemId) => {
    Server.deleteTodo(itemId);
    setTodos(state => (state.filter(todo => todo._id !== itemId)));
  }
  
  const contextValue = {
    deleteTodo,
    onTodoLineThrough,
    
  }

  return (
    <TodoContext.Provider value={contextValue}>
     <div>
      <Header  />
 
      <TodoList onClickAdd={onClickAdd} todos={todos} />

      {openWindowAdd && <AddTodoModal onClickClose={onClickClose} onTodoAdd={onTodoAdd}/>}
     
     </div>
    </TodoContext.Provider>
  );
}

export default App;
