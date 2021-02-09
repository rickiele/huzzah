import React from "react"
import { Route } from "react-router-dom"
import { HabitProvider } from "./habit/HabitProvider"
import { RewardProvider } from "./reward/RewardProvider"
import { UserProvider } from "./user/UserProvider"
import { HabitList } from "./habit/HabitList"
import { RewardList } from "./reward/RewardList"
import { HabitActionTakenProvider } from "./habit/HabitActionTakenProvider"
import { RewardScreen } from './reward/RewardScreen'


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the home page.. what will the home page be? The dashboard maybe... */}
            {/* <Route exact path="/">
                <Home />
            </Route> */}

            {/* localhost:3000 -- Dashboard */}
            <HabitActionTakenProvider>
            <HabitProvider>
                <RewardProvider>
                    <UserProvider>

                        <Route exact path="/">
                            <HabitList />
                            <RewardList />
                        </Route>
                        
                        {/* You put :habitId(\d+) at the end of the URL to serve as a variable to hold the actual value 
                        that will be in the URL. For example, if the URL is http://localhost:3000/habits/detail/3, 
                        the value of 3 will be stored in that variable named habitId */}
                        {/* REWARD SCREEN 
                        You could call rewardlist again, and have the get reward button 
                        setState / false - pass it onto this / or a new component - 
                        */}
                        <Route exact path="/huzzah">
                            <RewardScreen />
            
                        </Route>


                    </UserProvider>
                </RewardProvider>
            </HabitProvider>
            </HabitActionTakenProvider>



        </>
    )
}