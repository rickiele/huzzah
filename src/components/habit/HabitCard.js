/* Purpose: Individual Habit Card */
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom" 
import { Button, Card, Col, Row } from "react-bootstrap"
import { HabitProgress } from "./HabitProgress"
import { HabitEditModal } from './HabitEditModal'
import { HabitContext } from "./HabitProvider"
import { HabitActionsContext } from "./HabitActionTakenProvider"
import "./Habit.css"

export const HabitCard = ({ habit }) => {

	// Get Habits for Habit Card
		const { habits, getHabits } = useContext(HabitContext)

		useEffect(() => {
			getHabits()
		}, [])

	// Get Habit Actions for POST
		const { addHabitAction } = useContext(HabitActionsContext)
		const timestamp = Date.now()
  	const habitActionTimestamp = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp)
		
		const [isLoading, setIsLoading] = useState(true);
		const history = useHistory();

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
						<HabitProgress/>
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

				<Col className="">
					<HabitEditModal key={habit.id} habit={habit}/>
				</Col>

			</Row>
  	</Card>
		)

}
