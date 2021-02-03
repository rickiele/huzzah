import React from "react"
import { useContext, useEffect, useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { useHistory, useParams } from "react-router-dom" 
import { HabitContext } from "./HabitProvider"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Habit.css"

function MyVerticallyCenteredModal(props, {habit}) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h5>New Habit Name</h5>
            </Form.Label>
            <Form.Control type="text" placeholder="Enter new habit name here" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Save New Habit</Button>
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

// Need event handler for button