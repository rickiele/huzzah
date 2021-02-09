/* PURPOSE: Reward Provider */

import React, { useState, createContext } from "react"

export const RewardContext = createContext()

export const RewardProvider = (props) => {
    const [rewards, setRewards] = useState([])

    const getRewards = () => {
        return fetch("http://localhost:8088/rewards")
        .then(res => res.json())
        .then(setRewards)
    }

    const addReward = rewardObj => {
        return fetch("http://localhost:8088/rewards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rewardObj)
        })
        .then(getRewards)
    }

    const getRewardById = (id) => {
        return fetch(`http://localhost:8088/rewards/${id}`)
            .then(res => res.json())
    }

    const deleteReward = rewardId => {
        return fetch(`http://localhost:8088/rewards/${rewardId}`, {
            method: "DELETE"
        })
        .then(getRewards)
      }

    const updateReward = reward => {
      return fetch(`http://localhost:8088/rewards/${reward.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reward)
      })
        .then(getRewards)
    }

    return (
        <RewardContext.Provider value={{
            rewards, getRewards, addReward, getRewardById, deleteReward, updateReward
        }}>
            {props.children}
        </RewardContext.Provider>
    )
}