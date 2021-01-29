import React from "react"
import { Route } from "react-router-dom"
import { HabitList } from "./habit/HabitList"
import { HabitProvider } from "./habit/HabitProvider"
import { HabitForm } from "./habit/HabitForm"
import { UserProvider } from "./user/UserProvider"
import { RewardProvider } from "./reward/RewardProvider"
import { RewardList } from "./reward/RewardList"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the home page.. what will the home page be? The dashboard maybe... */}
            {/* <Route exact path="/">
                <Home />
            </Route> */}

            {/* localhost:3000 -- Dashboard */}
            <HabitProvider>
                <RewardProvider>
                    <UserProvider>

                        <Route exact path="/">
                            <HabitList />
                            <RewardList />
                        </Route>

                    </UserProvider>
                </RewardProvider>
            </HabitProvider>


        </>
    )
}