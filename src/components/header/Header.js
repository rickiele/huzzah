import React, { useContext, useEffect } from "react"
import { useHistory, Link, NavLink } from 'react-router-dom'
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
						<Col sm={3}>
							<div className="header__logoContainer">
								<div className="header__circle shake"></div>
								<h1 className="logo">HUZZAH</h1>
							</div>
						</Col>
						<Col className="header__navigationContainer" sm={5}>
								<ul className="navbar">
									<li className="navbar__item" id="bootstrap">
											<NavLink id="bootstrap" 
											className="navbar__link" 
											to="/habits" 
											activeStyle={{
												color: "#F96632"
											}}>
												Habits
											</NavLink>
									</li>
									<li className="navbar__item" id="bootstrap">
											<NavLink className="navbar__link" 
											to="/rewards"
											activeStyle={{
												color: "#F96632"
											}}
											>
												Rewards
											</NavLink>
									</li>
								</ul>
						</Col>
						<Col className="header__userLogout" sm={4}>
							<div className="header__userDiv">
							{ 
									users.filter(u => u.id === currentUser).map(user => {
									return <UserCard key={user.id} user={user} />
									})
							}
							</div>
							<div className="header__logOutBtn">
							<Button onClick={handleLogOutBtn} className="logOutBtn" id="bootstrap">Log Out</Button>
							</div>
						</Col>
						
					</Row>
					
        </header>
        </>
    )
}