import { createSlice } from "@reduxjs/toolkit";
import type { UserAction, UserType } from "../types/types";

const initialState: UserType = { name: "", age: 0, email: ""}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: UserAction) => {
            state.name = action.payload.name
            state.age = action.payload.age
            state.email = action.payload.email
        },
        logout: (state) => {
            state.name = initialState.name
            state.age = initialState.age
            state.email = initialState.email
        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer