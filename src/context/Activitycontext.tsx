import { createContext, ReactNode, useReducer } from "react";
import { activityReducer, initialState } from '../reducers/user-reducer'

type ActivityContextProps = {
    children: ReactNode
}

export const ActivityContext = createContext()

export const ActivityProvider = ({ children }: ActivityContextProps) => {
    const [state, dispatch] = useReducer(activityReducer, initialState)


    return (
        <ActivityContext.Provider value={{ }} >
            {children}
        </ActivityContext.Provider>
    )
}