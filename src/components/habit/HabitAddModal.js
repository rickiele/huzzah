import React from "react"
import { useContext, useEffect, useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { useHistory, useParams } from "react-router-dom" 
import { HabitContext } from "./HabitProvider"
import "./Habit.css"

const HabitAdd = (props) => {
  const { addHabit } = useContext(HabitContext)
  const timestamp = Date.now()
  const habitStart = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp)
  const currentUser = parseInt(localStorage.getItem("huzzah_user"))

  const [isLoading, setIsLoading] = useState(true);
  const { habitId } = useParams();
  const history = useHistory();
  
  //for edit, hold on to state of animal in this view
    const [habit, setHabit] = useState({
      userId: currentUser,
      name: "",
      timestamp: ""
    })


   const handleControlledInputChange = (event) => {
    // Creating an object called newHabit
     const newHabit = { ...habit }

     newHabit[event.target.id] = event.target.value
     setHabit(newHabit)
   }


   const handleSaveHabit = () => {
      setIsLoading(true);
        //POST - add
        addHabit({
            id: habit.id,
            userId: currentUser,
            name: habit.name,
            timestamp: habitStart
        })
        .then(() => history.push("/"))
    }

    const foo = () => {
      // {props.onHide}
      
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
              Add A Habit
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="form_addHabitName">
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
              onClick={event => {
                event.preventDefault()
                handleSaveHabit()
            }}>
              Add New Habit</Button>
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

      <HabitAdd
        show={modalShow}
        onHide={() => setModalShow(false)}
      
      />
    </>
  );
}

// Need event handler for button