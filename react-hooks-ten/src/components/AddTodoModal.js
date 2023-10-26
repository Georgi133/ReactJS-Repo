import { Button, Modal, Form} from 'react-bootstrap';
import { useForm } from '../hooks/useForm';

function AddTodoModal({
    onTodoAdd,
    onClickClose,
}) {

    const { formValues, onChangeHandler, onSubmit } = useForm({
        text: '',
        isCompleted: false
    }, (e, values) => {
        onTodoAdd(e, values);
    });


    // const onTodoSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log(formValues.text)
    // }


  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={true} onEscapeKeyDown={onClickClose}>
        <Modal.Header>
          <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Todo</Form.Label>

        <Form.Control 
         type="text" 
         name="text" 
         placeholder="Do the dishes" 
         value={formValues.name}
         onChange={onChangeHandler}
         />

      </Form.Group>

      <Button variant="primary"
       type="submit"
       style={{marginRight: "10px"}}>
        Add
        </Button>

          <Button onClick={onClickClose} variant="secondary">
            Close
            </Button>

    </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddTodoModal;