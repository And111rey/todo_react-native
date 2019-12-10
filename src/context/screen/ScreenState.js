import React from "react"
import { ScreenContext } from "./screenContext"
import { screenReducer } from "./screenReducer"


export const ScreenState = ({children}) => {
    return <ScreenContext.Provider> {children} </ScreenContext.Provider>
}