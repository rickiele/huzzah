/* PURPOSE: Edit Habit Modal */

import React from "react"
import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Modal, Button, Form } from "react-bootstrap"
import { HabitContext } from "./HabitProvider"
import "./Habit.css"

const HabitEdit = (props) => {

  /* Get delete and edit from the provider */
  const { deleteHabit, updateHabit } = useContext(HabitContext)
  
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory()

  const currentUser = parseInt(localStorage.getItem("huzzah_user"))
  const timestamp = props.habit.timestamp
  
  const [habit, setHabit] = useState({
    userId: currentUser,
    name: props.habit.name,
    timestamp: timestamp,
    id: props.habit.id
  })
  
  const handleControlledInputChange = (event) => {
     const editHabit = { ...habit }

     editHabit[event.target.id] = event.target.value
     setHabit(editHabit)
  }

  /* Delete habit -- on click */
  const handleDeleteHabit = () => {
    deleteHabit(props.habit.id)
    .then(() => {
      history.push("/")
    })
  }

  /* Edit Habit -- on click */
  const handleEditHabit = () => {
      setIsLoading(true);
        updateHabit(habit)
        props.onHide()
  }

  /* Render the Edit Habit Modal */
  return (
    <Modal
    {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            {props.habit.name}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Habit Stats</h5>
          <p>Date Started: {props.habit.timestamp}</p>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>
                <h5>Edit Habit Name</h5>
              </Form.Label>
              <Form.Control type="text" id="name" placeholder={props.habit.name}
              onChange={handleControlledInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleDeleteHabit}>Delete Habit</Button>
          <Button className="form__editHabitBtn"
            onClick={event => {
            event.preventDefault()
            handleEditHabit()
          }}>
            Save New Habit Name</Button>
         </Modal.Footer>
    </Modal>
  )
}

export const HabitEditModal = ( {habit} ) => {

  /* Modal States  */
  const [modalShow, setModalShow] = React.useState(false);

  /* Render the Edit Habit button */
  return (
    <>
      <Button variant="primary" 
        onClick={() => setModalShow(true)} className="habits__editHabitBtn">
        
      </Button>

      <HabitEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
        key={habit.id}
        habit={habit}
      />

    </>
  );
}