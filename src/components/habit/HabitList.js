import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom" 
import { HabitContext } from "./HabitProvider"
import { HabitCard } from "./HabitCard"
import "./Habit.css"

export const HabitList = () => {
  const { habits, getHabits } = useContext(HabitContext)

  useEffect(() => {
    getHabits()
  }, [])

  const history = useHistory()

  return (
    <div className="habits">
      <div className="habits__addHabitContainer">
        <button className="habits__addHabitBtn" onClick={() => {history.push("/habits/create")}}>Add Habit</button>
        <h2>Habits</h2>
      </div>


      {/* Habit Cards are being rendered here*/}
      {
        habits.map(habit => {
          return <HabitCard key={habit.id} habit={habit} />
        })
      }

    </div>
  )
}