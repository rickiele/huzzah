import React from "react"
import { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { Modal, Button, Form } from "react-bootstrap"
import { HabitContext } from "./HabitProvider"
import "./Habit.css"

const HabitEdit = (props) => {
  const { getHabitById, deleteHabit, updateHabit } = useContext(HabitContext)
  
  const currentUser = parseInt(localStorage.getItem("huzzah_user"))
  const timestamp = props.habit.timestamp

  const history = useHistory()
  
  const [isLoading, setIsLoading] = useState(true);
  
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

  const handleDeleteHabit = () => {
    deleteHabit(props.habit.id)
    .then(() => {
      history.push("/")
    })
  }

  const handleEditHabit = () => {
      setIsLoading(true);
        updateHabit(habit)
  }

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
          <Button className="form_editHabitBtn"
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
  // Modal States 
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" 
        onClick={() => setModalShow(true)} className="habits__editHabitBtn">
        Edit Habit 
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