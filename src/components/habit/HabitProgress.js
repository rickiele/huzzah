/* PURPOSE: Habit Progess Bar */

import React, { useContext, useEffect } from "react"
import { HabitActionsContext } from "./HabitActionTakenProvider"
import { ProgressBar } from "react-bootstrap"
import "./Habit.css"

export const HabitProgress = ({ habit }) => {

 /*  Get Habit and Habit Actions */
  const { habitActions, getHabitActions } = useContext(HabitActionsContext)

  /* Get the Habit Actions Taken */
  useEffect(() => {
    getHabitActions()
  }, [])

  /* totalHabitActions = number of times a habit has been tracked */
  const matchHabit = habitActions.find((habitObj) => habitObj.id ===  habit.id)
  const habitActionArray = matchHabit?.habitActionTaken
  const totalHabitActions = habitActionArray?.length

  /* currentProgress = the percentage the habit has been tracked */
  const habitWeek = 7
  const currentProgress = (totalHabitActions*100) / habitWeek

  /* Render the progress bar
     Round the number up */
  return (
    <ProgressBar class="progressBar"id="bootstrap" now={Math.round(currentProgress)} label={Math.round(currentProgress)} />
  )
}
