import React from "react"
import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Modal, Button, Form } from "react-bootstrap"
import { RewardContext } from "./RewardProvider"
import "./Reward.css"

const RewardEdit = (props) => {
  const { deleteReward, updateReward } = useContext(RewardContext)
  
  const currentUser = parseInt(localStorage.getItem("huzzah_user"))

  const history = useHistory()
  
  const [isLoading, setIsLoading] = useState(true);
  
  const [reward, setReward] = useState({
    userId: currentUser,
    name: props.reward.name,
    id: props.reward.id,
    location: props.reward.location,
    url: props.reward.url
  })
  
  const handleControlledInputChange = (event) => {
     const editReward = { ...reward }

     editReward[event.target.id] = event.target.value
     setReward(editReward)
  }

  const handleDeleteReward = () => {
    deleteReward(props.reward.id)
    .then(() => {
      history.push("/")
    })
  }

  const handleEditReward = () => {
      setIsLoading(true);
        updateReward(reward)
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
          {props.reward.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="form__editRewardName">
            <Form.Label>
              <h5>Edit Reward Name</h5>
            </Form.Label>
            <Form.Control type="text" id="name" placeholder={props.reward.name}
            onChange={handleControlledInputChange}
            />
            <Form.Label>
              <h5>Edit Reward Location</h5>
            </Form.Label>
            <Form.Control type="text" id="location" placeholder={props.reward.location}
            onChange={handleControlledInputChange}
            />
            <Form.Label>
              <h5>Edit Reward URL</h5>
            </Form.Label>
            <Form.Control type="text" id="url" placeholder={props.reward.url}
            onChange={handleControlledInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleDeleteReward}>Delete Reward</Button>
        <Button classname="form__editRewardBtn"
          onClick={event => {
            event.preventDefault()
            handleEditReward()
          }}>
            Save New Reward Name</Button>
    </Modal.Footer>
  </Modal>
  )
}

export const RewardEditModal = ( {reward} ) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" 
        onClick={() => setModalShow(true)} className="rewards__editRewardBtn">
        Edit Reward
      </Button>

      <RewardEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
        key={reward.id}
        reward={reward}
      />
    </>
  );
}