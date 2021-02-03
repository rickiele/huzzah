import React from "react"
import { Modal, Button, Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Reward.css"

export const RewardEdit = (props, { reward }) => (
  <Modal
  {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
  >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Reward Name Goes Here
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h5>Edit Reward Name</h5>
            </Form.Label>
            <Form.Control type="text" placeholder="Edit habit name here" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button>Delete Reward</Button>
        <Button>Save New Reward Name</Button>
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

export const RewardEditModal = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)} className="rewards__editHabitBtn">
        Edit Reward
      </Button>

      <RewardEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}