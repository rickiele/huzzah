/* Purpose: Individual Reward Card */

import React from "react"
import "./Reward.css"

export const RewardCard = ({ reward }) => (
	<section className="reward">
				<h3 className="reward__name">{reward.name}</h3>
				<button className="reward__deleteRewardBtn">Delete Reward</button>
		</section>
)