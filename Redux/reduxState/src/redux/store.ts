import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { tasksReducer } from "./reducers/taskReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    task: tasksReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch