/* Purpose: Individual Reward Card */
import React from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Reward.css"

export const RewardCard = ({ reward }) => (
	<Card className="rewards mb-3 " style={{ color: "#000"}}>
		<Row>
			<Col>
				<Card.Body>
					<Card.Title className="reward__name">
						{reward.name}
					</Card.Title>
				</Card.Body>
			</Col>
			<Col>
					<Button className="reward__deleteRewardBtn">X</Button>
			</Col>
		</Row>
	</Card>
)