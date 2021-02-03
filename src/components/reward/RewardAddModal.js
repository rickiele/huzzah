import React from "react"
import { Modal, Button, Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Reward.css"

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
          Add A Reward
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h5>New Reward Name</h5>
            </Form.Label>
            <Form.Control type="text" placeholder="Enter new reward name here" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Save New Reward</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const RewardAddModal = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)} className="rewards__addRewardBtn">
        Add Reward
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

// Need event handler for button