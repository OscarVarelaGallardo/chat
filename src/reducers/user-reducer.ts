import { act } from "react-dom/test-utils"

export type UserActions =
    {
        type: 'add-user', payload: { user: Object }

    }

export type UserState =
    {
        user: {
            name: string,
            email: string,
            password: string,
            token: string
        }
    }

export const initialState: UserState = {
    user: {
        name: '',
        email: '',
        password: '',
        token: ''
    }

}

export const userReducer = (
    state: UserState = initialState,
    action: UserActions
) => {
    if (action.type == "add-user") {
        return {
            ...state,
            user: action.payload.user
        }
    }
    return state
}