import React, { useContext, useEffect, useState } from "react"
import "./Habit.css"
import { ProgressBar } from "react-bootstrap"
import { HabitActionsContext } from "./HabitActionTakenProvider"

export const HabitProgress = ({habit}) => {
  // Get Habit and Habit Actions
  const { habitActions, getHabitActions, getHabitActionsById } = useContext(HabitActionsContext)

  useEffect(() => {
    getHabitActions()
  }, [])


  const matchHabit = habitActions.find((habitObj) => habitObj.id ===  habit.id)
  const habitActionArray = matchHabit.habitActionTaken
  const totalHabitActions = habitActionArray.length

  console.log(totalHabitActions, "habit actions length")

  const habitWeek = 7
  const currentProgress = (totalHabitActions*100) / habitWeek

  console.log(currentProgress, "current progress of habit")

  console.log(Math.round(2.23))

  return (
    <ProgressBar now={Math.round(currentProgress)} label={Math.round(currentProgress)} />
  )
}


/* 
 */
/* dynamic habit (habitActions) and stale habits { habit } 
how to divide with javascript - percentage values - apple.length / it by the number */

/* Connect the track habit button to the progress bar
You need to get Habit Actions/ import the provider
the progressbar now needs to be the number of objects in a habitactiontaken/ 7 

In the track habit button  component there needs to be an if statement - 
progress bar needs to be the number of objects in habitactiontaken for that certain habit - so you need to
have the habit id



*/
/* 
When the track habit button is clicked, 
1. The habit action has been taken, and the timestamp of that habit action taken is saved to the database
2. It triggers an event tied to the progress bar to show the user's habit progression
*/


/* This provider needs to know the data from the HabitActionTaken provider - 
It needs to know how many times the Track Habit button has been pressed since the start of the habit

If the habit has been tracked 3 times since the start of their habit,
show that on the progress bar for 3 out of 7 times
*/


/* 
When the habit action taken reaches 7 times since the start of their habit,
show the reward screen

If the habit action taken is > 7 then go to the reward screen, and reset progress bar back to 0
If the habit action taken is < 7, have the progress bar reflect that that number



You need to know how many times the button has been clicked since the start of the habit

In order to do that you need to


progress bar is < 7
make the progress bar

INCOMING 
How does the progress bar reset?
*/
