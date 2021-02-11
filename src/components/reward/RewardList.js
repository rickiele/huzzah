/* PURPOSE: List all the rewards */

import React, { useContext, useEffect } from "react"
import { Container, Col} from "react-bootstrap"
import { RewardContext } from "./RewardProvider"
import { RewardCard } from "./RewardCard"
import { RewardAddModal } from "./RewardAddModal"
import "./Reward.css"

export const RewardList = (props) => {

   /* Context for rewards and users */
  const { rewards, getRewards } = useContext(RewardContext)
  const currentUser = parseInt(localStorage.getItem("huzzah_user"))

  /* Get the rewards */
  useEffect(() => {
	  getRewards()
  }, [])

  /* Render the list of reward cards */
  return (
    <Container className="rewards">
      <div className="rewards__addRewardContainer">
        <RewardAddModal />
        <h2>Rewards</h2>
      </div>
      <Col className="rewards__list">
        {/* Reward Cards are being rendered here*/}
        { 
          rewards.filter(r => r.userId === currentUser).map(reward => {
            return <RewardCard key={reward.id} reward={reward} />
          })
        }
      </Col>
    </Container>
  )
}