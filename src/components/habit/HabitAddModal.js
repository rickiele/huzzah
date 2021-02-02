import React from "react"
import { Modal, Button, Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Habit.css"

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add A Habit
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Habit Name</Form.Label>
            <Form.Control type="text" placeholder="Enter habit name here" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Save Habit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const HabitAddModal = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)} className="habits__addHabitBtn">
        Add Habit
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}