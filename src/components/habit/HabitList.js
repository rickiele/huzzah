/* PURPOSE: List all the habits */

import React, { useContext, useEffect } from "react"
import { Container, Col } from "react-bootstrap"
import { HabitContext } from "./HabitProvider"
import { HabitCard } from "./HabitCard"
import { HabitAddModal } from "./HabitAddModal"
import "./Habit.css"

export const HabitList = () => {

  /* Access data from HabitContext from the HabitProvider */
  const { habits, getHabits } = useContext(HabitContext)

  /* Get the habits */
  useEffect(() => {
    getHabits()
  }, [])
  
  /* Render a list of all the habits */
  return (
    <Container className="habits">
      <div className="habits__addHabitContainer">
        <HabitAddModal />
        <h2>Habits</h2>
      </div>
      <Col className="habits__list">
        {/* Habit Cards are being rendered here*/}
        { habits.map(habit => {
            return <HabitCard key={habit.id} habit={habit} />})
        }
      </Col>
    </Container>
  )
}