import React, { useContext, useEffect } from "react"
import { Container, Button, Col, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { useHistory } from "react-router-dom" 
import { RewardContext } from "./RewardProvider"
import { RewardCard } from "./RewardCard"
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
      <Row className="rewards__sayHiToUser-Name">
          {/* Say hi to the logged in user */}
          <h1> Hello, {
              users.map(user => {
              return <UserCard key={user.id} user={user} />
              })
            }
          </h1>
      </Row>
      <Row className="rewards__addRewardContainer">
        <Col>
          <Button className="rewards__addRewardBtn" onClick={() => {history.push("/rewards/create")}}>Add Reward</Button>
          <h2>Rewards</h2>
            {/* Reward Cards are being rendered here*/}
            {
              rewards.map(reward => {
                return <RewardCard key={reward.id} reward={reward} />
              })
            }
        </Col>
      </Row>

     
    </Container>
  )
}