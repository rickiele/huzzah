/* Purpose: Data for habits, adding, editing, and deleting habits.
 */
import React, { useState, createContext } from "react"

export const HabitContext = createContext()

export const HabitProvider = (props) => {
    const [habits, setHabits] = useState([])

    const getHabits = () => {
        return fetch("http://localhost:8088/habits")
        .then(res => res.json())
        .then(setHabits)
    }

    const addHabit = habitObj => {
        return fetch("http://localhost:8088/habits", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(habitObj)
        })
        .then(getHabits)
    }

    const getHabitById = (id) => {
        return fetch(`http://localhost:8088/habits/${id}`)
            .then(res => res.json())
    }

    const deleteHabit = habitId => {
        return fetch(`http://localhost:8088/habits/${habitId}`, {
            method: "DELETE"
        })
        .then(getHabits)
      }

    const updateHabit = habit => {
      return fetch(`http://localhost:8088/habits/${habit.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(habit)
      })
        .then(getHabits)
    }
    

    return (
        <HabitContext.Provider value={{
            habits, getHabits, addHabit, getHabitById, deleteHabit, updateHabit
        }}>
            {props.children}
        </HabitContext.Provider>
    )
}