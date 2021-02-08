import React, { useContext, useEffect, useState } from "react"
import { ProgressBar } from "react-bootstrap"
import { HabitActionsContext } from "./HabitActionTakenProvider"
import "./Habit.css"

export const HabitProgress = ({habit}) => {
  // Get Habit and Habit Actions
  const { habitActions, getHabitActions } = useContext(HabitActionsContext)

  useEffect(() => {
    getHabitActions()
  }, [])


  const matchHabit = habitActions.find((habitObj) => habitObj.id ===  habit.id)
  // ? - if this existss do it, then if undefined don't do anything
  const habitActionArray = matchHabit?.habitActionTaken
  const totalHabitActions = habitActionArray?.length

  console.log(totalHabitActions, "habit actions length")

  const habitWeek = 7
  const currentProgress = (totalHabitActions*100) / habitWeek

  console.log(currentProgress, "current progress of habit")

  console.log(Math.round(2.23))

  return (
    <ProgressBar now={Math.round(currentProgress)} label={Math.round(currentProgress)} />
  )
}


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

How to show the reward screen 
create a new page / application view - history.push("/huzzah")

REWARD SCREEN - localhost.../huzzah

List the rewards, and have a Choose Reward btn for each reward
When reward has been chosen, create a POST to rewardGivenProvider, take the user to that url


Then bring the user back to the application (history.push("/"))



If the habit action taken objects is => 7 
then go to the reward screen
& reset progress bar back to 0 / clear the progress bar

If the habit action taken is < 7, 
do nothing

have the progress bar reflect that that number



You need to know how many times the button has been clicked since the start of the habit

In order to do that you need to


progress bar is < 7
make the progress bar

INCOMING 
How does the progress bar reset?
*/
