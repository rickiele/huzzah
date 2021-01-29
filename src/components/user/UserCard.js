/* Purpose: Individual User Card */

import React from "react"
import "./User.css"

export const UserCard = ({ user }) => (
	<section className="user">
				<h3 className="user__name">{user.name}</h3>
		</section>
)