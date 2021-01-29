import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom" 
import { RewardContext } from "./RewardProvider"
import { RewardCard } from "./RewardCard"
import "./Reward.css"

export const RewardList = () => {
  const { rewards, getRewards } = useContext(RewardContext)

  useEffect(() => {
    getRewards()
  }, [])

  const history = useHistory()

  return (
    <div className="rewards">
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