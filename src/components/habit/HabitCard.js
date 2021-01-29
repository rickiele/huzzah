/* Purpose: Individual Habit Card */
import React from "react"
import "./Habit.css"

export const HabitCard = ({ habit }) => (
    <section className="habit">
        <div className="habit__left">
            <h3 className="habit__name">{habit.name}</h3>
            <h4> Progress bar----- </h4>
        </div>
		<div className="habit__right">
			<button className="habit__trackHabitBtn">Track Habit</button>
			<button className="habit__deleteHabitBtn">Delete Habit</button>
		</div>
    </section>
)