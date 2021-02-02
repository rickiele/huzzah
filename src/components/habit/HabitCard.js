/* Purpose: Individual Habit Card */
import React from "react"
import { Link } from "react-router-dom"
import { Button, Card, Col, Row } from "react-bootstrap"
import { HabitProgress } from "./HabitProgress"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Habit.css"

export const HabitCard = ({ habit }) => (
    <Card className="habits mb-3 " style={{ color: "#000"}}>
			<Row>

				<Col className="habit__left">
					<Card.Body>
						<Card.Title>
							<h3 className="habit__name">{habit.name}</h3>
						</Card.Title>
						<HabitProgress/>
					</Card.Body>
				</Col>

				<Col className="habit__right">
					<Button className="habit__trackHabitBtn">Track Habit</Button>
				</Col>
				<Col className="">
					<Link to={`/habits/${habit.id}`}>
						<Button className="habit__editHabitBtn">
							Edit Habit
						</Button>
					</Link>
				</Col>

			</Row>
  	</Card>
)

// 	You need an onclick event for the button
