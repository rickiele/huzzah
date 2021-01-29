import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { HabitContext } from '../habit/HabitProvider'
import "./Habit.css"

export const HabitForm = () => {
    const { addHabit } = useContext(HabitContext)
    
    const [habit, setHabit] = useState(
        {
            name: ""
        }
    )

    const history = useHistory()


    const handleControlledInputChange = (event) => {
        const newHabit = { ...habit }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newHabit[event.target.id] = selectedVal
        setHabit(newHabit)
    }

    const handleSaveHabit = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

        addHabit(habit)
        .then(() => history.push("/"))
    }

    return (
        <form className="habitForm">
            <h2 className="habitForm__title">New Habit</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Habit name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="habit name" value={habit.name}/>
                </div>
            </fieldset>
           
            <button className="btn btn-primary"
                onClick={handleSaveHabit}>
                Save Habit
            </button>
        </form>
    )

}