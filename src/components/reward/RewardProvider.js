/* Purpose: Data for rewards, adding, editing, and deleting rewards.
 */
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

    return (
        <RewardContext.Provider value={{
            rewards, getRewards, addReward
        }}>
            {props.children}
        </RewardContext.Provider>
    )
}