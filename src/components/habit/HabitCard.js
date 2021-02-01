/* Purpose: Individual Habit Card */
import React from "react"
import "./Habit.css"
import { Button, Card, Col, Row } from "react-bootstrap"
import { HabitProgress } from "./HabitProgress.js"
import "bootstrap/dist/css/bootstrap.min.css"

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
					<Button className="habit__deleteHabitBtn">X</Button>
				</Col>
			</Row>
  	</Card>
)
