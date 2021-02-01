import React, { useContext, useEffect } from "react"
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
    <div className="rewards">
		{/* Say hi to the user */}
		<div className="rewards__sayHiToUser">
			<h1 className="rewards__sayHiToUser-Name"> Hello, 
				{
					users.map(user => {
					return <UserCard key={user.id} user={user} />
					})
				}
			</h1>
		</div>
      <div className="rewards__addRewardContainer">
          <button className="rewards__addRewardBtn" onClick={() => {history.push("/rewards/create")}}>Add Reward</button>
          <h2>Rewards</h2>
      </div>

      {/* Reward Cards are being rendered here*/}
      {
        rewards.map(reward => {
          return <RewardCard key={reward.id} reward={reward} />
        })
      }

    </div>
  )
}