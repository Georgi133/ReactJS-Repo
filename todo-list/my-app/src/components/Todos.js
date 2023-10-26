import Todo from "./Todo";

export default function Todos ({
     todo, 
     toggleTodoStatus,

   }) {
    return (
    <table className="table">
    <thead>
      <tr>
        <th className="table-header-task">Task</th>
        <th className="table-header-status">Status</th>
        <th className="table-header-action">Action</th>
      </tr>
    </thead>
    <tbody>
        
        {todo.map(todo2 => <Todo key={todo2.id} {...todo2} toggleTodoStatus={toggleTodoStatus} />)}

    </tbody>
  </table>
    )
};