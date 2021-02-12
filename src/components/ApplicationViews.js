import React from "react"
import { Route } from "react-router-dom"
import { HabitProvider } from "./habit/HabitProvider"
import { RewardProvider } from "./reward/RewardProvider"
import { RewardGivenProvider } from "./reward/RewardGivenProvider"
import { UserProvider } from "./user/UserProvider"
import { HabitList } from "./habit/HabitList"
import { RewardList } from "./reward/RewardList"
import { HabitActionTakenProvider } from "./habit/HabitActionTakenProvider"
import { RewardScreen } from './reward/RewardScreen'


export const ApplicationViews = () => {
    return (
        <>
      
            <HabitActionTakenProvider>
            	<HabitProvider>
                <RewardProvider>
                  <RewardGivenProvider>
                    <UserProvider>

                      <Route exact path="/habits">
                          <HabitList />
                      </Route>
                        
											<Route exact path="/rewards">
													<RewardList />
											</Route>
                        {/* You put :habitId(\d+) at the end of the URL to serve as a variable to hold the actual value 
                        that will be in the URL. For example, if the URL is http://localhost:3000/habits/detail/3, 
                        the value of 3 will be stored in that variable named habitId */}
                        {/* REWARD SCREEN 
                        You could call rewardlist again, and have the get reward button 
                        setState / false - pass it onto this / or a new component - 
                        */}
                      <Route exact path="/huzzah/:habitId(\d+)">
                          <RewardScreen />
                      </Route>


                    </UserProvider>
                  </RewardGivenProvider>
              </RewardProvider>
         		</HabitProvider>
          </HabitActionTakenProvider>
        </>
    )
}