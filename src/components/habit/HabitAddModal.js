import React from "react"
import { useContext, useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { HabitContext } from "./HabitProvider"
import "./Habit.css"

const HabitAdd = (props) => {
  const { addHabit } = useContext(HabitContext)
  const timestamp = Date.now()
  const habitStart = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp)
  const currentUser = parseInt(localStorage.getItem("huzzah_user"))

  const [isLoading, setIsLoading] = useState(true);
  
  const [habit, setHabit] = useState({
    userId: currentUser,
    name: "",
    timestamp: habitStart
  })

  const handleControlledInputChange = (event) => {
    // Creating an object called newHabit
    const newHabit = { ...habit }

    newHabit[event.target.id] = event.target.value
    setHabit(newHabit)
  }

  /* Save Habit -- on click */
  const handleSaveHabit = () => {
      setIsLoading(true);
        //POST - add
        addHabit(habit)
        .then(() => { 
          setHabit({
            userId: currentUser,
            name: "",
            timestamp: habitStart
          })
        })
        props.onHide()
  }
  
  /* Render the Add Habit modal */
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
            <Form.Group>
              <Form.Label>
                <h5>Habit Name</h5>
              </Form.Label>
              <Form.Control type="text" id="name" placeholder="Enter new habit name"
                onChange={handleControlledInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="form_addNewHabitBtn" 
            onClick={handleSaveHabit}>
            Add New Habit</Button>
        </Modal.Footer>
      </Modal>
      );
}

export const HabitAddModal = () => {

  /* Modal states */
  const [modalShow, setModalShow] = React.useState(false);

  /* Render the Add Habit button */
  return (
    <>
      <Button variant="primary" id="bootstrap" onClick={() => setModalShow(true)} className="habits__addHabitBtn">
        +
      </Button>

      <HabitAdd
        show={modalShow}
        onHide={() => {setModalShow(false)}}
      />
    </>
  )
}


