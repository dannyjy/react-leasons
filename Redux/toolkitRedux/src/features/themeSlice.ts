import { createSlice } from '@reduxjs/toolkit';

export interface ThemeAction {
    payload: {
        color: string
    }
    type?: string
}

const initialState = { color: ""}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeColor: (state, action: ThemeAction) => {
            state.color = action.payload.color
        }
    }
})

export const { changeColor } = themeSlice.actions
export default themeSlice.reducer