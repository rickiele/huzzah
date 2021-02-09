/* PURPOSE: Reward Screen --- localhost:3000/huzzah */

import React, { useContext, useEffect } from "react"
import { Container, Col} from "react-bootstrap"
import { RewardContext } from "./RewardProvider"
import { RewardScreenCard } from "./RewardScreenCard"
import "./Reward.css"

export const RewardScreen = () => {

  /* Context for rewards */
  const { rewards, getRewards } = useContext(RewardContext)

  /* Get the rewards */
  useEffect(() => {
	  getRewards()
  }, [])

  /* Render the rewards */
  return (
    <Container className="rewardScreen">
     <h1>Huzzah!</h1>
     <h3>You have completed a habit consistently for the week. 
       Treat yourself for your hard work.</h3>
       
      <Col className="rewardScreen__list">
            {/* Reward Cards are being rendered here*/}
            {
              rewards.map(reward => {
                return <RewardScreenCard key={reward.id} reward={reward} />
              })
            }
      </Col>
    </Container>
  )
}