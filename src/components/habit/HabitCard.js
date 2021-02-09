/* Purpose: Individual Habit Card */
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom" 
import { Button, Card, Col, Row } from "react-bootstrap"
import { HabitProgress } from "./HabitProgress"
import { HabitEditModal } from './HabitEditModal'
import { HabitContext } from "./HabitProvider"
import { HabitActionsContext } from "./HabitActionTakenProvider"
import "./Habit.css"

export const HabitCard = ({ habit }) => {

		// Get Habits for Habit Card
		const { getHabits } = useContext(HabitContext)

		// Get Habit Actions for POST
		const { getHabitActions, addHabitAction, habitActions } = useContext(HabitActionsContext)
		const timestamp = Date.now()
  	const habitActionTimestamp = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp)

		const [isLoading, setIsLoading] = useState(true);
		const history = useHistory();
		
		useEffect(() => {
			getHabits()
			.then(getHabitActions())
		}, [])
		
		 const handleTrackHabit = () => {
      setIsLoading(true);
        //POST - add
        addHabitAction ({
            habitId: habit.id,
            timestamp: habitActionTimestamp
        })
        .then(() => history.push("/"))
    }

		// Get your habit actions
		const matchHabit = habitActions.find((habitObj) => habitObj.id ===  habit.id)
		const habitActionArray = matchHabit?.habitActionTaken
 		const totalHabitActions = habitActionArray?.length

		console.log(totalHabitActions, "habit actions")
		
		/* 
		You need to get the Track Habit btn to turn into the Get Reward btn 
		when totalHabitActions === 7

		if (totalHabitActions === 7) {
			Show the get rewards button
			and delete the totalHabitActions for that habit
		} else {
			Show the track habit button
		}

		GET REWARDS BTN
		history.push("/huzzah")
		*/

		return (
    <Card className="habits mb-3 " style={{ color: "#000"}}>

			<Row>
				<Col className="habit__left">
					<Card.Body>
						<Card.Title className="habit__name">
							<h3>{habit.name}</h3>
						</Card.Title>
						
					</Card.Body>
				</Col>

				<Col className="habit__right">
					{totalHabitActions === 7 ? 
					<> 
					<Button className="habit__getRewardBtn" onClick={() => {
						history.push("/huzzah")}} >
							Get Reward</Button> 
					</> 
					: 
					<> 
					<Button className="habit__trackHabitBtn" onClick={event => {
							event.preventDefault()
							handleTrackHabit()}} >
								Track Habit</Button> 
					</>}
				</Col>
					<HabitEditModal key={habit.id} habit={habit}/>

			</Row>

			<Row>
				<Col>
					<HabitProgress key={habit.id} habit={habit}/>
					</Col>
			</Row>
  	</Card>
		)

}


/* 

You need an if/else statement on the track habit button 

if the user's habit objects = 7 / then show the Get Reward Button

else, show the track habit button
set a true false state 


GET REWARD BTN
Will history.push(to a reward screen)
*/