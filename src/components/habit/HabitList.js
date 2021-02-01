import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom" 
import { HabitContext } from "./HabitProvider"
import { HabitCard } from "./HabitCard"
import "./Habit.css"
import { Container, Button, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

export const HabitList = () => {
  const { habits, getHabits } = useContext(HabitContext)

  useEffect(() => {
    getHabits()
  }, [])

  const history = useHistory()

  return (
    <Container className="habits">
        <div className="habits__addHabitContainer">
          <Button className="habits__addHabitBtn" onClick={() => 
            {history.push("/habits/create")}}>Add Habit
          </Button>
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