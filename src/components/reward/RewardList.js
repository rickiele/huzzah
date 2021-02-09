/* PURPOSE: List all the rewards */

import React, { useContext, useEffect } from "react"
import { Container, Col} from "react-bootstrap"
import { RewardContext } from "./RewardProvider"
import { UserContext } from "../user/UserProvider"
import { RewardCard } from "./RewardCard"
import { RewardAddModal } from "./RewardAddModal"
import "./Reward.css"

export const RewardList = () => {

   /* Context for rewards and users */
  const { rewards, getRewards } = useContext(RewardContext)
  const { users, getUsers } = useContext(UserContext)

  /* Get the rewards and then get the users */
  useEffect(() => {
	  getRewards()
    .then(getUsers())
  }, [])

  /* Get the name of the logged in user */
  // const matchUser = users.find((user) => user.id === localStorage.activeUser)
  // console.log(matchUser, "user")
  // const currentUser = localStorage.activeUser
  // console.log(currentUser)

  /* Render the list of reward cards */
  return (
    <Container className="rewards">
      <div className="rewards__sayHiToUser">
        {/* Say hi to the logged in user */}
        <h1> Hello user! </h1>
            {/* { 
              users.map(user => {
              return <UserCard key={user.id} user={user} />
            })
          } */}
        <RewardAddModal />
        <h2>Rewards</h2>
      </div>
      
      <Col className="rewards__list">
        {/* Reward Cards are being rendered here*/}
        {rewards.map(reward => {
             return <RewardCard key={reward.id} reward={reward} /> })
        }
      </Col>
    </Container>
  )
}