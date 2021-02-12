/* PURPOSE: Reward Screen cards */

import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { RewardGetModal } from "./RewardGetModal"
import "./Reward.css"

/* Render the reward cards */
export const RewardScreenCard = ({ reward }) => (
	<Card className="reward" style={{ color: "#000"}} id="bootstrap" >
		<Row>
			<Col className="reward__left" sm={8}>
				<Card.Body id="bootstrap">
					<Card.Title className="reward__name" id="bootstrap">
					 <h3>	{reward.name} at {reward.location} </h3>
					</Card.Title>
				</Card.Body>
			</Col>
			<Col className="reward__right" sm={3}>
        {/* Get Reward Modal */}
				<RewardGetModal key={reward.id} reward={reward}/>
			</Col>
		</Row>
	</Card>
)