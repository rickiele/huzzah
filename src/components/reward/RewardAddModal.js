/* PURPOSE: Add Reward Modal */

import React from "react"
import { useContext, useState } from "react"
import { useHistory } from "react-router-dom" 
import { Modal, Button, Form } from "react-bootstrap"
import { RewardContext } from "./RewardProvider"
import "./Reward.css"

const RewardAdd = (props) => {

  /* Get addReward from the provider with useContext */
  const { addReward } = useContext(RewardContext)

  const currentUser = parseInt(localStorage.getItem("huzzah_user"))

  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  
  const [reward, setReward] = useState({
    userId: currentUser,
    name: "",
    location: "",
    url: ""
  })

   const handleControlledInputChange = (event) => {
    // Creating an object called newReward
     const newReward = { ...reward }

     newReward[event.target.id] = event.target.value
     setReward(newReward)
   }

   /* Save reward - on click */
   const handleSaveReward = () => {
    setIsLoading(true);
      //POST - add
      addReward({
          id: reward.id,
          userId: currentUser,
          name: reward.name,
          location: reward.location,
          url: reward.url
      })
      props.onHide()
  }

  /* Render the Add Reward Modal */
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
          <Form.Group controlId="form__addRewardName">
            <Form.Label>
              <h5>Reward Name</h5>
            </Form.Label>
            <Form.Control type="text" id="name" placeholder="Enter reward name"
            onChange={handleControlledInputChange} 
            />
            <Form.Label>
              <h5>Reward Location</h5>
            </Form.Label>
            <Form.Control type="text" id="location" placeholder="Enter location of reward" 
            onChange={handleControlledInputChange} 
            />
            <Form.Label>
              <h5>Reward URL</h5>
            </Form.Label>
            <Form.Control type="text" id="url" placeholder="Enter url of reward" 
            onChange={handleControlledInputChange} 
            />
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={event => {
                event.preventDefault()
                handleSaveReward()
                }}>
                  Save New Reward</Button>
      </Modal.Footer>
    </Modal>
  )
}

export const RewardAddModal = () => {

  /* Modal states */
  const [modalShow, setModalShow] = React.useState(false);

  /* Render the Add Reward button */
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)} className="rewards__addRewardBtn">
        Add Reward
      </Button>

      <RewardAdd
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

// Need event handler for button