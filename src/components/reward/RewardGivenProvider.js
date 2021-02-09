/* PURPOSE: Reward Given Provider */

import React, { useState, createContext } from "react"

export const RewardGivenContext = createContext()

export const RewardGivenProvider = (props) => {
  const [rewardsGiven, setRewardsGiven] = useState([])

  const getRewardsGiven = () => {
    return fetch("http://localhost:8088/rewardsGiven")
    .then(res => res.json())
    .then(setRewardsGiven)
  }

  const addRewardGiven = rewardGivenObj => {
    return fetch("http://localhost:8088/rewardsGiven", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(rewardGivenObj)
    })
    .then(getRewardsGiven)
}

  return (
    <RewardGivenContext.Provider value={{
      rewardsGiven, getRewardsGiven, addRewardGiven
    }}>
        {props.children}
    </RewardGivenContext.Provider>
  )
}