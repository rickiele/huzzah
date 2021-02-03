import React from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { HabitContext } from "./HabitProvider"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Habit.css"

export const HabitEdit = (props, { habit }) => (
  <Modal
  {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
  >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Habit Name Goes Here
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Habit Stats</h5>
        <p>Date Started: (Timestamp goes here)</p>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h5>Edit Habit Name</h5>
            </Form.Label>
            <Form.Control type="text" placeholder="Edit habit name here" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button>Delete Habit</Button>
        <Button>Save New Habit Name</Button>
    </Modal.Footer>
  </Modal>
)


// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Edit Habit (Habit Name goes here)
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <p>Date Started: (Timestamp goes here)</p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Save Habit</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

export const HabitEditModal = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)} className="habits__editHabitBtn">
        Edit Habit
      </Button>

      <HabitEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}