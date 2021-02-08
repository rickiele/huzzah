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
		const { getHabitActions, addHabitAction } = useContext(HabitActionsContext)
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
					<Button 
					className="habit__trackHabitBtn"
					onClick={event => {
						event.preventDefault()
						handleTrackHabit()
					}}>
						Track Habit</Button>
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