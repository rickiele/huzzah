/* Purpose: Individual User Card */

import React from "react"
import "./User.css"

export const UserReward = ({ user }) => (
    <h4 className="user__rewardScreen" id="bootstrap"> 
      Congrats, {user.name}! 🎉
      You did it for the week!
      Now celebrate yourself with a reward.
    </h4>
)