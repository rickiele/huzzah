/* Purpose: Individual Reward Card */
import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { RewardGetModal } from "./RewardGetModal"
import "./Reward.css"

export const RewardScreenCard = ({ reward }) => (
	<Card className="reward mb-3 " style={{ color: "#000"}}>
		<Row>
				<Card.Body>
					<Card.Title className="reward__name">
					 <h3>	{reward.name} at {reward.location} </h3>
					</Card.Title>
				</Card.Body>
			<Col>
				<RewardGetModal key={reward.id} reward={reward}/>
			</Col>
		</Row>
	</Card>
)