import { ListGroup,Button } from 'react-bootstrap';
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export const TodoItem = ({
    _id,
    text,
    isCompleted,

}) => {
    
    const { deleteTodo,onTodoLineThrough} = useContext(TodoContext);

    return (
        <ListGroup.Item action style={{display: 'flex', justifyContent: 'space-between'}}>
        <p onClick={() => onTodoLineThrough(_id)} style={{textDecoration: !isCompleted ? 'line-through' : 'none'}}>{text}</p> 
        <Button onClick={() => deleteTodo(_id)} variant="dark">X</Button>
      </ListGroup.Item>
    );
}