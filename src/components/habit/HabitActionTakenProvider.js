/* PURPOSE: Habit Action Taken Provider */
import React, { useState, createContext } from "react"

export const HabitActionsContext = createContext()

export const HabitActionTakenProvider = (props) => {
  const [habitActions, setHabitActions] = useState([])

  const getHabitActions = () => {
    return fetch("http://localhost:8088/habits/?_embed=habitActionTaken")
    .then(res => res.json())
    .then(setHabitActions)
  }

  const addHabitAction = (habitObj) => {
    return fetch("http://localhost:8088/habitActionTaken", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(habitObj)
        })
        .then(getHabitActions)
  }

  const getHabitActionsById = (id) => {
    return fetch(`http://localhost:8088/habits/${id}?_embed=habitActionTaken`)
    .then(res => res.json())
  }

  return (
    <HabitActionsContext.Provider value={{
        habitActions, getHabitActions, addHabitAction, getHabitActionsById
    }}>
        {props.children}
    </HabitActionsContext.Provider>
  )
}

