/* PURPOSE: Get Reward Modal */

import React from "react"
import { Modal, Button, Form } from "react-bootstrap"
import "./Reward.css"

const RewardGet = (props) => {

  /* Modal states */
  const [modalShow, setModalShow] = React.useState(false);

  /* Get the reward's URL */
  let rewardLink = props.reward.url

  /* Render the Get Reward modal */
  return (
    <Modal
    {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h3 className="rewardScreen__modalTitle">Treat Yourself To</h3>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <h3>{props.reward.name} at {props.reward.location}?</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button>
            <a href={rewardLink} target="_blank">Yes</a>
          </Button>
          <Button onClick={props.onHide}> No</Button>
         </Modal.Footer>
    </Modal>
  )
}

export const RewardGetModal = ( {reward} ) => {

  /* Modal states */
  const [modalShow, setModalShow] = React.useState(false);

  /* Render the Get Reward button */
  return (
    <>
      <Button variant="primary" 
        onClick={() => setModalShow(true)} className="rewardScreen__getRewardBtn">
        Get Reward
      </Button>

      <RewardGet
        show={modalShow}
        onHide={() => setModalShow(false)}
        key={reward.id}
        reward={reward}
      />

    </>
  );
}