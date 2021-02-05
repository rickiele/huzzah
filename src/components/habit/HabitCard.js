/* Purpose: Individual Habit Card */
import React from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import { HabitProgress } from "./HabitProgress"
import { HabitEditModal } from './HabitEditModal'
import "./Habit.css"

export const HabitCard = ({ habit }) => (
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
					<Button className="habit__trackHabitBtn">Track Habit</Button>
				</Col>
				<Col className="">
					<HabitEditModal key={habit.id} habit={habit}/>
				</Col>

			</Row>
  	</Card>
)
