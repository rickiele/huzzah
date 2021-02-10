import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { UserCard } from "../user/UserCard"
import { UserContext } from "../user/UserProvider"
import "./Header.css"

/* -------------------- To give all pages a uniform header -------------------- */

export const HeaderCard = () => {

    const history = useHistory()
    const { users, getUsers } = useContext(UserContext)
    const currentUser = parseInt(localStorage.getItem("huzzah_user"))

    useEffect(() => {
        getUsers()
    }, [])

    const handleLogOutBtn = () => {
        history.push(`/welcome`)
        localStorage.clear()
    }

    return (
        <>
        <header>
					<div className="header__left">
						<h1>Huzzah</h1>
						<h2>Daily Habit Tracker and Celebrater</h2>
					</div>
					
					<div className="header__right">
						<button onClick={handleLogOutBtn} className="logOutBtn">Log Out</button>
						<h1> Hello
						{ 
								users.filter(u => u.id === currentUser).map(user => {
								return <UserCard key={user.id} user={user} />
								})
						}
						</h1>
					</div>
        </header>
        </>
    )
}