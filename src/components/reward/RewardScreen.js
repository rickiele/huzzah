/* PURPOSE: Reward Screen --- localhost:3000/huzzah */

import React, { useContext, useEffect } from "react"
import { Row, Container, Col} from "react-bootstrap"
import { RewardContext } from "./RewardProvider"
import { RewardScreenCard } from "./RewardScreenCard"
import { UserReward } from "../user/UserReward"
import { UserContext } from "../user/UserProvider"
import { UserCard } from "../user/UserCard"
import "./Reward.css"

export const RewardScreen = () => {

  /* Context for rewards */
  const { rewards, getRewards } = useContext(RewardContext)
  const { users, getUsers } = useContext(UserContext)
  const currentUser = parseInt(localStorage.getItem("huzzah_user"))

  /* Get the rewards */
  useEffect(() => {
	  getRewards()
    .then(getUsers())
  }, [])

  /* Render the rewards */
  return (
    <Container className="rewardScreen">
      <Row className="rewardScreen__Row">
        <Col>
          <h2>Huzzah!</h2>
          <div className="rewardScreen__CongratsUser">
          { 
                      users.filter(u => u.id === currentUser).map(user => {
                      return <UserReward key={user.id} user={user} />
                      })
                  }
          </div>
        </Col>
      </Row>
      <Row className="rewardScreen__Row">
        <Col className="rewardScreen__list">
              {/* Reward Cards are being rendered here*/}
              {
                rewards.filter(r => r.userId === currentUser).map(reward => {
                  return <RewardScreenCard key={reward.id} reward={reward} />
                })
              }
        </Col>
      </Row>
    </Container>
  )
}