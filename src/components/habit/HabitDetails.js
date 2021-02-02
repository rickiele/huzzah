import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { Modal, Button, Form } from "react-bootstrap"
import { HabitContext } from "./HabitProvider"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Habit.css"

export const HabitDetail = () => {
  const { getHabitById, deleteHabit } = useContext(HabitContext)

	const [habit, setHabit] = useState({})

  /* This is how you access the number inside the component. Now, no matter which animal detail the user wants to view 
  by clicking on any habit's detail link in the list of habit, this one path with match any and all of them, whether there are two habits or two million.  */
	const {habitId} = useParams();
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", habitId)
    getHabitById(habitId)
    .then((response) => {
      setHabit(response)
    })
    }, [])
  
  const handleDeleteHabit = () => {
    deleteHabit(habit.id)
    .then(() => {
      history.push("/habits")
    })
  }
  
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>{habit.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Habit Started: {habit.timestamp}</p>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Habit Name</Form.Label>
            <Form.Control type="text" placeholder="name@example.com" />
            <Button variant="secondary">Rename Habit</Button>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}
