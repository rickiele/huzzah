/* PURPOSE: Reward card */

import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { RewardEditModal } from "./RewardEditModal"
import "./Reward.css"

/* Render individual reward card */
export const RewardCard = ({ reward }) => (
	<Card className="reward" style={{ color: "#000"}} id="bootstrap" >
		<Row>
			<Col className="reward__left" sm={8}>
				<Card.Body>
					<Card.Title className="reward__name" id="bootstrap" >
						{reward.name} at {reward.location}
					</Card.Title>
				</Card.Body>
			</Col>
			<Col className="reward__right" sm={3}>
				{/* Edit Reward Button and Modal -- Is props.key - props.reward */}
				<RewardEditModal key={reward.id} reward={reward}/>
			</Col>
		</Row>
	</Card>
)