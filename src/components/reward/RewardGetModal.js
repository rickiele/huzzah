/* PURPOSE: Get Reward Modal */

import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom" 
import { Modal, Button } from "react-bootstrap"
import { RewardGivenContext } from "./RewardGivenProvider"
import { RewardContext } from "./RewardProvider"
import "./Reward.css"

const RewardGet = (props) => {

  /* Modal states */
  const [modalShow, setModalShow] = React.useState(false);

  /* Context for Rewards and Rewards Given */
  const { getRewards, deleteReward } = useContext(RewardContext)
  const { getRewardsGiven, addRewardGiven } = useContext(RewardGivenContext)

  /* Get the Rewards and then the Rewards Given */
	useEffect(() => {
		getRewards()
		.then(getRewardsGiven())
	}, [])
		

  /* Save Reward Given -- ON CLICK */
  const timestamp = Date.now()
	const rewardGivenTimestamp = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp)
  const [isLoading, setIsLoading] = useState(true)
  const history = useHistory()

   const handleRewardGiven = () => {
    setIsLoading(true);
      //POST - add
      addRewardGiven ({
          rewardId: props.reward.id,
          timestamp: rewardGivenTimestamp
      })
  }

  /* Delete the reward after it is given */
  const handleDeleteReward = () => {
    deleteReward(props.reward.id)
    .then(() => {
      history.push("/")
    })
  }


  /* Get the reward's URL and invoke POST to Rewards Given*/
  const yesToReward = () => {
    /* Send user to the reward's link */
    let rewardLink = props.reward.url
    window.open(rewardLink)

    /* POST to Reward Given in the DB */
    /* DELETE the Reward from the DB */
    handleRewardGiven()
    handleDeleteReward()
  }


  {/* <a href={rewardLink} target="_blank">Yes</a> */}


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
          <Button onClick={yesToReward}>
            Yes
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