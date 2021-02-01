import React from "react"
import "./Habit.css"
import { ProgressBar } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

export const HabitProgress = () => (
  <ProgressBar now={60} />
)