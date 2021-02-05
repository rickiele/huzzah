import React, { useContext, useEffect } from "react"
import { Container, Col} from "react-bootstrap"
import { RewardContext } from "./RewardProvider"
import { RewardCard } from "./RewardCard"
import { RewardAddModal } from "./RewardAddModal"
import "./Reward.css"

export const RewardList = () => {
  const { rewards, getRewards } = useContext(RewardContext)

  useEffect(() => {
	  getRewards()
  }, [])

  return (
    <Container className="rewards">
      <div className="rewards__sayHiToUser">
          {/* Say hi to the logged in user */}
          <h1> Hello user!
          </h1>
            {/* { 
              users.map(user => {
              return <UserCard key={user.id} user={user} />
            })
          } */}
          <RewardAddModal />
          <h2>Rewards</h2>
      </div>
      {/* <Col className="rewards__addRewardsContainer">
      </Col> */}
      <Col className="rewards__list">
            {/* Reward Cards are being rendered here*/}
            {
              rewards.map(reward => {
                return <RewardCard key={reward.id} reward={reward} />
              })
            }
      </Col>
    </Container>
  )
}