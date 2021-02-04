import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom" 
import { HabitContext } from "./HabitProvider"
import { HabitCard } from "./HabitCard"
import { HabitAddModal } from "./HabitAddModal"
import "./Habit.css"
import { Modal, Container, Button, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

export const HabitList = () => {
  // Access data from HabitContext from the HabitProvider
  const { habits, getHabits } = useContext(HabitContext)

  useEffect(() => {
    getHabits()
  }, [])

  // Another hook, let's us tell React which route we want to visit (history.push)
  const history = useHistory()
  
  return (
    <Container className="habits">
        <div className="habits__addHabitContainer">
          <HabitAddModal />
          <h2>Habits</h2>
        </div>
        <Col>
          {/* Habit Cards are being rendered here*/}
          {
            habits.map(habit => {
              return <HabitCard key={habit.id} habit={habit} />
            })
          }
        </Col>
    </Container>
    
  )
}



// Modal in this one - 