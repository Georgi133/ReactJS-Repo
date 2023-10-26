import { ListGroup } from 'react-bootstrap';
import { TodoItem } from './TodoItem';
import Button from 'react-bootstrap/Button';

export const TodoList = ({
    todos,
    onClickAdd,

}) => {
    return (
        <div style={{width: '50%', margin: '6px auto'}}>
       <h1 style={{textAlign: 'center'}}>TodoList</h1>
        <ListGroup>
            {todos.map(x => <TodoItem  key={x._id} {...x}/>)}
    </ListGroup>

    <Button onClick={onClickAdd} style={{margin: '6px auto'}} variant="primary">Add</Button>{' '}
    </div>
    );
}