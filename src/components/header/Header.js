import React, { useContext, useEffect } from "react"
import { useHistory, Link } from 'react-router-dom'
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
						<Col sm={2}>
							<h1 className="logo">HUZZAH</h1>
						</Col>
						<Col className="header__navigationContainer" sm={6}>
								<ul className="navbar">
									<li className="navbar__item active" id="bootstrap">
											<Link id="bootstrap" className="navbar__link" to="/habits" >
												Habits
											</Link>
									</li>
									<li className="navbar__item" id="bootstrap">
											<Link className="navbar__link" to="/rewards">
												Rewards
											</Link>
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
							<div>
							<Button onClick={handleLogOutBtn} className="logOutBtn" id="bootstrap">Log Out</Button>
							</div>
						</Col>
						
					</Row>
					
        </header>
        </>
    )
}