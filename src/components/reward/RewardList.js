import React, { useContext, useEffect } from "react"
import { Container, Button, Col, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { useHistory } from "react-router-dom" 
import { RewardContext } from "./RewardProvider"
import { RewardCard } from "./RewardCard"
import { RewardAddModal } from "./RewardAddModal"
import { UserCard } from "../user/UserCard"
import { UserContext } from "../user/UserProvider"
import "./Reward.css"

export const RewardList = () => {
  const { rewards, getRewards } = useContext(RewardContext)
  const { users, getUsers } = useContext(UserContext)

  useEffect(() => {
	getRewards()
	.then(getUsers)
  }, [])

  const history = useHistory()

  return (
    <Container className="rewards">
      <Col className="rewards__sayHiToUser">
          {/* Say hi to the logged in user */}
          <h1> Hello user!
          </h1>
            {/* { 
              users.map(user => {
              return <UserCard key={user.id} user={user} />
              })
            } */}
      </Col>
      <Col className="rewards__addRewardsContainer">
          <RewardAddModal />
          {/* <Button className="rewards__addRewardBtn" onClick={() => {history.push("/rewards/create")}}>Add Reward</Button> */}
          <h2>Rewards</h2>
      </Col>

      <Col className="rewards__list">
        <div>
            {/* Reward Cards are being rendered here*/}
            {
              rewards.map(reward => {
                return <RewardCard key={reward.id} reward={reward} />
              })
            }
            </div>
      </Col>
    </Container>
  )
}