/* Purpose: Individual Habit Card */
import React from "react"
import { Link } from "react-router-dom"
import { Button, Card, Col, Row } from "react-bootstrap"
import { HabitContext } from "./HabitProvider"
import { HabitProgress } from "./HabitProgress"
import { HabitEditModal } from './HabitEditModal'
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
					<HabitEditModal key={habit.id} habit={habit}/>
				</Col>

			</Row>
  	</Card>
)

					// <Link to={`/habits/${habit.id}`}>
// 	You need an onclick event for the button
