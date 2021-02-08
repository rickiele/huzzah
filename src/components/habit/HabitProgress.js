import React from "react"
import "./Habit.css"
import { ProgressBar } from "react-bootstrap"

export const HabitProgress = () => (
  <ProgressBar now={60} />
)

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
