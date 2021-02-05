/* Purpose: Individual Reward Card */
import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { RewardEditModal } from "./RewardEditModal"
import "./Reward.css"

export const RewardCard = ({ reward }) => (
	<Card className="reward mb-3 " style={{ color: "#000"}}>
		<Row>
			<Col>
				<Card.Body>
					<Card.Title className="reward__name">
						{reward.name} at {reward.location}
					</Card.Title>
				</Card.Body>
			</Col>
			<Col>
				<RewardEditModal key={reward.id} reward={reward}/>
			</Col>
		</Row>
	</Card>
)