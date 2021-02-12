/* Purpose: Individual User Card */

import React from "react"
import "./User.css"

export const UserCard = ({ user }) => (
				<h3 className="user__name" id="bootstrap"> Hi, {user.name}  👋</h3>
)