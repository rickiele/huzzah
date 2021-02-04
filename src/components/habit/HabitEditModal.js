import React from "react"
import { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { Modal, Button, Form } from "react-bootstrap"
import { HabitContext } from "./HabitProvider"
import "./Habit.css"

const HabitEdit = (props) => {
  const { getHabitById, deleteHabit } = useContext(HabitContext)

  const [habit, setHabit] = useState({})
  const { habitId } = useParams()
  const history = useHistory()

  useEffect(() => {
    console.log("useEffect", habitId)
    getHabitById(habitId)
    .then((response) => {
      setHabit(response)
    })
  }, [])

  const handleDeleteHabit = () => {
    deleteHabit(props.habit.id)
    .then(() => {
      history.push("/")
    })
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
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                <h5>Edit Habit Name</h5>
              </Form.Label>
              <Form.Control type="text" placeholder={props.habit.name} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleDeleteHabit}>Delete Habit</Button>
          <Button>Save New Habit Name</Button>
      </Modal.Footer>
    </Modal>
  )
}

export const HabitEditModal = ( {habit} ) => {
  // Modal States 
  const [modalShow, setModalShow] = React.useState(false);

  const {habitId} = useParams()
  const history = useHistory()


  // const handleDeleteHabit = () => {
  //   deleteHabit(habit.id)
  //   .then(() => {
  //     history.push("/")
  //   })
  // }


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