import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { Button, Col, Row } from "react-bootstrap"
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
        history.push(`/login`)
        localStorage.clear()
    }

    return (
        <>
        <header>
					<Row>
						<Col>
							<h1>Huzzah</h1>
							<h4>Daily Habit Tracker and Celebrator</h4>
						</Col>
						<Col className="header__navigationContainer">
							<h4>Habits</h4>
							<h4>Rewards</h4>
						</Col>
						<Col>
							<Button onClick={handleLogOutBtn} className="logOutBtn">Log Out</Button>
						</Col>
					</Row>
						<h1> Hello
						{ 
								users.filter(u => u.id === currentUser).map(user => {
								return <UserCard key={user.id} user={user} />
								})
						}
						</h1>
					
        </header>
        </>
    )
}